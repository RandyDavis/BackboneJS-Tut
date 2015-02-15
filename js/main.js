var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
  render: function() {
    /* How we have been getting data into our render function */
    // this.$el.html(this.model.get("title"));

    /* How we will get data when using a template*/
    var template = _.template($("#songTemplate").html());
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

var song = new Song({ title: "Blue in Green", plays: 1100 });

var songView = new SongView({ el: "#container", model: song });

songView.render();