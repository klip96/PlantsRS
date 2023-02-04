
let acc = document.querySelectorAll('.accordion');
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    for (let index = 0; index < acc.length; index++) {
      const el = acc[index];
      if (this !== el) {
        el.classList.remove('active');
        el.nextElementSibling.style.maxHeight = null;
      }
    }
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = 108 + "px";
    } 
  });
}


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


