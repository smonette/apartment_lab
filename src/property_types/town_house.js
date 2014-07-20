var Property = require("./property");
var Unit = require('./../unit.js');
var Inherit = require("./../inherit.js");



function TownHouse(address, sqft, rent){
  // only has one unit per address
  Property.call(this, address);
  Unit.call(this, sqft, rent);
  this.units = [1];
};

Inherit(TownHouse,Property);

module.exports = TownHouse;
