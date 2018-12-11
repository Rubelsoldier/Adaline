jQuery(function($) {
  "use strict";

// jQuery to collapse the navbar on scroll

// $(function(){
//   $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//       $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//       $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
//   });
// });

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


    // $("#client-carousel").owlCarousel({

    //   slideSpeed : 400,
    //   pagination:true,
    //   items : 5,
    //   rewindNav: true,
    //   itemsDesktop : [1199,3],
    //   itemsDesktopSmall : [979,3],
    //   itemsTablet:[768,3],    //As above.
    //   itemsMobile:[320,1],
    //   stopOnHover:true,
    //   autoPlay:true

    // });

    /*==========================================
  8-Owl Slider
  =======================================*/    
      // Before call system 
        // $(".testimonial_quotes").owlCarousel({
        //   slideSpeed : 1000,
        //   paginationSpeed : 500,
        //   singleItem:true,
        //   navigation : false,
        //   autoplay : 3000,
        //   transitionStyle:"backSlide",
        //   afterAction:function(){$(window).trigger("resize");},
        // });

        var owl = $(".testimonial_quotes");

        owl.owlCarousel({
          animateOut: 'owl-backSlide-out',
          animateIn: 'owl-backSlide-in',
          items: 1,
          loop: true,
          margin: 10,
          // nav: true
        });
        
        owl.on('translate.owl.carousel', function(event) {
          $('.owl-item blockquote ').addClass('custom');
        });
        
        owl.on('translated.owl.carousel', function(event) {
          $('.owl-item blockquote').removeClass('custom');
        });
        

// Wow initialization
new WOW().init();

//Counter 
  

  $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "fade",
        direction: "vertical",
        controlNav: false,
         slideshowSpeed: 8000
      });
    });



//  ============= count  =============
       // $('.count').counterUp({
       //      delay: 100,
       //      time: 2000
       //  });


// >>>>>>>>>>>>>>>>>>>>>> Owl carousel <<<<<<<<<<<<<<<<<<<<< 
    
   /*JS way for setting height: 100vh to slides' height*/
/*const $slides = $(".owl-carousel .owl-slide");
                                                                     $slides.css("height", $(window).height());
                                                                     $(window).resize(() => {
                                                                       $slides.css("height", $(window).height());
                                                                     });*/

// $(".owl-carousel").on("initialized.owl.carousel", function () {
//   setTimeout(function () {
//     $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
//     $("section").show();
//   }, 200);
// });

// var $owlCarousel = $(".owl-carousel").owlCarousel({
//   items: 1,
//   loop: true,
//   nav: true,
//   navText: [
//   '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
//   '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */] });



// $owlCarousel.on("changed.owl.carousel", function (e) {
//   $(".owl-slide-animated").removeClass("is-transitioned");

//   var $currentOwlItem = $(".owl-item").eq(e.item.index);
//   $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

//   var $target = $currentOwlItem.find(".owl-slide-text");
//   doDotsCalculations($target);
// });

// $owlCarousel.on("resize.owl.carousel", function () {
//   setTimeout(function () {
//     setOwlDotsPosition();
//   }, 50);
// });

// /*if there isn't content underneath the carousel*/
// //$owlCarousel.trigger("refresh.owl.carousel");

// setOwlDotsPosition();

// function setOwlDotsPosition() {
//   var $target = $(".owl-item.active .owl-slide-text");
//   doDotsCalculations($target);
// }

// function doDotsCalculations(el) {
//   var height = el.height();
//   var _el$position = el.position() , top = _el$position.top,
//   left = _el$position.left;
//   var res = height + top + 20;

//   $(".owl-carousel .owl-dots").css({
//     top: res + "px",
//     left: left + "px" });

// }



  });