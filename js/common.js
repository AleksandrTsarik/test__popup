'use strict';

const 
  textarea = document.querySelector('textarea'),
  selectLabel = document.querySelector('.custom-select-label'),
  selectDrop = document.querySelector('.custom-select-drop'),
  selectValue = document.querySelector('.custom-select-value');
  

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});

//range 
let rangeSlider = document.getElementById("rs-range-line");
let rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  let bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578) + "px";
}


document.querySelector('input[type=range]').addEventListener('input', function() {
  this.setAttribute('value', this.value);
});

let dropSelect = () => {
  selectDrop.classList.add('open');  
  selectValue.classList.add('active'); // класс для стрелки
}

selectLabel.addEventListener('click', (e) => {
  const elem = e.target;
  if(selectValue.textContent == '' || !elem.classList.contains('top')) {
    elem.classList.add('top');
  }
  dropSelect();
});

selectValue.addEventListener('click', () => {  
  dropSelect();
});

document.addEventListener('click', (e) => {  
  const elem = e.target
  if(elem.classList.contains('custom-select-drop__option')) {
    let val = elem.textContent;   
    selectValue.textContent = val;  
    // тут надо добавить value в input type hidden    
  }
});

document.addEventListener('click', (e) => {
  const elem = e.target;
  if(!elem.classList.contains('custom-select-label') && !elem.classList.contains('custom-select-drop') && !elem.classList.contains('custom-select-value')) {
    if(selectValue.textContent == '') {
      selectLabel.classList.remove('top');
      console.log(1)
    }
    selectDrop.classList.remove('open');
    selectValue.classList.remove('active'); // класс для стрелки
  }
});

//   const overlay = document.querySelector('.overlay'),   
// modal = document.querySelector('.modal');

// document.addEventListener('click', (event) => {
//   const element = event.target;
//   if(element.classList.contains('btn')) {
//       modal.classList.add('open');
//       overlay.classList.add('open');
//   }else if(element.classList.contains('cross')) {
//       modal.classList.remove('open');
//       overlay.classList.remove('open');
//   }else{
//       if(!element.closest('.modal')) {
//           modal.classList.remove('open');
//           overlay.classList.remove('open');
//       }
//   }
// });

const popup = document.querySelector('.form');
const popup2 = document.querySelector('.form2');


document.addEventListener('click', (event) => {
  const element = event.target;

  if(element.classList.contains('btn')) {

    popup2.classList.add('open');

    popup.classList.add('close');

  }else if(element.classList.contains('cross')){

    popup2.classList.remove('open');

    popup.classList.remove('open');

    popup.classList.add('close');

  }
});



// inputMask
let inputs = document.querySelectorAll('.js-input-tel');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

