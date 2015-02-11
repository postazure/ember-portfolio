window.App = Ember.Application.create();
$(document).ready(function () {
  $('.ui.video').video();
  $("#menu-bar").on("click", '.video-load', function () {
    setTimeout(function(){
      $('.ui.video').video();
    }, 10);
  })
})
