!function(){var t={navToggle:document.querySelector(".nav-toggle"),nav:document.querySelector(".fullscreen-nav"),content:document.querySelector("#wrapper"),title:document.querySelector("#title"),doToggle:function(e){e.preventDefault(),this.navToggle.classList.toggle("expanded"),this.nav.classList.toggle("expanded"),this.content.classList.toggle("expanded"),this.title.classList.toggle("expanded")}};t.navToggle.addEventListener("click",function(e){t.doToggle(e)})}();