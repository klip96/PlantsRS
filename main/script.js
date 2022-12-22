
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
    }
  })
})


