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

slider.addEventListener("change", function (evt) {
  if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1299px)").matches) {
    sliderContainerTablet.style.backgroundImage = "linear-gradient(#ffffff 169px, transparent 169px), linear-gradient(to right, #f2f2f2 " + slider.value + "%, #ebebeb " + slider.value + "%)";
  };
});
