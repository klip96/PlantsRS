
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active").forEach((el) => acc.classList.remove("active"))
    
    
  });
}

document.querySelectorAll('.accordion').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      
      document.querySelectorAll('.panel').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.panel').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = 108 + "px";
      content.style.maxWidth = 180 + "px";
    }
  })
});


const burgerButt = document.querySelector('.menu_burger_header');
const burger = document.querySelector('.pop_burger');
const body = document.body;
const list1 = document.querySelector('.test1');
const list2 = document.querySelector('.test2');
const list3 = document.querySelector('.test3');
const list4 = document.querySelector('.test4');
const list5 = document.querySelector('.test5');
burgerButt.addEventListener('click', function(){
	burger.classList.toggle('open')
  burgerButt.classList.toggle('open')
  body.classList.toggle("noscroll");
});
list1.addEventListener('click', function(){
	burger.classList.toggle('open')
  burgerButt.classList.toggle('open')
  body.classList.toggle("noscroll");
});
list2.addEventListener('click', function(){
	burger.classList.toggle('open')
  burgerButt.classList.toggle('open')
  body.classList.toggle("noscroll");
});
list3.addEventListener('click', function(){
	burger.classList.toggle('open')
  burgerButt.classList.toggle('open')
  body.classList.toggle("noscroll");
});
list4.addEventListener('click', function(){
	burger.classList.toggle('open')
  burgerButt.classList.toggle('open')
  body.classList.toggle("noscroll");
});
list5.addEventListener('click', function(){
	burger.classList.toggle('open')
  burgerButt.classList.toggle('open')
  body.classList.toggle("noscroll");
});
burger.addEventListener('click', function(){
	burger.classList.remove('open')
  burgerButt.classList.remove('open')
  body.classList.remove("noscroll");
});


