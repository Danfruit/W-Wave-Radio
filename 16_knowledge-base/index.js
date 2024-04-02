// Custom Select

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  searchPlaceholderValue: "Материал",
});

document.querySelector('.choices__item--selectable').textContent = 'Материал';

// yandex map

var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [48.872212625456676,2.354246369210265], // Москва
        zoom: 16,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([48.872212625456676,2.354246369210265],{}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map/map-tag.svg',
      iconImageSize: [48, 48],
    })
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove();
}

// inputMask

var selector = document.querySelector("#form-validate__tel");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

// validation

const validation = new JustValidate('#form-validate', {
  errorLabelStyle: {
    color: '#ff5c00',
  }
});

validation
  .addField('#form-validate__name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#form-validate__email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели E-mail'
    },
    {
      rule: 'email',
      errorMessage: 'Неверный формат E-mail',
    }
  ])

  .addField('#form-validate__tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон'
    },
    {
      validator: () => {
        const phone = selector.inputmask.unmaskedvalue();
        console.log(phone);
        return Number(phone) && phone.length === 10;
      },
      errorMessage: 'Неверный формат телефона',
    }
  ])

  // tooltip

  tippy('.custom-tooltip__icon', {
    placement: 'top',
  })



