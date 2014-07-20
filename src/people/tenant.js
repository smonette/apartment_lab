var Person = require("./person.js");
var Inherit = require("./../inherit.js");


function Tenant(name, contact) {
  // set this.name, and contact
  Person.call(this, name, contact);
  this.references = [];
};

Inherit(Tenant, Person);

Tenant.prototype.addReference = function(reference){
  // add reference to references
   this.references.push(reference);
};



module.exports = Tenant;
