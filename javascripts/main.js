document.addEventListener('DOMContentLoaded', function() {

    function initSwitcher() {
        const container = document.querySelector('.article1_blok3');
        if (!container) return; // Выходим если нет на странице
        
        const elements = {
            buttonPrev: container.querySelector('.article1_blok3_button1'),
            buttonNext: container.querySelector('.article1_blok3_button2'),
            textVar1: container.querySelector('.article1_blok3_text_var1'),
            textVar2: container.querySelector('.article1_blok3_text_var2'),
            img1: container.querySelector('.article1_blok3_img1'),
            img2: container.querySelector('.article1_blok3_img2')
        };

        if (Object.values(elements).some(el => !el)) {
            console.error('Не все элементы Switcher найдены');
            return;
        }

        elements.buttonPrev.addEventListener('click', () => toggleSlide(elements, true));
        elements.buttonNext.addEventListener('click', () => toggleSlide(elements, false));
    }

    function initSwitcher2() {
        const container = document.querySelector('.article2_blok3');
        if (!container) return;
        
        const elements = {
            buttonPrev: container.querySelector('.article2_blok3_button1'),
            buttonNext: container.querySelector('.article2_blok3_button2'),
            textVar1: container.querySelector('.article2_blok3_text_var1'),
            textVar2: container.querySelector('.article2_blok3_text_var2'),
            img1: container.querySelector('.article2_blok3_img1'),
            img2: container.querySelector('.article2_blok3_img2')
        };

        if (Object.values(elements).some(el => !el)) {
            console.error('Не все элементы Switcher2 найдены');
            return;
        }

        elements.buttonPrev.addEventListener('click', () => toggleSlide(elements, true));
        elements.buttonNext.addEventListener('click', () => toggleSlide(elements, false));
    }

    function toggleSlide(elements, showFirst) {
        elements.textVar1.style.opacity = showFirst ? '1' : '0';
        elements.textVar2.style.opacity = showFirst ? '0' : '1';
        elements.img1.style.opacity = showFirst ? '1' : '0';
        elements.img2.style.opacity = showFirst ? '0' : '1';
    }

    initSwitcher();
    initSwitcher2();

    document.querySelectorAll('[data-target]').forEach(button => {
    button.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем стандартное поведение
    
    const targetId = this.getAttribute('data-target');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Прокрутка с учетом фиксированного меню (если есть)
      const offset = 80; // Отступ сверху в пикселях
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Добавляем хэш в URL без прыжка
      history.pushState(null, null, targetId);
    }
  });
});
});