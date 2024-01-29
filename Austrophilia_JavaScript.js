window.addEventListener('scroll', function(){
    let header= this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navegation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    nevegation.classList.toggle("active");
})

const btns = document.querySelector(".nav-btn");
const slides = document.querySelector(".img-slide");
const contents = document.querySelector(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
 
    contents.forEach((content) => {
        content.classList.remove("active");
    });

}
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
    });



    function toggleContent() {
        var content = document.getElementById("myContent");
        content.classList.toggle("show");
     }