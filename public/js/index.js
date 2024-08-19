// preloader 
setTimeout(function(){
  $('.preloader').addClass('d-none');
  $('.main-content').removeClass('d-none');
}, 2500);

// navbar
var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector('.navbar')
var navLinks = document.querySelectorAll('.nav-link')

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navbar.classList.toggle("shadow-lg")
});

// close nav-links on click
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    $('.navbar-collapse').removeClass('show')
  })
})

$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);
    if (scrollTop >= 50) {
      $('.navbar').addClass('shadow-lg');
      $('.navbar').addClass('navbar-scrolled');
      $('.navbar').removeClass('navbar-unscrolled');


    } else if (scrollTop < 50) {
      $('.navbar').addClass('navbar-unscrolled');
      $('.navbar').removeClass('shadow-lg');
      $('.navbar').removeClass('navbar-scrolled');
    }

  });

});

// resume section info toggle
var kmApbBtn = document.querySelector(".km-apb-btn");
var kmApbInfo = document.querySelector('.km-apb-info')
kmApbBtn.addEventListener("click", function () {
  kmApbBtn.classList.toggle("btn-transform");
  kmApbInfo.classList.toggle("d-none")
});

var kmMptBtn = document.querySelector(".km-mpt-btn");
var kmMptInfo = document.querySelector('.km-mpt-info')
kmMptBtn.addEventListener("click", function () {
  kmMptBtn.classList.toggle("btn-transform");
  kmMptInfo.classList.toggle("d-none")
});

var kmAmtBtn = document.querySelector(".km-amt-btn");
var kmAmtInfo = document.querySelector('.km-amt-info')
kmAmtBtn.addEventListener("click", function () {
  kmAmtBtn.classList.toggle("btn-transform");
  kmAmtInfo.classList.toggle("d-none")
});


const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('user-name'),
    contactEmail = document.getElementById('user-email'),
    contactMessage = document.getElementById('user-message'),
    contactmessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    // Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === ''){
      // Add and remove color
      contactmessage.classList.remove('color-blue')
      contactmessage.classList.add('color-red')

      // Show Message
      contactForm.textContent = 'Write all the input fields'
    }else{
      console.log(contactName.value);
      console.log(contactEmail.value);
      console.log(contactMessage.value);
      // serviceID - templateID = #form - publicKey
      emailjs.sendForm('service_715vaxr','template_8rwy9ba','#contact-form','q27O3cgDcpzr9d3Lm')
        .then(() =>{
          // Show message and add color
          contactmessage.classList.add('color-blue')
          contactmessage.textContent = 'Message sent'

          // Remove message after five seconds
          setTimeout(() =>{
            contactmessage.textContent = '';
          }, 5000)
        }, (error) =>{
          alert('OOPS! SOMETHING HAS FAILED...', error)
        })

        //To clear input field
        contactName.value = ''
        contactEmail.value = ''
        contactMessage.value = '' 
    }
}
contactForm.addEventListener('submit', sendEmail)

// TiltJS
$('.js-tilt').tilt({
  glare: true,
  maxGlare: 0.5,
});


