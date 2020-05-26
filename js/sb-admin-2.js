
(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });
  $("#_loginButton").on('click',function(e){
    let userId = $("#exampleInputEmail").val()
    let password =$("#exampleInputPassword").val()
    console.log(userId,password);
    
    if(userId==='admin' && password === '123')
    {
      console.log("ok");
      
      window.location.replace("index.html")
    }
    else if(userId==='user' && password ==='123')
    {
      window.location.replace("indexCommonUser.html")
    }
  }
  )

  //Add fake data CSKH 
  for(var i = 0;i<20;i++)
  {
    let r = 1+ Math.floor(Math.random() * 3); 
    let item
    if(r===1)
    {
      item = `<div class=" col col-md-3"><div class="itemCallerOff "><i class="fas fa-headphones"></i> <label> ${100+i} - Off</label>  <i class="fas fa-microphone-slash"></i></div></div>`
    }
    else if(r === 2)
    {
      item = `<div class=" col col-md-3"><div class="itemCallerOff itemCallerIdle"><i class="fas fa-headphones"></i> <label> ${100+i} - Idle </label> <i class="fas fa-microphone-slash"></i></div></div>`
    }
    else if(r === 3)
    {
      item = `<div class=" col col-md-3"><div class="itemCaller itemCallerTalk"><i class="fas fa-headphones"></i> <label> ${100+i} - Talk </label> <i class="fas fa-microphone"></i><label class="itemNumberPhone">20202020</label></div></div>`
    }
    $("#listCSKH1").append(item)
  }
  for(var i = 0;i<20;i++)
  {
    let r = 1+ Math.floor(Math.random() * 3); 
    let item
    if(r===1)
    {
      item = `<div class=" col col-md-3"><div class="itemCallerOff "><i class="fas fa-headphones"></i> <label> ${100+i} - Off</label>  <i class="fas fa-microphone-slash"></i></div></div>`
    }
    else if(r === 2)
    {
      item = `<div class=" col col-md-3"><div class="itemCallerOff itemCallerIdle"><i class="fas fa-headphones"></i> <label> ${100+i} - Idle </label> <i class="fas fa-microphone-slash"></i></div></div>`
    }
    else if(r === 3)
    {
      item = `<div class=" col col-md-3"><div class="itemCaller itemCallerTalk"><i class="fas fa-headphones"></i> <label> ${100+i} - Talk </label> <i class="fas fa-microphone"></i><label class="itemNumberPhone">20202020</label></div></div>`
    }
    $("#listCSKH2").append(item)
  }

  

})(jQuery); // End of use strict
