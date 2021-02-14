const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');

    burger.addEventListener('click', ()=> {
         // toggle  Nav
        nav.classList.toggle('nav-active');
        
        // Burger Animation
        burger.classList.toggle('toggle');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        

    });


}

navSlide();
