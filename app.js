let menu =document.querySelector('#menu-bar');
let navbar =document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); 
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("mins");
  const secondsEl = document.getElementById("seconds");
  
  const newYears = "22 Feb 2024";
  
  function countdown() {
      const newYearsDate = new Date(newYears);
      const currentDate = new Date();
  
      const totalSeconds = (newYearsDate - currentDate) / 1000;
  
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const mins = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;
  
      daysEl.innerHTML = days;
      hoursEl.innerHTML = formatTime(hours);
      minsEl.innerHTML = formatTime(mins);
      secondsEl.innerHTML = formatTime(seconds);
  }
  
  function formatTime(time) {
      return time < 10 ? `0${time}` : time;
  }
  
  // initial call
  countdown();
  
  setInterval(countdown, 1000);




  let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "flex";  
}
