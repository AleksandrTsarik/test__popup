'use strict';

const textarea = document.querySelector('textarea');

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

let popup = document.querySelector('.form');
let popup2 = document.querySelector('.form2');


document.addEventListener('click', (event) => {

  const element = event.target;

if(element.classList.contains('btn')) {

  popup2.classList.add('open');
  popup.classList.add('close');

}else if(element.classList.contains('cross')){

  popup.classList.add('close');
  }

});



// inputMask
let inputs = document.querySelectorAll('.js-input-tel');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

