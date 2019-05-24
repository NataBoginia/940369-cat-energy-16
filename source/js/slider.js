var slider = document.querySelector(".slider__range");
var sliderContainerTablet = document.querySelector(".example__slider");



if (window.matchMedia("(min-width: 768px)").matches) {
  slider.value=50;
};

window.onresize = function(event) {
  if (window.matchMedia("(min-width: 768px)").matches) {
    slider.value=50;
  };

  if (window.matchMedia("(max-width: 767px)").matches) {
    slider.value=0;
  };
}
