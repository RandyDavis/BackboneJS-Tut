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
  onVehicleRemoved: function() {
    console.log("Vehicle Removed");
  },
  tagName: 'li',
  className: 'vehicle',
  attributes: {
    "data-color": "red"
  },
  events: {
    "click #removeVehicle": "onVehicleRemoved"
  },
  render: function() {
    var html = $("#vehicleTemplate").html();
    var template = _.template(html);
    this.$el.html(template(this.model.toJSON()));
    return this;
  }

});

var vehicles = new Vehicles([
  new Vehicle({ id: 1, registrationNumber: "XLT123" }),
  new Vehicle({ id: 2, registrationNumber: "ZIA845" }),
  new Vehicle({ id: 3, registrationNumber: "PQB67R" })
]);

var vehiclesView = new VehicleView();
vehiclesView.render();