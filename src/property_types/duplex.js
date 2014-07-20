var Property = require("./property");
var Unit = require("./../unit.js");
var Inherit = require("./../inherit.js");


function Duplex(address, number, sqft, rent) {
  // A duplex only has 2 units;
    Property.call(this, address);
    Unit.call(this,number, sqft, rent);
    this.units = [1,2];
}

Inherit(Duplex,Property);

module.exports = Duplex;