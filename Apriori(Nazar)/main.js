
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});



// function navSlide() {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".menu");
//   const navLinks = document.querySelectorAll(".menu li");
  
//   burger.addEventListener("click", () => {
//       //Toggle Nav
//       nav.classList.toggle("nav-active");
      
//       //Animate Links
//       navLinks.forEach((link, index) => {
//           if (link.style.animation) {
//               link.style.animation = ""
//           } else {
//               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//           }
//       });
//       //Burger Animation
//       burger.classList.toggle("toggle");
//   });
  
// }

// navSlide();