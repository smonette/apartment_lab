var Person = require("./person");
var Inherit = require("./../inherit.js");

function Manager(name, contact, properties) {
  // set name and contact
  Person.call(this, name, contact);
  this.properties = [];
}

Inherit(Manager, Person);

Manager.prototype.addProperty = function(property) {
  // add property from properties
  this.property = property;
  properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
	var remove = property;	
	for (i= 0; i < properties.length-1; i++) {
	    if (properties[i] === remove) {
	        properties.splice(i, 1);
	    }
	}
};


module.exports = Manager;
