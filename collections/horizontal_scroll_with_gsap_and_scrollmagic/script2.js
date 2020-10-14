$(function () { // wait for document ready
  
  var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  // animate panels
  .to("#js-slideContainer", 1,   {x: "-100%"})	
  .to("#js-slideContainer", 1,   {x: "-200%"})
  .to("#js-slideContainer", 1,   {x: "-300%"})
  .to("#js-slideContainer", 1,   {x: "-400%"})
  .to("#js-slideContainer", 1,   {x: "-500%"})


  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "500%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  
  
  
});