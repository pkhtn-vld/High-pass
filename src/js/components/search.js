const searchBtn = document.querySelector(".header__btn");
const form = document.querySelector(".header__form");
const input = document.querySelector(".header__form-input");
const nav = document.querySelector(".nav");
const closeBtn = document.querySelector(".header__form-btn-close");
const logo = document.querySelector(".header__logo-link");
const mediaQueryHighTablet = window.matchMedia("(min-width: 931px)");
const mediaQueryMobile = window.matchMedia("(max-width: 425px)");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.add("active");
  input.classList.add("active");
  searchBtn.classList.add("active");
  closeBtn.classList.add("active");
  logo.classList.add("fixed");
  if (mediaQueryHighTablet.matches) {
    nav.classList.add("hide");
    nav.classList.add("hidden");
  }
  if (mediaQueryMobile.matches) {
    logo.classList.add("hidden");
    logo.classList.add("hide");
    logo.parentElement.classList.add("active");
  }
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.remove("active");
  input.classList.remove("active");
  searchBtn.classList.remove("active");
  closeBtn.classList.remove("active");
  input.value = "";
  if (mediaQueryHighTablet.matches) {
    setTimeout(() => {
      nav.classList.remove("hide");
      logo.classList.remove("fixed");
      setTimeout(() => {
        nav.classList.remove("hidden");
      }, 150);
    }, 400);
  }
  if (mediaQueryMobile.matches) {
    setTimeout(() => {
      logo.parentElement.classList.remove("active");
      logo.classList.remove("hide");
      setTimeout(() => {
        logo.classList.remove("hidden");
      }, 150);
    }, 400);
  }
});

window.addEventListener("click", (event) => {
  if (!searchBtn.contains(event.target) && !input.contains(event.target)) {
    form.classList.remove("active");
    input.classList.remove("active");
    searchBtn.classList.remove("active");
    closeBtn.classList.remove("active");
    if (mediaQueryHighTablet.matches) {
      setTimeout(() => {
        nav.classList.remove("hide");
        logo.classList.remove("fixed");
        setTimeout(() => {
          nav.classList.remove("hidden");
        }, 150);
      }, 400);
    }
    if (mediaQueryMobile.matches) {
      setTimeout(() => {
        logo.parentElement.classList.remove("active");
        logo.classList.remove("hide");
        setTimeout(() => {
          logo.classList.remove("hidden");
        }, 150);
      }, 400);
    }
  }
});
