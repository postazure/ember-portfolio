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
  gal_desciption: "Full stack curriculum including Ruby on Rails, Sinatra,\
    Javascript, CSS3, HTML5, Responsive Design, Database, APIs, Version\
    Control, and Test Driven Development. Learned how to write maintainable\
    code through test driven development and industry best practices.\
    Deployed and managed a series of cloud-based web applications using\
    Heroku, Divshot and other industry services. Regularly utilized pair\
    programming, version control and agile development."
});

App.ProjectsController = Ember.Controller.extend({
  project1_name: "Order Now",
  project1_stack: "Ruby on Rails",
  project1_description: [
    "Find the restaurant and service that can make a delivery to you\
      in San Francisco, even at dinner time.",

    "When you make it home from a long day of work and just want to\
      decompress, the last thing you want to have to deal with is\
      making dinner. You should probably place a delivery order.\
      The only problem is your hungry now and all the restaurants you\
      normaly get delivery from are posting an hour and a half wait.",

    "Order Now to the rescue. Search for the kind of food you want\
      and this app will find the fastest way to get it to you."
  ],
  project1_tags: [
    "Multiple Search Providers",
    "Real Time Updates",
    "Custom Sorting Algorithm"
  ],

  project2_name: "Secret Santa Selector",
  project2_stack: "Ruby on Rails",
  project2_description: [
    "Make that secret santa drawing go by without a hitch.",

    "Each year our family draws names out of a hat, but you're\
      not allowed to draw yourself or your spouse. With three\
      couples, the odds are pretty good you'll have to draw again...\
      and again... and again. Enter Secret Santa Selector, a simple\
      web app to perform the drawing and email each member secretly\
      so that even the organizer can join in the suprise."
  ],
  project2_tags: [
    "User Authentication and Authorization",
    "SendGrid Api"
  ],

  project3_name: "Reddit Clone",
  project3_stack: "Ruby on Rails",
  project3_description: [
    "A simple recreation of forum board. Post content or comment on previous posts."
  ],
  project3_tags: [
    "User Authentication and Authorization",
    "Bootstrap"
  ],

  project4_name: "gCamp | Basecamp Clone",
  project4_stack: "Ruby on Rails",
  project4_description: [
    "A simplified version of a project management application.\
    Create an account, establish a project, add team members\
    and assign tasks."
  ],
  project4_tags: [
    "User Authentication and Authorization",
    "Bootstrap",
    "Database Association"
  ]

});

App.GamesController = Ember.ObjectController.extend({
  gameOne: function(){ return this.get('model').objectAt(0) }.property('games.[]'),
  gameTwo: function(){ return this.get('model').objectAt(1) }.property('games.[]')
});
