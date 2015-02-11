App.Router.map(function () {
  // this.route("about")
  this.route("projects");
  this.route("games");
  this.route("game", {path:"game/:game_id"});
});

App.GamesRoute = Ember.Route.extend({
  model: function () {
    return [
      {
        id:1,
        name:"Boredom Simulator",
        subtitle:"JavaScript Game",
        summary:"It's Saturday night, you are waiting for your friends to come pick you up. Maintain your boredom levels or you might just fall asleep and miss your friends picking you up.",
        tags: [
          "Vanilla JS",
          "jQuery"
        ]
      },
      {
        id:2,
        name:"Down With The Drones",
        subtitle:"JavaScript Game",
        summary:"Get your swarm of mind controlled followers into their respective holes. Each wrong step will cost you and all the while the clock is counting down.",
        tags: [
          "Impact JS"
        ]
      }
    ]
  }
});
