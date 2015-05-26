// Lecture 17 - Creating Collections
// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
//   model: Song
// });

// var songs = new Songs([
//   new Song({ title: "Song 1" }),
//   new Song({ title: "Song 2" }),
//   new Song({ title: "Song 3" })
// ]);

// songs.add(new Song({ title: "Song 4" }));

// var firstSong = songs.at(0);
// var songsWithIdC1 = songs.get("c1");

// songs.remove(firstSong);


// Lecture 18 - Working with Collections
//var Song = Backbone.Model.extend();
//
//var Songs = Backbone.Collection.extend({
//  model: Song
//});
//
//var songs = new Songs();
//
//songs.add(new Song({ title: 'Song 1', genre: 'Jazz', downloads: 110 }), { at: 0 });
//
//songs.push(new Song({ title: "Song 2", genre: 'Jazz', downloads: 90 }));
//
//var jazzSongs = songs.where({ genre: "Jazz" });
//
//var firstJazzSong = songs.findWhere({ genre: "Jazz" });
//
//console.log("Jazz Songs", jazzSongs);
//
//console.log("First Jazz Song", firstJazzSong);
//
//var filteredSongs = songs.where({ genre: 'Jazz', title: "Song 2" });
//
//console.log("Second Song", filteredSongs);
//
//var topDownloads = songs.filter(function(song) {
//  return song.get("downloads") > 100;
//});
//
//console.log("Top Downloads", topDownloads);
//
//songs.each(function(song) {
//  console.log(song);
//});

// Lecture 19 - Connecting to the Server
//var Songs = Backbone.Collection.extend({
//  model: Song
//  url: "/api/songs"
//});
//
//var songs = new Songs();
//songs.fetch();
// // Backbone uses jQuery to make http requests, as a result you can pass additional args to the api using the data hash
// songs.fetch({
//   data: {
//     page: 2
//   },
//   success: function(){},
//   error: function(){}
// });
// 
//  GET /api/songs?page=2




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

// Lecture 23 redo - Creating Views
//var SongView = Backbone.View.extend({
//  tagName: "span",
//  className: "song",
//  id: "1234",
//  attributes: {
//    "data-genre": "Jazz"
//  },
//  render: function() {
//    this.$el.html("Hello World!");
//    
//    return this;
//  }
//});
//
//var songView = new SongView();
//
//$("#container").html(songView.render().$el);



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



// Lecture 24 Redo - Passing Data to Views
//var Song = Backbone.Model.extend();
//
//var Songs = Backbone.Collection.extend({
//  model: Song
//});
//
//var SongView = Backbone.View.extend({
//  tagName: "li",
//  
//  render: function() {
//    this.$el.html(this.model.get("title"));
//    return this;
//  }
//});
//
//var SongsView = Backbone.View.extend({
//  render: function() {
//    var self = this;
//    this.model.each(function(song) {
//      var songView = new SongView({ model: song });
//      self.$el.append(songView.render().$el);
//    });
//  }
//});
//
////var song = new Song({ title: "Blue in Green" });
//
//var songs = new Songs([
//  new Song({ title: "Blue in Green" }),
//  new Song({ title: "So What" }),
//  new Song({ title: "All Blues" })
//]);
//
////var songView = new SongView({ el: "#container", model: song });
////songView.render();
//
//var songsView = new SongsView({ el: "#songs", model: songs });
//songsView.render();




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



// Lecture 25 redo - Handling DOM Events
//var Song = Backbone.Model.extend();
//
//var SongView = Backbone.View.extend({
//  events: {
//    "click": "onClick",
//    "click .bookmark": "onClickBookmark"
//  },
//  
//  onClick: function() {
//    console.log("Listen Clicked!");
//  },
//  
//  onClickBookmark: function(e) {
//    e.stopPropagation();
//    console.log("Bookmark Clicked!");
//  },
//  
//  render: function() {
//    this.$el.html(this.model.get("title") + " <button>Listen</button> <button class='bookmark'>Bookmark</button>");
//    
//    return this;
//  }
//});
//
//var song = new Song({ title: "Blue in Green" });
//var songView = new SongView({ el: "#container", model: song });
//songView.render();




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




// Lecture 26 redo - Handling Model Events
//var Song = Backbone.Model.extend({
//  defaults: {
//    listeners: 0
//  }
//});
//
//var SongView = Backbone.View.extend({
//  initialize: function() {
//    this.model.on("change", this.render, this);
//    // Or you could call your own function like below on the specific model change instead
//    // this.model.on("change", this.onModelChange, this);
//  },
//  
//  onModelChange: function () {
//    this.$el.addClass("someClass");
//  },
//  
//  render: function() {
//    this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));
//    
//    return this;
//  }
//});
//
//var song = new Song({ title: "Blue in Green" });
//var songView = new SongView({ el: "#container", model: song });
//songView.render();


