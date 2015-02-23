// Lecture 23 - Creating Views 

// var SongView = Backbone.View.extend({
//   tagName: "span",
//   className: "song",
//   id: "1234",
//   attributes: {
//     "data-genre": "Jazz"
//   },
//   render: function() {
//     this.$el.html("Hello World!");

//     return this;
//   }
// });

// var songView = new SongView();
// // songView.render();

// $("#container").html(songView.render().$el);



// Lecture 24 - Passing Model Data to Views
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
});

var SongView = Backbone.View.extend({
  tagName: "li",
  render: function() {
    this.$el.html(this.model.get("title"));

    return this;
  }
});

var SongsView = Backbone.View.extend({
  render: function() {
    var self = this;
    this.model.each(function(song) {
      var songView = new SongView({ model: song });
      self.$el.append(songView.render().$el);
    });
  }
});

var song = new Song({ title: "Blue in Green" });

var songs = new Songs([
  new Song({ title: "Blue in Green" }),
  new Song({ title: "Home" }),
  new Song({ title: "Read My Mind" })
]);

// Render the Song View
var songView = new SongView({ el: "#container", model: song });
songView.render();

// Render the Collection List View
var songsView = new SongsView({ el: "#songs", model: songs });
songsView.render();