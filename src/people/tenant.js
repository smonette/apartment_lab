var person = require("./person.js");

function Tenant(name, contact) {
  // set this.name, and contact
  this.name = name;
  this.contact = contact;
  this.references = [];
};

Tenant.prototype.addReference = function(reference){
  // add reference to references
   this.references.push(reference);
};

module.exports = Tenant;
