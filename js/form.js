'use strict';
var allPin = document.querySelector('.tokyo__pin-map');
var dialog = document.querySelector('.dialog');
var dialogСlose = document.querySelector('.dialog__close');
var capacity = document.querySelector('#capacity');
var roomNumber = document.querySelector('#room_number');
var price = document.querySelector('#price');
var time = document.querySelector('#time');
var timeout = document.querySelector('#timeout');
var inputType = document.querySelector('#type');

/**
 * anonymous function - Отлавливает нажатие на элемент target и вызывает
 * функцию highlight. Если target - родительский элемент, функция не
 * срабатывает, если img, то подсветит родителя, иначе подствеит
 * target - элемет.
 *
 * @param  {object} event - Принимает координаты события click.
 * @return {undefined} - Выход из функции.
 */
allPin.addEventListener('click', function (event) {

  var target = event.target;

  if (target === allPin) {

    return;
  } else {
    if (target.nodeName === 'IMG') {
      highlight(target.parentNode);
    } else {
      highlight(target);
    }
  }
});

/**
 * addClass - Добавляе класс переданному элементу.
 *
 * @param  {object} node - DOM - элемент
 * @param  {string} newClass - Класс, которые необходимо добавить
 */
function addClass(node, newClass) {
  node.classList.add(newClass);
}

/**
 * removeClass - Удаляет класс у переданного элемента.
 *
 * @param  {object} node - DOM - элемент
 * @param  {string} delClass - Класс, которые необходимо удалить
 */

function removeClass(node, delClass) {
  node.classList.remove(delClass);
}

/**
 * highlight - удаляет класс pin--active у всех элементов, добавлет класс
 * pin--active, переданному элементу. Открывает окно dialog.
 *
 * @param  {object} node - DOM - элемент
 */
function highlight(node) {

  var activePin = allPin.querySelector('.pin--active');

  if (activePin) {
    removeClass(activePin, 'pin--active');
  }
  addClass(node, 'pin--active');
  dialog.style.display = 'block';
}

/**
 * anonymous function - Удаляет класс pin--active у всех активных элементов.
 * Закрывает окно dialog.
 *
 * @param {object} activePin - Принимает все элементы с классом pin--active.
 */

dialogСlose.addEventListener('click', function () {

  var activePin = allPin.querySelector('.pin--active');

  removeClass(activePin, 'pin--active');
  dialog.style.display = 'none';
});


/**
 * anonymous function - реагирует на изменение поля с id Price и в зависимости
 * от значение выбирает определенное значение в поле с id type,
 *
 * @return {undefined} - выход из функции
 */
price.addEventListener('change', function () {
  if (price.value >= 10000) {
    inputType.options[2].selected = true;

    return;
  }
  if (price.value > 1000 && price.value < 10000) {
    inputType.options[0].selected = true;

    return;
  }
  if (price.value <= 1000) {
    inputType.options[1].selected = true;
  }
});

/**
 * anonymous function - реагирует на изменение поля с id room_number и в зависимости
 * от значение выбирает определенное значение в поле с id capacity.
 */
roomNumber.addEventListener('change', function () {
  if (roomNumber.options[0].selected === true) {
    capacity.options[1].selected = true;
  } else {
    capacity.options[0].selected = true;
  }
});

/**
 * timeChoose - выбирает в поле time2 значение в зависимости от значения time 1.
 *
 * @param  {object} time1 - поле выбора времени 1.
 * @param  {object} time2 - поле выбора времени 2.
 * @param  {object} event - принимает событие change и связанные элементы.
 */
function timeChoose(time1, time2, event) {
  var selectedIndex = time1.options.selectedIndex;
  time2.options[selectedIndex].selected = true;
}

/**
 * Вызывает функцию timeChoose при изменение поля с id time
 */
time.addEventListener('change', timeChoose.bind(null, time, timeout));

/**
 * Вызывает функцию timeChoose при изменение поля с id timeout
 */
timeout.addEventListener('change', timeChoose.bind(null, timeout, time));
