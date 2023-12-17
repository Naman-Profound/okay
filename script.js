particlesJS("particles-js", {"particles":{"number":{"value":351,"density":{"enable":true,"value_area":1341.5509907748635}},"color":{"value":"#aa9191"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0,"random":true,"anim":{"enable":true,"speed":24.36231636904035,"size_min":0,"sync":true}},"line_linked":{"enable":true,"distance":192.40944730386272,"color":"#ffffff","opacity":0.4489553770423464,"width":0},"move":{"enable":true,"speed":11.22388442605866,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":962.0472365193136}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;


  const header = document.querySelector("header");
  const hamburgerBtn = document.querySelector("#hamburger-btn");
  const closeMenuBtn = document.querySelector("#close-menu-btn");

  // Toggle mobile menu on hamburger button click
  hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

  // Close mobile menu on close button click
  closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());



  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
          
      loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
        });
      });
          
