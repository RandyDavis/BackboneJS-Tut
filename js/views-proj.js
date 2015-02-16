var Vehicle = Backbone.Model.extend({
  defaults: {
    idAttribute: "registrationNumber"
  }
});

var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});

var VehicleView = Backbone.View.extend({
  tagName: 'li',
  className: 'vehicle',
  attributes: {
    "data-color": "red"
  },
  render: function() {
    this.$el.html();
    return this;
  }

});

var vehicles = new Vehicles([
  new Vehicle({ registrationNumber: "XLT123" }),
  new Vehicle({ registrationNumber: "ZIA845" }),
  new Vehicle({ registrationNumber: "PQB67R" })
]);

var vehiclesView = new VehicleView();
vehiclesView.render();