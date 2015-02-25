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
// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
//   model: Song
// });

// var SongView = Backbone.View.extend({
//   tagName: "li",
//   render: function() {
//     this.$el.html(this.model.get("title"));

//     return this;
//   }
// });

// var SongsView = Backbone.View.extend({
//   render: function() {
//     var self = this;
//     this.model.each(function(song) {
//       var songView = new SongView({ model: song });
//       self.$el.append(songView.render().$el);
//     });
//   }
// });

// var song = new Song({ title: "Blue in Green" });

// var songs = new Songs([
//   new Song({ title: "Blue in Green" }),
//   new Song({ title: "Home" }),
//   new Song({ title: "Read My Mind" })
// ]);

// // Render the Song View
// var songView = new SongView({ el: "#container", model: song });
// songView.render();

// // Render the Collection List View
// var songsView = new SongsView({ el: "#songs", model: songs });
// songsView.render();




// Lecture 25 - Handling DOM Events
// var Song = Backbone.Model.extend();

// var SongView = Backbone.View.extend({
//   events: {
//     "click": "onClick",
//     "click .bookmark": "onClickBookmark"
//   },

//   onClick: function() {
//     console.log("Listen clicked!");
//   },

//   onClickBookmark: function(e) {
//     e.stopPropagation();
//     console.log("Bookmark clicked!");
//   },

//   render: function() {
//     this.$el.html(this.model.get("title") + " <button>Listen</button> <button class='bookmark'>Bookmark</button>");
//     return this;
//   }
// });

// var song = new Song({ title: "Blue in Green" });
// var songView = new SongView({ el: "#container", model: song });
// songView.render();




// Lecture 26 - Handling Model Events
// var Song = Backbone.Model.extend({
//   defaults: {
//     listeners: 0
//   }
// });

// var SongView = Backbone.View.extend({
//   initialize: function() {
//     this.model.on("change", this.render, this);
//   },
//   // Can also use a custom callback function instead of render on the model change
//   // initialize: function() {
//   //   this.model.on("change", this.onModelChange, this);
//   // },
//   // onModelChange: function() {
//   //   this.$el.addClass("someClass");
//   // },

//   render: function() {
//     this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));
//     return this;
//   }
// });

// var song = new Song({ title: "Blue in Green" });
// var songView = new SongView({ el: "#container", model: song });
// songView.render();




// Lecture 27 - Handling Collection Events
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
});

var SongView = Backbone.View.extend({

  tagName: 'li',

  render: function() {
    this.$el.html(this.model.get("title"));
    this.$el.attr("id", this.model.id);
    return this;
  }
});

var SongsView = Backbone.View.extend({
  tagname: 'ul',

  initialize: function() {
    this.model.on("add", this.onSongAdded, this);
    this.model.on("remove", this.onSongRemoved, this);
  },

  onSongAdded: function(song) {
    // console.log("Song Added");
    var songView = new SongView({ model: song });

    this.$el.append(songView.render().$el);
  },

  onSongRemoved: function(song) {
    // console.log("Song Removed");
    // this.$el.find("li#" + song.id).remove();  // Can be written shorter below

    // A shortcut of writing the above line
    this.$("li#" + song.id).remove();
  },

  render: function() {
    var self = this;

    this.model.each(function(song) {
      var songView = new SongView({ model: song });
      self.$el.append(songView.render().$el);
    });
  }
});


var songs = new Songs([
  new Song({ id: 1, title: "Blue in Green" }),
  new Song({ id: 2, title: "Turn it Up" }),
  new Song({ id: 3, title: "Go Get It" })
]);


var songsView = new SongsView({ el: "#songs", model: songs });
songsView.render();

// In the console enter to see changes: songs.remove(songs.at(0));
























