// var Vehicle = Backbone.Model.extend({
//   idAttribute: "registrationNumber",
//   validate: function(registrationNumber) {
//     if(!registrationNumber) {
//       return "A registration number is required";
//     }
//   },
//   urlRoot: "/api/vehicles",
//   defaults: {
//     start: function(){
//       console.log("Vehicle started.");
//     }
//   }
// });

// var Car = Vehicle.extend({
//   start: function(){
//     console.log("Car with registration number " + this.get('registrationNumber') + " started.");
//   }
// });

// var car = new Car({
//   registrationNumber: "XLI887",
//   color: "Blue"
// });

// Another Attempt for Models Project
var Vehicle = Backbone.Model.extend({
  idAttribute: "registrationNumber",
  validate: function(attrs) {
    if(!attrs.registrationNumber) {
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
    console.log("Car with registration number " + this.get('registrationNumber') + " started.");
  }
});
var car = new Car({
  registrationNumber: "NEW-REG21",
  color: "Blue"
});