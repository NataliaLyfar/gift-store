(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-mobile-open]"),
    
    openAbout: document.querySelector(".js-about"),
    openService: document.querySelector(".js-service"),
    openBlogs: document.querySelector(".js-blogs"),
    closeMenuBtn: document.querySelector("[data-mobile-close]"),
    menu: document.querySelector(".menu"),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
  refs.openAbout.addEventListener('click', toggleMenu);
  refs.openService.addEventListener('click', toggleMenu);
  refs.openBlogs.addEventListener('click', toggleMenu);
  

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
  
})();