var expect = require("chai").expect,
  	app = require("../../src/main.js");




console.log("Write some test for Property...");


describe("Property", function(){

  
  herby = new app.Manager("Herby Smith", "555-555-5555");
  lulu = new app.Tenant("Lulu Johnson", "555-123-4567");
  jolene = new app.Person("Jolene Parton", "555-789-4756");
  emilio = new app.Person("Emilio Olson", "555-678-2345");

  propertyName = new app.Property("123 Fake Street");
  appBuild = new app.ApartmentBuilding("NEMA", "1 Market Street", [new app.Unit("one", "NEMA", 600, "$2000")]);
  duplexBuild = new app.Duplex("555 Mission Street");
  townBuild = new app.TownHouse("1525 Geary Street");
  unit1 = new app.Unit("one", "NEMA", 600, "$2000");



  it('should have an address and array of units', function(){
      app.Property(propertyName);
      expect(propertyName).to.eql(propertyName);
    });

	describe("setManager", function(){
		it('should set name of manager', function(){
			propertyName.setManager(herby);
			expect(propertyName.manager).to.eql(herby);
		});
	});

	describe("getManager", function(){
		it('should retreive name of manager', function(){
			propertyName.getManager();
			expect(propertyName.manager).to.eql(herby);
		});
	});

	describe("addTenant", function(){
		it('should add a tenant to building', function(){
      lulu.addReference(jolene);
      lulu.addReference(emilio);
			propertyName.addTenant(unit1, lulu);
			expect(unit1.tenant).to.eql(lulu);
		});
	});

	describe("removeTenant", function(){
		it('should add a remove a tenant from unit', function(){
			propertyName.removeTenant(unit1, lulu);
			expect(unit1.tenant).to.eql(null);
		});
	});

	describe("availableUnits", function(){
		it('should display the number of available units', function(){
      console.log(appBuild.units)
			expect(appBuild.availableUnits()).to.equal(1);
		});
	});

	// describe("rentedUnits", function(){
	// 	it('should display the number of rented units', function(){
	// 		propertyName.rentedUnits();
	// 		expect( ).to.eql( );
	// 	});
	// });

	// Apartment
	describe("addUnit", function(){
		it('should add units to apartment building', function(){
      var unit = new app.Unit("two", "NEMA", 600, "$2000");
			appBuild.addUnit(unit);
			expect(appBuild.units[appBuild.units.length - 1]).to.eql(unit);
		});
	});

	// Duplex
	describe("Duplex", function(){
		it('should only have two units', function(){
			duplexBuild;
			expect(duplexBuild.units.length).to.eql(2);
		});
	});

	// Townhouse
	describe("TownHouse", function(){
		it('should only have one unit', function(){
			townBuild;
			expect(townBuild.units.length).to.eql(1);
		});
	});



});