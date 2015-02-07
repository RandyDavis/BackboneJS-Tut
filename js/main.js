var Song = Backbone.Model.extend({
  validate: function(attr){
    if(!attr.title)
      return "Title is required";
  }
});

var song = new Song();
// Checking the console at this point with the following returns:
  // song.isValid(); // false
  // song.validationError; // "Title is required"

song.set('title', 'Lets Get It On');
// Checking console now returns:
  // song.isValid(); // true

  