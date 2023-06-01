const textFix = document.querySelector(".text-fix");
const projectsText = document.querySelectorAll(".projects__text");
const mediaQuery = window.matchMedia("(max-width: 931px)");

if (mediaQuery.matches) {
  textFix.innerHTML =
    "В своём стремлении улучшить опыт мы&nbsp;упускаем, что явные и&nbsp;активно&nbsp;развивающиеся страны третьего мира, инициированные исключительно синтетически, подвергнуты целой серии независимых исследований. А также предприниматели в сети интернет неоднозначны и будут объективно рассмотрены соответствующими инстанциями.";
}

if (
  window.matchMedia("(min-width: 370px)").matches &&
  window.matchMedia("(max-width: 428px)").matches
) {
    projectsText[0].classList.add('line-clamp-4');
    projectsText[1].classList.add('line-clamp-3');
    projectsText[2].classList.add('line-clamp-3');
    projectsText[3].classList.add('line-clamp-4');
    projectsText[4].classList.add('line-clamp-4');
} else if (
  window.matchMedia("(min-width: 429px)").matches &&
  window.matchMedia("(max-width: 475px)").matches
) {
    projectsText[0].classList.add('line-clamp-5');
    projectsText[1].classList.add('line-clamp-4');
    projectsText[2].classList.add('line-clamp-4');
    projectsText[3].classList.add('line-clamp-5');
    projectsText[4].classList.add('line-clamp-5');
} else if (
  window.matchMedia("(min-width: 476px)").matches &&
  window.matchMedia("(max-width: 504px)").matches
) {
    projectsText[0].classList.add('line-clamp-5');
    projectsText[1].classList.add('line-clamp-4');
    projectsText[2].classList.add('line-clamp-4');
    projectsText[3].classList.add('line-clamp-6');
    projectsText[4].classList.add('line-clamp-6');
} else if (
  window.matchMedia("(min-width: 505px)").matches &&
  window.matchMedia("(max-width: 529px)").matches
) {
    projectsText[0].classList.add('line-clamp-6');
    projectsText[1].classList.add('line-clamp-5');
    projectsText[2].classList.add('line-clamp-5');
    projectsText[3].classList.add('line-clamp-6');
    projectsText[4].classList.add('line-clamp-6');
} else if (
  window.matchMedia("(min-width: 530px)").matches &&
  window.matchMedia("(max-width: 564px)").matches
) {
    projectsText[0].classList.add('line-clamp-7');
    projectsText[1].classList.add('line-clamp-5');
    projectsText[2].classList.add('line-clamp-5');
    projectsText[3].classList.add('line-clamp-7');
    projectsText[4].classList.add('line-clamp-7');
} else if (
  window.matchMedia("(min-width: 565px)").matches &&
  window.matchMedia("(max-width: 576px)").matches
) {
    projectsText[0].classList.add('line-clamp-7');
    projectsText[1].classList.add('line-clamp-6');
    projectsText[2].classList.add('line-clamp-6');
    projectsText[3].classList.add('line-clamp-7');
    projectsText[4].classList.add('line-clamp-7');
}

