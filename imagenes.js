const btnLeft = document.querySelector('.btn-left'),
      btnRight = document.querySelector('.btn-right'),
      slider = document.querySelector('#slider'),
      sliderSection = document.querySelectorAll('.slider-section');

 btnLeft.addEventListener('click', e => moveToLeft())
 btnRight.addEventListener('click', e => moveToRight())
 setInterval(() => {
   moveToRight()
 },3000);
    let operacion = 0;
       counter = 0,

        widthimg = 100 / sliderSection.length;

 function moveToRight () {
  if(counter >= sliderSection.length-1){
    counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none"
    return;
  } 
    counter++;
    operacion = operacion + widthimg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
  }
    
 function moveToLeft(){
  counter--;
  if(counter < 0 ) {
    counter = sliderSection.length-1;
    operacion =widthimg * (sliderSection.length-1);
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none"
    return;
  } 
    operacion = operacion - widthimg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"     
}
function fusion(){
  
}
// SEGUNDO BLOQUE
const btnLeft1 = document.querySelector('.btn-left1'),
      btnRight1 = document.querySelector('.btn-right1'),
      slider1 = document.querySelector('#slider1'),
      sliderSection1= document.querySelectorAll('.slider-section1');

 btnLeft1.addEventListener('click', e => moveToLeft1())
 btnRight1.addEventListener('click', e => moveToRight1())
 setInterval(() => {
   moveToRight1()
 },3000);
    let operacion1 = 0;
       counter1 = 0,

        widthimg1 = 100 / sliderSection1.length;

 function moveToRight1 () {
  if(counter1 >= sliderSection1.length-1){
    counter1 = 0;
    operacion1 = 0;
    slider1.style.transform = `translate(-${operacion1}%)`;
    slider1.style.transition = "none"
    return;
  } 
    counter1++;
    operacion1 = operacion1 + widthimg1;
    slider1.style.transform = `translate(-${operacion1}%)`;
    slider1.style.transition = "all ease .6s"
  }
    
 function moveToLeft1(){
  counter1--;
  if(counter1 < 0 ) {
    counter1 = sliderSection1.length-1;
    operacion1 =widthimg * (sliderSection1.length-1);
    slider1.style.transform = `translate(-${operacion1}%)`;
    slider1.style.transition = "none"
    return;
  } 
    operacion1 = operacion1 -  widthimg1;
    slider1.style.transform = `translate(-${operacion1}%)`;
    slider1.style.transition = "all ease .6s"
      
}


