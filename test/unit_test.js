var expect = require("chai").expect,
  	app = require("../../src/main.js");

console.log("Write some test for Unit...");
describe("Unit", function(){
	managerName = new app.Manager("Herby Smith", "555-555-5555");
  	propertyName = new app.Property("123 Fake Street", [1,2,3,4,5]);
 	tenantName = new app.Tenant("Lulu Johnson", "555-123-456");


	it('should return true if unit is available', function(){
		Unit.available();
		expect(Unit).to.eql(true);
	});

});