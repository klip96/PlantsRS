
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


let burgerButt = document.querySelector('.menu_burger_header');
let burgerList = document.querySelector('.header-list');
burgerButt.addEventListener('click', function(){
	burgerList.classList.toggle('active');
})


// document.querySelectorAll(function)
// $(document).ready(function() {
// 	$('.menu_burger_header').click(function(event){
//                 $('.menu_burger_header, .header_list').toggleClass('active');
// 				$('body').toggleClass('lock');
// 	});
// 	$('.header_item, header_item_test').click(function(event) {
//         $('.menu-burger_header, .header_list').removeClass('active');
//         $('body').removeClass('lock');
//   $('.katrine_button').click(function(event){
//               $('.our__friends__modal__block').toggleClass('active');
//         $('body').toggleClass('lock');
// 	});
// });


