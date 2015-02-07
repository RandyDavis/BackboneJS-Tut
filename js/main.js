var Song = Backbone.Model.extend({
  defaults: {
    genre: "Jazz"
  }
});

// Different ways in which you can set attributes
// On initialization of instance of Model
var song = new Song({
  title: 'Blue in Green',
  artist: 'Miles Davis',
  publishYear: 1959
});

// One attribute at a time
// song.set("title", "Blue in Green");

// Multiple attributes at a time as a JSON object
// song.set({
//   artist: "Miles Davis",
//   publishYear: 1959
// });

song.set("title", "Bluey Blues in the Greeny Greens"); // Sets or Changes song title
var title = song.get('title'); // retrieves song title
var hasTitle = song.has('title');  // returns true or false if the song has a 'title' attribute
song.unset('title'); // removes title attribute
song.clear(); // removes all attributes from the instance of the model 