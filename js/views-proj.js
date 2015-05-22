//var Vehicle = Backbone.Model.extend({
//  validate: function() {
//    if(!attrs.registrationNumber)
//      return "Registration Number is Required!";
//  },
//
//  start: function() {
//    console.log("Vehicle has started!");
//  },
//
//  defaults: {
//    idAttribute: "registrationNumber"
//  }
//});
//
//var Vehicles = Backbone.Collection.extend({
//  model: Vehicle
//});
//
//var VehicleView = Backbone.View.extend({
//  // initialize: function() {
//  //   this.model.on("remove", this.onVehicleRemoved, this);
//  // },
//  tagName: 'li',
//
//  className: 'vehicle',
//
//  attributes: {
//    "data-color": "red"
//  },
//
//  events: {
//    "click #removeVehicle": "onVehicleRemoved"
//  },
//
//  onVehicleRemoved: function() {
//    console.log("Vehicle Removed");
//    this.$("li#" + vehicles.id).remove();
//  },
//
//  // onVehicleRemoved: function() {
//  //   console.log("Vehicle Removed");
//  //   // this.model.remove();
//  // },
//  
//  render: function() {
//    this.$el.html(this.model.get("registrationNumber") + '<a href="#" class="button round removeVehicle">Remove Vehicle</a>');
//    this.$el.attr("id", this.model.id);
//    return this;
//  }
//});
//
//var VehiclesView = Backbone.View.extend({
//  tagName: "ul",
//  initialize: function() {
//    this.model.on("add", this.onVehicleAdded, this);
//    this.model.on("remove", this.onVehicleRemoved, this);
//  },
//
//  onVehicleAdded: function() {
//    console.log("Vehicle Added!");
//    var vehicleView = new VehicleView({ model: vehicle });
//
//    this.$el.append(vehicleView.render().el);
//  },
//
//  onVehicleRemoved: function() {
//    console.log("Vehicle Removed");
//    this.$("li#" + vehicle.id).remove();
//  },
//  // events: {
//  //   "click #removeVehicle": "onVehicleRemoved"
//  // },
//  render: function() {
//    var self = this;
//
//    this.model.each(function(vehicle) {
//      var vehicleView = new VehicleView({ model: vehicle });
//      self.$el.append(vehicleView.render().$el);
//    });
//    // var template = _.template($("#vehiclesTemplate").html());
//    // var html = template(this.model.toJSON());
//    // this.$el.html(html);
//    // this.$el.html(template(this.model.toJSON()));
//    // return this;
//  }
//
//});
//
//var vehicles = new Vehicles([
//  new Vehicle({ id: 1, registrationNumber: "XLT123" }),
//  new Vehicle({ id: 2, registrationNumber: "ZIA845" }),
//  new Vehicle({ id: 3, registrationNumber: "PQB67R" })
//]);
//
//// Remove this comment
////  Another comment
//
//// Need to add code to get list of vehicles to show on .render() call
//
//
//
//var vehiclesView = new VehiclesView({ el: "#vehicles", model: vehicles});
//vehiclesView.render();


// Vehicle Proj Redo
var Vehicle = Backbone.Model.extend({
  defaults: {
    idAttribute: "registrationNumber",
  },
  
  validate: function() {
    if (!attrs.registrationNumber) {
      return "Registration Number is required!"
    }
  },
  
  start: function() {
    console.log("Vehicle has started...");
  }
});

var Vehicles = Backbone.Collection.extend({
   model: Vehicle
});

var VehicleView = Backbone.View.extend({
  // initialize: function() {}
  tagName: "li",
  
  className: "vehicle",
  
  attributes: {
    "data-color": "red"
  },
  
  events: {
    "click button": "onClickDelete"
  },
  
  onClickDelete: function() {
    this.remove(vehicle);
  },
  
  render: function() {
    this.$el.html(this.model.get("registrationNumber") + " <button>Delete</button>");
  
    return this;
  }
});

var VehiclesView = Backbone.View.extend({
  tagName: "ul",
  
  initialize: function() {
    this.model.on("add", this.onVehicleAdded, this);
    this.model.on("remove", this.onVehicleRemoved, this);
  },
  
  onVehicleAdded: function(vehicle) {
    // console.log("Vehicle Added");
    var vehicleView = new VehicleView({ model: vehicle });
    
    this.$el.append(vehicleView.render().$el);
  },
  
  onVehicleRemoved: function(vehicle) {
    // console.log("Vehicle Removed");
    this.$("li#" + vehicle.id).remove();
  },
  
  render: function() {
    var self = this;
    this.model.each(function(vehicle) {
      var vehicleView = new VehicleView({ model: vehicle });
      self.$el.append(vehicleView.render().$el);
    });
  }
});

var vehicle = new Vehicle({ registrationNumber: "DR4-XKY", "data-color": "green" });

var vehicles = new Vehicles([
  new Vehicle({ id: 1, registrationNumber: "XXX-XX4",  "data-color": "yellow" }),
  new Vehicle({ id: 2, registrationNumber: "YH5-YX4",  "data-color": "blue" }),
  new Vehicle({ id: 3, registrationNumber: "H73-XJ1",  "data-color": "red" }),
  new Vehicle({ id: 4, registrationNumber: "TY0-XD4",  "data-color": "black" })
]);

//var vehicleView = new VehicleView({ el: "#container", model: vehicle });
//vehicleView.render();

var vehiclesView = new VehiclesView({ el: "#container", model: vehicles });
vehiclesView.render();




