// JavaScript
window.sr = ScrollReveal()

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });
$(function () {
  $('.about-title').animate({right: '0px'}, 1000, 'easeInOutSine')
  $('.border-line').delay(200).animate({right: '0px'}, 1000, 'easeInOutSine')
  $('.about-title').delay(2000).animate({opacity: '0'}, 1600, 'easeInOutSine')
  $('.border-line').delay(2000).animate({opacity: '0'}, 1600, 'easeInOutSine')
  $('.animation-container').animate({display: 'none'}, 100)
})

// ShowNav
function showNav () {
  console.log('this is working')
  var x = document.getElementById('fullscreen-nav')
  if (x.className === 'fullscreen-nav') {
    x.className += ' unfold'
  } else {
    x.className = 'fullscreen-nav'
  }
}

// Hover in nav
// Hover for about in nav

$("#nav-item-1").hover(function() {
  $("#about-nav-summary")('about-nav-summary').style.opacity = '1';
}

document.getElementById('nav-item-1').onmouseover = function () {
  document.getElementById('about-nav-summary').style.opacity = '1'
}
document.getElementById('nav-item-1').onmouseout = function () {
  document.getElementById('about-nav-summary').style.opacity = '0'
}
// Hover for village in nav
document.getElementById('nav-item-2').onmouseover = function () {
  document.getElementById('village-nav-summary').style.opacity = '1'
}
document.getElementById('nav-item-2').onmouseout = function () {
  document.getElementById('village-nav-summary').style.opacity = '0'
}
// Hover for summerfest in nav
document.getElementById('nav-item-3').onmouseover = function () {
  document.getElementById('summerFest-nav-summary').style.opacity = '1'
}
document.getElementById('nav-item-3').onmouseout = function () {
  document.getElementById('summerFest-nav-summary').style.opacity = '0'
}
// Hover for about me in nav
document.getElementById('nav-item-4').onmouseover = function () {
  document.getElementById('poolside-nav-summary').style.opacity = '1'
}
document.getElementById('nav-item-4').onmouseout = function () {
  document.getElementById('poolside-nav-summary').style.opacity = '0'
}
// create a function when you click the nav-link,
// 1. prevent default
// 2. menu close
// 3. soft transition to the new page


// $(document).ready(function() {

//   function headHover() {
//       if($(document).width() > 991) {
//           $(".header-main-tabs").hover(function() {
//               $(this).children(".header-drop-menu").fadeIn("fast");
//           }, function() {
//               $(this).children(".header-drop-menu").fadeOut("fast");
//           });
//       } else {
//           $(".header-main-tabs").unbind('hover');
//       }
//   }

//   headHover();

//   $(document).resize(function() {
//       headHover();
//   });

// });