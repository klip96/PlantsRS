
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





const gardenButt = document.getElementById('garden_but');
const gardenButt2 = document.getElementById('lawn_but');
const gardenButt3 = document.getElementById('planting_but');
const garden1 = document.getElementById('service_1');
const garden2 = document.getElementById('service_2');
const garden3 = document.getElementById('service_3');
const garden4 = document.getElementById('service_4');
const garden5 = document.getElementById('service_5');
const garden6 = document.getElementById('service_6');

gardenButt.addEventListener('click', function(){
	gardenButt.classList.toggle('garden_active')
  gardenButt3.classList.remove('garden_active')
  gardenButt2.classList.remove('garden_active')
  garden2.style.filter = "blur(3px)";
  garden3.style.filter = "blur(3px)";
  garden4.style.filter = "blur(3px)";
  garden6.style.filter = "blur(3px)";
  garden1.style.filter = "";
  garden5.style.filter = "";

});
gardenButt2.addEventListener('click', function(){
	gardenButt2.classList.toggle('garden_active')
  gardenButt.classList.remove('garden_active')
  gardenButt3.classList.remove('garden_active')
  garden1.style.filter = "blur(3px)";
  garden2.style.filter = "blur(3px)";
  garden3.style.filter = "";
  garden4.style.filter = "blur(3px)";
  garden5.style.filter = "blur(3px)";
  garden6.style.filter = "blur(3px)";
});
gardenButt3.addEventListener('click', function(){
	gardenButt3.classList.toggle('garden_active')
  gardenButt2.classList.remove('garden_active')
  gardenButt.classList.remove('garden_active')
  garden1.style.filter = "blur(3px)";
  garden2.style.filter = "";
  garden3.style.filter = "blur(3px)";
  garden4.style.filter = "";
  garden5.style.filter = "blur(3px)";
  garden6.style.filter = "";  
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

const sityTest1 = document.getElementById('citySelect1');
const sityTest2 = document.getElementById('citySelect2');
const sityTest3 = document.getElementById('citySelect3');
const sityTest4 = document.getElementById('citySelect4');
const sityMenu1 = document.getElementById('city1');
const sityMenu2 = document.getElementById('city2');
const sityMenu3 = document.getElementById('city3');
const sityMenu4 = document.getElementById('city4');
sityTest1.addEventListener('click', function(){
	sityMenu1.style.display = "";
  sityMenu2.style.display = "flex";
  sityMenu3.style.display = "";
  sityMenu4.style.display = "";
});
sityTest2.addEventListener('click', function(){
	sityMenu1.style.display = "";
  sityMenu2.style.display = "";
  sityMenu3.style.display = "";
  sityMenu4.style.display = "flex";
});
sityTest3.addEventListener('click', function(){
	sityMenu1.style.display = "flex";
  sityMenu2.style.display = "";
  sityMenu3.style.display = "";
  sityMenu4.style.display = "";
});
sityTest4.addEventListener('click', function(){
	sityMenu1.style.display = "";
  sityMenu2.style.display = "";
  sityMenu3.style.display = "flex";
  sityMenu4.style.display = "";
});



let select = function() {
  let selectHeader = document.querySelectorAll('.select_header');
  let selectItem = document.querySelectorAll('.select_item')

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  })

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
    sityMenu1.style.display = "";
    sityMenu2.style.display = "";
    sityMenu3.style.display = "";
    sityMenu4.style.display = "";
  }

  function selectChoose() {
    let text = this.innerText,
    select = this.closest('.select'),
    currentText = select.querySelector('.select_current');
        currentText.innerText = text;
    select.classList.remove('is-active');
    
}
};

select();


