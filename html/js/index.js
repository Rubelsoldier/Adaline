 /*JS way for setting height: 100vh to slides' height*/
const $slides = $(".owl-carousel .owl-slide");
// const $slides = $(".owl-carousel .owl-slide");
$slides.css("height", $(window).height());
  $(window).resize(() => {
  // $slides.css("height", $(window).height());
  });


// $(document).ready(function(){

$("#section-slider").on("initialized.owl.carousel", function () {
  // alert('its in initialized part');
  setTimeout(function () {
    $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    $("section").show();
  }, 200);
});

var $owlCarousel = $("#section-slider").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  // autoplay:true,
  autoplayTimeout:6000 ,
  navText: [
  '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
  '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */] });


$owlCarousel.on("changed.owl.carousel", function (e) {  
  $(".owl-slide-animated").removeClass("is-transitioned");

  var $currentOwlItem = $(".owl-item").eq(e.item.index);
  $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

  var $target = $currentOwlItem.find(".owl-slide-text");  
  doDotsCalculations($target);
});

$owlCarousel.on("resize.owl.carousel", function () {
  setTimeout(function () {
    setOwlDotsPosition();
  }, 50);
});

/*if there isn't content underneath the carousel*/
//$owlCarousel.trigger("refresh.owl.carousel");

setOwlDotsPosition();

function setOwlDotsPosition() {
  var $target = $(".owl-item.active .owl-slide-text");  
  doDotsCalculations($target);
}

function doDotsCalculations(el) {
  var height = el.height();var _el$position =
  el.position(),top = _el$position.top,left = _el$position.left;
  var res = height + top + 20;  
  $(".owl-carousel .owl-dots").css({
    top: res + "px",
    left: left + "px" });

  console.log('height is '+height+' '+'top is '+top);

}

// });