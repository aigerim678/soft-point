const form = document.querySelector('.hero__form');
const input = document.querySelector('.hero__form-email');

input.addEventListener('focus', function() {
    form.classList.add('hero__form_active');
});

input.addEventListener('blur', function() {
    form.classList.remove('hero__form_active');
});

const monthly = document.querySelector('.monthly');
const quarterly = document.querySelector('.quarterly');
const checkBox = document.querySelector('.checkbox__input');

checkBox.addEventListener('change', function(){
    if (checkBox.checked == true){
        monthly.classList.remove('monthly_checked');
        quarterly.classList.add('quarterly_checked');
    } else {
        quarterly.classList.remove('quarterly_checked');
        monthly.classList.add('monthly_checked');
    }
})

class Slider {
    constructor (rangeElement, valueElement, options) {
      this.rangeElement = rangeElement
      this.valueElement = valueElement
      this.options = options
  
      // Attach a listener to "change" event
      this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
    }
  
    // Initialize the slider
    init() {
      this.rangeElement.setAttribute('min', options.min)
      this.rangeElement.setAttribute('max', options.max)
      this.rangeElement.value = options.cur
  
      this.updateSlider()
    }
  
    // Format the money
    asMoney(value) {
      return '$' + parseFloat(value)
        .toLocaleString('en-US', { maximumFractionDigits: 2 })
    }
  
    generateBackground(rangeElement) {   
      if (this.rangeElement.value === this.options.min) {
        return
      }
  
      let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
      return 'background: linear-gradient(to right, #85FED6, #4EDAAC ' + percentage + '%, #dbf1ea ' + percentage + '%, #dee1e2 100%)'
    }
  
    updateSlider (newValue) {
      this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
      this.rangeElement.style = this.generateBackground(this.rangeElement.value)
    }
  }
  
  let rangeElement = document.querySelector('.range [type="range"]')
  let valueElement = document.querySelector('.range .range__value span') 
  
  let options = {
    min: 0,
    max: 260,
    cur: 130
  }
  
  if (rangeElement) {
    let slider = new Slider(rangeElement, valueElement, options)
  
    slider.init()
  }

var rangeSlider = document.querySelector('.range [type="range"]');
var rangeBullet = document.querySelector(".range__value");
var rangeValue = document.querySelector('range__value span')
rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = '$' + rangeSlider.value;
  var bulletPosition = ((rangeSlider.value-130) /(rangeSlider.max/2));
  rangeBullet.style.left = (bulletPosition * 574) + "px";
}
  

