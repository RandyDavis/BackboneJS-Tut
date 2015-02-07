var Song = Backbone.Model.extend({
  urlRoot: "/api/songs"
});



// Fetching a model:
var song = new Song({id: 1});

song.fetch();

// GET /api/songs/1



// Updating a model:
var song = new Song({id: 1});
song.fetch();
// ...
song.set('title', 'newTitle');
song.save();

// PUT /api/songs/1



// Inserting a new instance of model
var song = new Song();
song.set('title', 'Title');
song.save();

// POST /api/songs



// Deleting a model:
var song = new Song({id: 1});
song.destroy();

// DELETE /api/songs/1



// idAttribute
var Song = Backbone.Model.extend({
  idAttribute: 'songId'
});

var song = new Song({songId: 1});


// Callbacks
var song = new Song();
song.fetch({
  success: function(){ console.log('success');},
  error: function() { console.log("something broke");}
});

song.destroy({
  success: function(){},
  error: function(){}
});

// 1st arg is a hash of the attrs you want to set and save
// leaving it blank will not execute callback from server
song.save({}, {
  success: function(){},
  error: function(){}
});















