"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var form = document.querySelector('.hero__form');
var input = document.querySelector('.hero__form-email');
input.addEventListener('focus', function () {
  form.classList.add('hero__form_active');
});
input.addEventListener('blur', function () {
  form.classList.remove('hero__form_active');
});
var monthly = document.querySelector('.monthly');
var quarterly = document.querySelector('.quarterly');
var checkBox = document.querySelector('.checkbox__input');
checkBox.addEventListener('change', function () {
  if (checkBox.checked == true) {
    monthly.classList.remove('monthly_checked');
    quarterly.classList.add('quarterly_checked');
  } else {
    quarterly.classList.remove('quarterly_checked');
    monthly.classList.add('monthly_checked');
  }
});

var Slider =
/*#__PURE__*/
function () {
  function Slider(rangeElement, valueElement, options) {
    _classCallCheck(this, Slider);

    this.rangeElement = rangeElement;
    this.valueElement = valueElement;
    this.options = options; // Attach a listener to "change" event

    this.rangeElement.addEventListener('input', this.updateSlider.bind(this));
  } // Initialize the slider


  _createClass(Slider, [{
    key: "init",
    value: function init() {
      this.rangeElement.setAttribute('min', options.min);
      this.rangeElement.setAttribute('max', options.max);
      this.rangeElement.value = options.cur;
      this.updateSlider();
    } // Format the money

  }, {
    key: "asMoney",
    value: function asMoney(value) {
      return '$' + parseFloat(value).toLocaleString('en-US', {
        maximumFractionDigits: 2
      });
    }
  }, {
    key: "generateBackground",
    value: function generateBackground(rangeElement) {
      if (this.rangeElement.value === this.options.min) {
        return;
      }

      var percentage = (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100;
      return 'background: linear-gradient(to right, #85FED6, #4EDAAC ' + percentage + '%, #dbf1ea ' + percentage + '%, #dee1e2 100%)';
    }
  }, {
    key: "updateSlider",
    value: function updateSlider(newValue) {
      this.valueElement.innerHTML = this.asMoney(this.rangeElement.value);
      this.rangeElement.style = this.generateBackground(this.rangeElement.value);
    }
  }]);

  return Slider;
}();

var rangeElement = document.querySelector('.range [type="range"]');
var valueElement = document.querySelector('.range .range__value span');
var options = {
  min: 0,
  max: 260,
  cur: 130
};

if (rangeElement) {
  var slider = new Slider(rangeElement, valueElement, options);
  slider.init();
}

var rangeSlider = document.querySelector('.range [type="range"]');
var rangeBullet = document.querySelector(".range__value");
var rangeValue = document.querySelector('range__value span');
rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = '$' + rangeSlider.value;
  var bulletPosition = (rangeSlider.value - 130) / (rangeSlider.max / 2);
  rangeBullet.style.left = bulletPosition * 574 + "px";
}