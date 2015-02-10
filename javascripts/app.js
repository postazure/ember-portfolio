window.App = Ember.Application.create();
$(document).ready(function () {
    $("#menu-bar").on("click", 'a', function () {
      $("a.item.active").removeClass("active")
      var selection = $(this)
      setTimeout(function(){
        $('.ui.video').video();
        selection.addClass("active")
      }, 10);
    })
})
