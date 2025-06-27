document.addEventListener('DOMContentLoaded', () => {
    contentSwitchers()
    smoothScroll()
  })
  
  // -------------------------------content switchers---------------------------------
  
  function contentSwitchers() {
    initSwitcher('.article1_blok3', {
      buttonPrev: '.article1_blok3_button1',
      buttonNext: '.article1_blok3_button2',
      textVar1: '.article1_blok3_text_var1',
      textVar2: '.article1_blok3_text_var2',
      img1: '.article1_blok3_img1',
      img2: '.article1_blok3_img2'
    })
  
    initSwitcher('.article2_blok3', {
      buttonPrev: '.article2_blok3_button1',
      buttonNext: '.article2_blok3_button2',
      textVar1: '.article2_blok3_text_var1',
      textVar2: '.article2_blok3_text_var2',
      img1: '.article2_blok3_img1',
      img2: '.article2_blok3_img2'
    })
  
    function initSwitcher(containerSelector, elementsSelectors) {
      const container = document.querySelector(containerSelector)
      if (!container) return
      
      const elements = {
        buttonPrev: container.querySelector(elementsSelectors.buttonPrev),
        buttonNext: container.querySelector(elementsSelectors.buttonNext),
        textVar1: container.querySelector(elementsSelectors.textVar1),
        textVar2: container.querySelector(elementsSelectors.textVar2),
        img1: container.querySelector(elementsSelectors.img1),
        img2: container.querySelector(elementsSelectors.img2)
      }
  
      if (Object.values(elements).some(el => !el)) {
        console.error(`Не все элементы Switcher в ${containerSelector} найдены`)
        return
      }
  
      elements.buttonPrev.addEventListener('click', () => toggleSlide(elements, true))
      elements.buttonNext.addEventListener('click', () => toggleSlide(elements, false))
    }
  
    function toggleSlide(elements, showFirst) {
      elements.textVar1.style.opacity = showFirst ? '1' : '0'
      elements.textVar2.style.opacity = showFirst ? '0' : '1'
      elements.img1.style.opacity = showFirst ? '1' : '0'
      elements.img2.style.opacity = showFirst ? '0' : '1'
    }
  }
  
  // -------------------------------smooth scroll---------------------------------
  
  function smoothScroll() {
    document.querySelectorAll('[data-target]').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault()
        
        const targetId = this.getAttribute('data-target')
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
          const offset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
          
          history.pushState(null, null, targetId)
        }
      })
    })

    
    function setupCartButtons() {
                const addButtons = document.querySelectorAll('.shop_card_add_button');

                addButtons.forEach(addButton => {
                    const addedCart = addButton.nextElementSibling;

                    if (addedCart && addedCart.classList.contains('added_to_cart')) {

                        const handleAdd = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addButton.classList.add('hidden');
                            addedCart.classList.add('visible');
                        };

                        const handleRemove = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addedCart.classList.remove('visible');
                            addButton.classList.remove('hidden');
                        };

                        addButton.addEventListener('click', handleAdd);
                        addButton.addEventListener('touchstart', handleAdd);

                        addedCart.addEventListener('click', handleRemove);
                        addedCart.addEventListener('touchstart', handleRemove);
                    }
                });
            }

            setupCartButtons();

  }