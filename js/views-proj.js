var Vehicle = Backbone.Model.extend({
  defaults: {
    idAttribute: "registrationNumber"
  }
});

var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});

var VehicleView = Backbone.View.extend({
  // initialize: function() {
  //   this.model.on("remove", this.onVehicleRemoved, this);
  // },
  tagName: 'li',

  className: 'vehicle',

  attributes: {
    "data-color": "red"
  },

  render: function() {
    this.$el.html(this.model.get("registrationNumber"));
    this.$el.attr("id", this.model.id);
    return this;
  }
});

var VehiclesView = Backbone.View.extend({
  tagName: "ul",
  initialize: function() {
    this.model.on("remove", this.onVehicleRemoved, this);
  },
  onVehicleRemoved: function() {
    console.log("Vehicle Removed");
  },

  events: {
    "click #removeVehicle": "onVehicleRemoved"
  },
  render: function() {
    var self = this;
    this.model.each(function(vehicle) {
      var vehicleView = new VehicleView({ model: vehicle });
      self.$el.append(vehicleView.render().$el);
    });
    var template = _.template($("#vehicleTemplate").html());
    var html = template(this.model.toJSON());
    // this.$el.html(template(this.model.toJSON()));
    return this;
  }

});

var vehicles = new Vehicles([
  new Vehicle({ id: 1, registrationNumber: "XLT123" }),
  new Vehicle({ id: 2, registrationNumber: "ZIA845" }),
  new Vehicle({ id: 3, registrationNumber: "PQB67R" })
]);

// Remove this comment
//  Another comment

// Need to add code to get list of vehicles to show on .render() call



var vehiclesView = new VehicleView({ el: "#vehicles", model: vehicles});
vehiclesView.render();