// Lecture 28 - Handling Collection Events
// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
//   model: Song
// });

// var SongView = Backbone.View.extend({

//   tagName: 'li',

//   render: function() {
//     this.$el.html(this.model.get("title"));
//     this.$el.attr("id", this.model.id);
//     return this;
//   }
// });

// var SongsView = Backbone.View.extend({
//   tagname: 'ul',

//   initialize: function() {
//     this.model.on("add", this.onSongAdded, this);
//     this.model.on("remove", this.onSongRemoved, this);
//   },

//   onSongAdded: function(song) {
//     // console.log("Song Added");
//     var songView = new SongView({ model: song });

//     this.$el.append(songView.render().$el);
//   },

//   onSongRemoved: function(song) {
//     // console.log("Song Removed");
//     // this.$el.find("li#" + song.id).remove();  // Can be written shorter below

//     // A shortcut of writing the above line
//     this.$("li#" + song.id).remove();
//   },

//   render: function() {
//     var self = this;

//     this.model.each(function(song) {
//       var songView = new SongView({ model: song });
//       self.$el.append(songView.render().$el);
//     });
//   }
// });


// var songs = new Songs([
//   new Song({ id: 1, title: "Blue in Green" }),
//   new Song({ id: 2, title: "Turn it Up" }),
//   new Song({ id: 3, title: "Go Get It" })
// ]);


// var songsView = new SongsView({ el: "#songs", model: songs });
// songsView.render();

// // In the console enter to see changes: songs.remove(songs.at(0));



//  Lecture 28 redo - Handling Collection Events
//var Song = Backbone.Model.extend({
//  var 
//});
//
//var Songs = Backbone.Collection.extend({
//  model: Song
//});
//
//var SongView = Backbone.View.extend({
//  tagName: "li",
//  
//  render: function() {
//    this.$el.html(this.model.get("title"));
//    this.$el.attr("id", this.model.id);
//    
//    return this;
//  }
//});
//
//var SongsView = Backbone.View.extend({
//  tagName: "ul",
//  
//  initialize: function() {
//    this.model.on("add", this.onSongAdded, this);
//    this.model.on("remove", this.onSongRemoved, this);
//  },
//  
//  onSongAdded: function(song) {
//    // console.log("Song Added");
//    var songView = new SongView({ model: song });
//    
//    this.$el.append(songView.render().$el);
//  },
//  
//  onSongRemoved: function(song) {
//    // console.log("Song Removed");
//    this.$el.find("li#" + song.id).remove();
//    
//    // a shorter way to write the above line of remove code
//    this.$("li#" + song.id).remove();
//  },
//  
//  render: function() {
//    var self = this;
//    this.model.each(function(song) {
//      var songView = new SongView({ model: song });
//      self.$el.append(songView.render().$el);
//    });
//  }
//});
//
////var song = new Song({ title: "Blue in Green" });
//
//var songs = new Songs([
//  new Song({ id: 1, title: "Blue in Green" }),
//  new Song({ id: 2, title: "So What" }),
//  new Song({ id: 3, title: "All Blues" })
//]);
//
////var songView = new SongView({ el: "#container", model: song });
////songView.render();
//
//var songsView = new SongsView({ el: "#songs", model: songs });
//songsView.render();





// Lecture 29: Templating
// var Song = Backbone.Model.extend();

// var SongView = Backbone.View.extend({
//   render: function() {
//     var template = _.template($("#songTemplate").html());
//     var html = template(this.model.toJSON());
//     this.$el.html(html);
//     // this.$el.html(this.model.get("title") + " <button>Listen</button>");
//     return this;
//   }
// });

// var song = new Song({ title: "Blue in Green", plays: 10000 });

// var songView = new SongView({ el: "#container", model: song });
// songView.render();



// Lecture 29 redo - Templating
// var Song = Backbone.Model.extend();

// var SongView = Backbone.View.extend({
//   render: function() {
//     var template = _.template($("#songTemplate").html());
//     var html = template(this.model.toJSON());
//     this.$el.html(html);
    
//     return this;
//   }
// });

// var song = new Song({ title: "Blue in Green", plays: 1100 });

// var songView = new SongView({ el: "#container", model: song });
// songView.render();



// Lecture 33 - Binding and Triggering Custom Events
var person = {
  name: "Mosh",
  
  walk: function() {
    this.trigger("walking", {  // use .trigger() method to publish events
      speed: 1,
      startTime: "08:00"
    });
  }
};

_.extend(person, Backbone.Events);

//person.on("walking", function(e) {  // use .on() method to subscribe to events
//  console.log("Person is walking");
//  console.log("Events Args", e);
//});

person.once("walking", function(e) {
  console.log("Person is walking");
  console.log("Events Args", e);
});


//person.off("walking");  // how to unsubscribe from an event...provide the name of the event you'd like to unsubscribe from
person.walk();
person.walk();



























