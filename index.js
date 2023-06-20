

const slider = document.querySelectorAll(".carousel");
const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");


let currentSlide = 0; //slide of image starts from 0;

let maxSlide = slider.length-1; //for max slides 

 slider.forEach(                     
    (image, index)=>(image.style.transform = `translateX(${(index - currentSlide) * 100}%)`));

function nextButtonCLickHandler(){

if(currentSlide === maxSlide){
    currentSlide = 0;// went back to 0;
}
else{
    currentSlide++;
}
slider.forEach(                     
    (image, index)=>(image.style.transform = `translateX(${(index - currentSlide) * 100}%)`));
    console>log(currentSlide);}
 //--2

function prevButtonClickHandler(){ 
if(currentSlide ===0){
    currentSlide = maxSlide;
}
else{
    currentSlide--;
}

slider.forEach(                     
    (image, index)=>(image.style.transform = `translateX(${(index-currentSlide) * 100}%)`));
console.log(currentSlide);
}//--4



nextButton.addEventListener("click",nextButtonCLickHandler); //for next --1
prevButton.addEventListener("click",prevButtonClickHandler);// for prev ---3








