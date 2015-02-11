window.App = Ember.Application.create();
$(document).ready(function () {
  $('.ui.video').video();
  $("#menu-bar").on("click", '.video-load', function () {
    setTimeout(function(){
      $('.ui.video').video();
    }, 10);
  });
});

App.ApplicationController = Ember.Controller.extend({
  name: "Max Gordon",
  position: "Junior Web Developer",
  tagline: "Ruby on Rails & JavaScript"
});

App.IndexController = Ember.Controller.extend({
  content_header: "What Makes Me Tick",
  content_title1: "Web Apps",
  content_subtitle1: "Ruby on Rails, JavaScript",
  content_title2: "Internet of Things",
  content_subtitle2: "Arduino, Raspberry Pi",
  gal_title: "Galvanize | gSchool",
  gal_subtitle: "Full Stack Developer",
  gal_desciption: "Full stack curriculum including Ruby on Rails, Sinatra, Javascript, CSS3, HTML5, Responsive Design, Database, APIs, Version Control, and Test Driven Development. Learned how to write maintainable code through test driven development and industry best practices. Deployed and managed a series of cloud-based web applications using Heroku, Divshot and other industry services. Regularly utilized pair programming, version control and agile development."
});
