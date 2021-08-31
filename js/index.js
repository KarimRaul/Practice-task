const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnabled: false,
});


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.

  var myMap = new ymaps.Map('map', {
    zoom: 13,
    center: [48.87, 2.35],
    controls: []
  });


  var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Subtract.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
  });


  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 12
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },

    mail: {
      required: true,
      email: true
    },
  },

  messages: {
    name: 'Как вас зовут?',
    tel: 'Укажите ваш телефон',
    mail: 'Укажите ваш e-mail'
  },
})