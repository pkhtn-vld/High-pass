// map

window.onload = function () {
  function init() {
    let  map = new ymaps.Map(
      "map",
      {
        center: [55.768206400644054, 37.63727372090191],
        zoom: 16,
        controls: [],
      },
      { suppressMapOpenBlock: true }
    );

    var myPlacemark = new ymaps.Placemark(
      [55.76953456898229, 37.63998549999998],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-icon.svg",
        iconImageSize: [12, 12],
        iconImageOffset: [0, 0],
      }
    );

    map.geoObjects.add(myPlacemark);
  }

  ymaps = window.ymaps;

  ymaps.ready(init);

  setTimeout(() => {
  document.querySelector('.ymaps-2-1-79-copyright').style.display = 'none';
}, 1000);
};

const mapBackGround = document.querySelector('.contacts__container-address');
const closeMap = document.querySelector('.contacts__address-btn');

closeMap.addEventListener('click', e => {
  e.preventDefault();
  mapBackGround.classList.add('hide-address')
})
