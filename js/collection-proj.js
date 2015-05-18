//// Create Model
//var Vehicle = Backbone.Model.extend({
//  idAttribute: "registrationNumber",
//  validate: function(registrationNumber) {
//    if(!registrationNumber) {
//      return "A registration number is required!";
//    }
//  },
//  urlRoot: "/api/vehicles",
//  defaults: {
//    start: function() {
//      console.log("Vehicle started...");
//    }
//  }
//});
//
//var Car = Vehicle.extend({
//  start: function() {
//    console.log("Car with registration number " + this.get('registrationNumber') + " has started.");
//  }
//});
//
//
//// Create Collection
//var Vehicles = Backbone.Collection.extend({
//  model: Vehicle
//});
//
//var vehicles = new Vehicles ([
//  new Vehicle({ registrationNumber: "XLI887", color: "Blue" }),
//  new Vehicle({ registrationNumber: "ZNP123", color: "Blue" }),
//  new Vehicle({ registrationNumber: "XUV456", color: "Gray" })
//]);
//
//
//var blueCars = vehicles.where({ color: "Blue"});
//
//var firstCar = vehicles.findWhere({ registrationNumber: "XLI887"});
//console.log(firstCar);
//
//// Remove firstCar from the collection
//vehicles.remove(vehicles.at(0));
//
//// Convert collection to a JSON object and log it in the console
//console.log(vehicles.toJSON());
//
//// Iterate the collection and log each car in the console
//vehicles.each(function(vehicle) {
//  console.log(vehicle);
//});


// Create Model
var Vehicle = Backbone.Model.extend({
	idAttribute: "registrationNumber",
	validate: function(registrationNumber) {
		if(!registrationNumber) {
			return "A registration number is required!";
		}
	},
	urlRoot: "/api/vehicles",
	defaults: {
		start: function() {
			console.log("Vehicle started...");
		}
	}
});

var Car = Vehicle.extend({
	start: function() {
		console.log("Car with registration number " + this.get('registrationNumber') + " has started." );
	}
});

// Create Collection
var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var vehicles = new Vehicles([
	new Vehicle({ registrationNumber: "XLI887", color: "Blue" }),
	new Vehicle({ registrationNumber: "ZNP123", color: "Blue" }),
	new Vehicle({ registrationNumber: "XUV456", color: "Gray" })
]);

// Find all the blue colors and log them in the console
var blueCars = vehicles.where({ color: "Blue" });
console.log(blueCars);

// Find the car with the registration number XLI887 and log it in the console
var xliCar = vehicles.findWhere({ registrationNumber: "XLI887" });
console.log(xliCar); 

// Remove that car from the collection
vehicles.remove(xliCar);

// Convert the collection to a JSON object and log it in the console
console.log(vehicles.toJSON());

// Iterate through the collection and log each car in the console
vehicles.each(function(vehicle) {
	console.log(vehicle);
});







