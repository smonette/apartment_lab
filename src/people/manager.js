var Person = require("./person");
var Inherit = require("./../inherit.js");

function Manager(name, contact, properties) {
  // set name and contact
  Person.call(this, name, contact);
  this.properties = [];
}

Inherit(Manager, Person);

// My not working version

// Manager.prototype.addProperty = function(property) {
//   // add property from properties
//   this.property = property;
//   properties.push(property);
// };

// Manager.prototype.removeProperty = function(property) {
//   // remove properties
// 	var remove = property;	
// 	for (i= 0; i < properties.length-1; i++) {
// 	    if (properties[i] === remove) {
// 	        properties.splice(i, 1);
// 	    }
// 	}
// };


// Solution 
Manager.prototype.addProperty = function(property) {
  // check if property is an INSTANCEOF a PROPERTY
  if (property instanceof Property) {
    this.properties.push(property);
  } else {
    console.error("Failed to add property:", property);
  }

  return this;
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
  var indexOfProperty = this.properties.indexOf(property);
  if(indexOfProperty !== -1) {
   this.properties.splice(indexOfProperty, 1);
  } else {
    console.error("Failed to remove property:", property);
  }

  return this;
};





module.exports = Manager;
