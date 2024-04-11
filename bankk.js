'use strict';

///////////////////////////////////////
// Modal window
const header=document.querySelector(".header");
const message=document.createElement("div");
const btnScrollTo=document.querySelector('.btn--scroll-to')
const section1=document.querySelector('#section--1')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener("click",openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


message.classList.add("cookie-message");
message.innerHTML=`Basudev <button class="btn btn--close-cookie">Got it</button>`
header.append(message)//child
// header.before(message)//sibling 

//delete the message
document.querySelector(".btn--close-cookie").addEventListener('click',function(){
    message.parentElement.removeChild(message)
})


//Styles
message.style.backgroundColor="#37383d"
message.style.width="120%"
console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)
message.style.height=Number.parseFloat(getComputedStyle(message).height,10) + 30 + "px"
console.log(document.documentElement.style.setProperty('--color-primary','orangered'))

//attribute
const logo=document.querySelector('.nav__logo')
console.log(logo.src)
console.log(logo.getAttribute('src'))
console.log(logo.alt)
console.log(logo.className)
logo.alt="I am Bankist Logo!"

//non-standard
console.log(logo.designer)//will give undefined
console.log(logo.getAttribute('designer'))//will give answer
logo.setAttribute('company','Bankist')

//data set variable
console.log(logo.dataset.versionNumber);//dash converted into camelCase

//
logo.classList.add('c','w');
logo.classList.toggle('c','w');
logo.classList.remove('c');
logo.classList.contains('c');


//btn scroll
btnScrollTo.addEventListener('click',function(e){
  const s1coords=section1.getBoundingClientRect();
  console.log(s1coords)

  console.log("height/weight : ", document.documentElement.clientHeight , document.documentElement.clientWidth)

  //Scrolling
  // window.scrollTo(s1coords.left,s1coords.top)
  section1.scrollIntoView({behavior: 'smooth'})

})

const h1=document.querySelector('h1');
const alert1=function(e){
  alert('addEventListener:Great!')
}
h1.addEventListener('mouseenter',alert1)
setTimeout(()=> h1.removeEventListener('mouseenter',alert1),5000)


//bubbling
// const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);
// const randomColor=()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// console.log(randomColor())

// document.querySelector('.nav__link').addEventListener('click',function(){
//   console.log("LINK")
//   // this.style.backgroundColor=randomColor();
// })

// document.querySelector('.nav__links').addEventListener('click',function(){
//   console.log("LINK")
//   // this.style.backgroundColor=randomColor();
// })

// document.querySelector('.nav').addEventListener('click',function(){
//   console.log("LINK")
//   // this.style.backgroundColor=randomColor();
// })

//Page navigation through each child
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click',function(e){
    e.preventDefault();
    const id=this.getAttribute('href');
    console.log(id)
    document.querySelector(id).scrollIntoView({behavior:"smooth"})

  })
})

//Page navigation through one parent
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  console.log(e.target);

  //matching strategy
  if(e.target.classList.contains('nav__link')){
    const id=e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:"smooth"})
  }
})

//DOM transversing