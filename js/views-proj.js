var Vehicle = Backbone.Model.extend({
  validate: function() {
    if(!attrs.registrationNumber)
      return "Registration Number is Required!";
  },

  start: function() {
    console.log("Vehicle has started!");
  },

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

  events: {
    "click #removeVehicle": "onVehicleRemoved"
  },

  onVehicleRemoved: function() {
    console.log("Vehicle Removed");
    // this.model.remove();
  },
  
  render: function() {
    this.$el.html(this.model.get("registrationNumber") + '<a href="#" class="button round">Remove Vehicle</a>');
    this.$el.attr("id", this.model.id);
    return this;
  }
});

var VehiclesView = Backbone.View.extend({
  tagName: "ul",
  initialize: function() {
    this.model.on("add", this.onVehicleAdded, this);
    this.model.on("remove", this.onVehicleRemoved, this);
  },

  onVehicleAdded: function() {
    console.log("Vehicle Added!");
    var vehicleView = new VehicleView({ model: vehicle });

    this.$el.append(vehicleView.render().el);
  },

  onVehicleRemoved: function() {
    console.log("Vehicle Removed");
    // this.model.remove();
  },
  // events: {
  //   "click #removeVehicle": "onVehicleRemoved"
  // },
  render: function() {
    var self = this;

    this.model.each(function(vehicle) {
      var vehicleView = new VehicleView({ model: vehicle });
      self.$el.append(vehicleView.render().$el);
    });
    var template = _.template($("#vehiclesTemplate").html());
    var html = template(this.model.toJSON());
    this.$el.html(html);
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



var vehiclesView = new VehiclesView({ el: "#vehiclesTemplate", model: vehicles});
vehiclesView.render();






