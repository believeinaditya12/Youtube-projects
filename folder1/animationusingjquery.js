// Do something once the document is ready
// $ = jQuery
$(function () {
  // alert the version of the jquery it will show the window of alert
  //   alert("Hello Delhi Public School");
  //   alert("Loaded jquery version: "+ $.fn.jquery)
  $("h1,p").hide();
  //  it will show the text of h1 and p with the animation
  $("h1,p").fadeIn(1500);
});
