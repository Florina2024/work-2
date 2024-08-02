const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView: 1
        },
        620:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }

    }
  
  });

  /*--show menu--*/
document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
  
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }
  
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }
  });
  
  /*--remove menu mobile--*/
  const navLink = document.querySelectorAll(".nav__link");
  
  const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));