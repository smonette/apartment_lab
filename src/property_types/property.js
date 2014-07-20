var Unit = require('../unit.js');

function Property(address) {
  this.address = address;
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  this.manager = person;
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager;
};

Property.prototype.addTenant = function(unit, newTenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  if( newTenant.references.length >= 2 && this.manager != null) {
  	  unit.tenant = newTenant;
  } 
};

Property.prototype.removeTenant = function(unit, formerTenant) {
  // remove tenant
  unit.tenant = null;
};

Property.prototype.availableUnits = function(){
  // return num of units available
  if(this.units.length > 0){
      console.log(this.units.length)
      var availUnits = 0;
      for( i = 0; i < this.units.length; i++ ){
        if(this.units[i].available === true) {
          availUnits = availUnits + 1;
        } 
      }
      return availUnits;
  } else {
    return "First, add units to your building.";
  }
};

Property.prototype.rentedUnits = function(){
  // return rented units
  var rentUnits = 0 ;
  for( i = 0; i < this.units.length; i++ ){
  	if(this.units[i].available === false) {
  		rentUnits = rentUnits + 1;
  	} 
  }
}


module.exports = Property;
