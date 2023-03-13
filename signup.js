
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  phonenumber = id("phonenumber"),
  form = id("form"),
  password = id("password");

let errorMsg = classes("error");


let checkBlank = (id, serial, message) => {
  if(id.value.trim() ==="") {
    errorMsg[serial].innerHTML = message;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("listen");
  checkBlank(username, 0, "User name can not be blank!");
  checkBlank(email, 1, "Email can not be blank!");
  checkBlank(phonenumber, 2, "Phone number can not be blank!");
  checkBlank(password, 3, " Password can not be blank!");
});

let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "";


let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})


