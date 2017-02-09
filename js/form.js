'use strict';
var allPin = document.querySelector('.tokyo__pin-map');
var dialog = document.querySelector('.dialog');
var dialogСlose = document.querySelector('.dialog__close');

allPin.onclick = function (event) {
  var target = event.target;
  if (target.tagName === 'DIV') {
    highlight(target);
    return;
  }
  target = target.parentNode;
};

function highlight(node) {

  var activePin = allPin.querySelector('.pin--active');
  if (activePin) { // Если до этого у другого элемента существовал класс pin--active, то у этого элемента класс нужно убрать
    activePin.classList.remove('pin--active');
  }
  if (node.classList.contains('pin--active')) {
    node.classList.remove('pin--active');
    dialog.style.display = 'none';
  } else {
    node.classList.add('pin--active');
    dialog.style.display = 'block';
  }
}

dialogСlose.addEventListener('click', function () { // закрытие карточки
  dialog.style.display = 'none';
  var active = allPin.querySelector('.pin--active');
  active.classList.remove('pin--active');
});

var Price = document.getElementById('price');
Price.addEventListener('change', function () { // Значение поля «Тип жилья» синхронизировано с минимальной ценой
  if (Price.value >= 10000) {
    document.getElementById('type').options[2].selected = true;
    return;
  }
  if (Price.value > 1000 && Price.value < 10000) {
    document.getElementById('type').options[0].selected = true;
    return;
  }
  if (Price.value <= 1000) {
    document.getElementById('type').options[1].selected = true;
  }
});

var Capacity = document.getElementById('capacity');
var RoomNumber = document.getElementById('room_number');

RoomNumber.addEventListener('change', function () { // Количество комнат связано с количеством гостей
  if (RoomNumber.options[0].selected === true) {
    Capacity.options[1].selected = true;
  } else {
    Capacity.options[0].selected = true;
  }
});

var Time = document.getElementById('time');
var Timeout = document.getElementById('timeout');
Time.addEventListener('change', function () { // Поля «время заезда» и «время выезда»
  var n = document.getElementById('time').options.selectedIndex;
  Timeout.options[n].selected = true;
});

Timeout.addEventListener('change', function () {
  var k = document.getElementById('timeout').options.selectedIndex;
  Time.options[k].selected = true;
});
