document.addEventListener('DOMContentLoaded', () => {
  switcher()
})

function switcher() {
    const button1 = document.querySelector('.article1_blok3_button1');
    const button2 = document.querySelector('.article1_blok3_button2');
    const textVar1 = document.querySelector('.article1_blok3_text_var1');
    const textVar2 = document.querySelector('.article1_blok3_text_var2');
    const img1 = document.querySelector('.article1_blok3_img1');
    const img2 = document.querySelector('.article1_blok3_img2');

    function toggleContent(showFirst) {
        if(showFirst) {
            textVar1.style.opacity = '1';
            textVar2.style.opacity = '0';
            img1.style.opacity = '1';
            img2.style.opacity = '0';
        } else {
            textVar1.style.opacity = '0';
            textVar2.style.opacity = '1';
            img1.style.opacity = '0';
            img2.style.opacity = '1';
        }
    }

    button1.addEventListener('click', function() {
        toggleContent(true);
    });

    button2.addEventListener('click', function() {
        toggleContent(false);
    });

    toggleContent(false); 
}