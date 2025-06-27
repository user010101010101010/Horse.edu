document.addEventListener('DOMContentLoaded', () => {
  initContentSwitchers();
  initSmoothScroll();
  initCartButtons();
});

// ======================== CONTENT SWITCHERS ========================
function initContentSwitchers() {
  const switchers = [
    {
      container: '.article1_blok3',
      elements: {
        prevBtn: '.article1_blok3_button1',
        nextBtn: '.article1_blok3_button2',
        text1: '.article1_blok3_text_var1',
        text2: '.article1_blok3_text_var2',
        img1: '.article1_blok3_img1',
        img2: '.article1_blok3_img2'
      }
    },
    {
      container: '.article2_blok3',
      elements: {
        prevBtn: '.article2_blok3_button1',
        nextBtn: '.article2_blok3_button2',
        text1: '.article2_blok3_text_var1',
        text2: '.article2_blok3_text_var2',
        img1: '.article2_blok3_img1',
        img2: '.article2_blok3_img2'
      }
    }
  ];

  switchers.forEach(config => {
    const container = document.querySelector(config.container);
    if (!container) {
      console.warn(`Container ${config.container} not found`);
      return;
    }

    const elements = {
      prevBtn: container.querySelector(config.elements.prevBtn),
      nextBtn: container.querySelector(config.elements.nextBtn),
      text1: container.querySelector(config.elements.text1),
      text2: container.querySelector(config.elements.text2),
      img1: container.querySelector(config.elements.img1),
      img2: container.querySelector(config.elements.img2)
    };

    if (Object.values(elements).some(el => !el)) {
      console.error(`Missing elements in ${config.container}`);
      return;
    }

    elements.prevBtn.addEventListener('click', () => toggleSlide(elements, true));
    elements.nextBtn.addEventListener('click', () => toggleSlide(elements, false));
  });

  function toggleSlide(elements, showFirst) {
    elements.text1.style.opacity = showFirst ? '1' : '0';
    elements.text2.style.opacity = showFirst ? '0' : '1';
    elements.img1.style.opacity = showFirst ? '1' : '0';
    elements.img2.style.opacity = showFirst ? '0' : '1';
  }
}

// ======================== SMOOTH SCROLL ========================
function initSmoothScroll() {
  document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.dataset.target);
      if (!target) return;
      
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      history.pushState(null, null, this.dataset.target);
    });
  });
}

// ======================== CART BUTTONS ========================
function initCartButtons() {
  document.querySelectorAll('.shop_card_add_button').forEach(btn => {
    const addedCart = btn.nextElementSibling;
    
    if (!addedCart || !addedCart.classList.contains('added_to_cart')) return;
    
    const handleAdd = (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.add('hidden');
      addedCart.classList.add('visible');
    };
    
    const handleRemove = (e) => {
      e.preventDefault();
      e.stopPropagation();
      addedCart.classList.remove('visible');
      btn.classList.remove('hidden');
    };
    
    btn.addEventListener('click', handleAdd);
    btn.addEventListener('touchstart', handleAdd);
    addedCart.addEventListener('click', handleRemove);
    addedCart.addEventListener('touchstart', handleRemove);
  });
}