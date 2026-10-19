// Metrochem Pvt Ltd — static site scripts
(function () {
  "use strict";

  // Sticky header shadow
  var header = document.getElementById("siteHeader");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var toggle = document.getElementById("menuToggle");
  var nav = document.getElementById("navMobile");
  var iconMenu = toggle.querySelector(".icon-menu");
  var iconClose = toggle.querySelector(".icon-close");

  function setMenu(open) {
    nav.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    iconMenu.style.display = open ? "none" : "";
    iconClose.style.display = open ? "" : "none";
  }
  toggle.addEventListener("click", function () {
    setMenu(nav.hidden);
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Scroll-reveal animations
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  // Demo contact form
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.hidden = false;
  });

  // Footer year
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
