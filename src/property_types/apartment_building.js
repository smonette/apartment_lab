var Property = require("./property.js");
var Unit = require("./../unit.js");
var Inherit = require("./../inherit.js");

function ApartmentBuilding(name, address, units) {
	Property.call(this, address);
	// A building can have many many units 
	this.name = name;
	this.units = units || [];
}

Inherit(ApartmentBuilding,Property);

ApartmentBuilding.prototype.addUnit = function(unit){
  this.units.push(unit);
}

module.exports = ApartmentBuilding;