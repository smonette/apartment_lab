var expect = require("chai").expect,
  	app = require("../../src/main.js");

describe("Person", function(){
  herby = new app.Manager("Herby Smith", "555-555-5555");
  lulu = new app.Tenant("Lulu Johnson", "555-123-4567");
  jolene = new app.Person("Jolene Parton", "555-789-4756");
  emilio = new app.Person("Emilio Olson", "555-678-2345");

  propertyName = new app.Property("123 Fake Street", [1,2,3,4,5]);
  appBuild = new app.ApartmentBuilding("NEMA", "1 Market Street");
  duplexBuild = new app.Duplex("555 Mission Street");
  townBuild = new app.TownHouse("1525 Geary Street");
  unit1 = new app.Unit("one", "NEMA", 600, "$2000");

  
  it('should have a name and contact info', function(){
      app.Person(lulu);
      expect(lulu).to.eql(lulu);
    });

  describe("addReference", function(){
    it('should add reference to array', function(){
      lulu.addReference(jolene);
      lulu.addReference(emilio);
      expect(lulu.references).to.eql([jolene, emilio]);
    });
  });

// TODO: This test is not working
  describe("addProperty", function(){
    it('should add property to array', function(){
      herby.addProperty(propertyName);
      expect(herby.properties).to.eql([propertyName]);
    });
  });

// TODO: This test is not working
  describe("removeProperty", function(){
    it('should remove the property from the array', function(){
      herby.removeProperty(propertyName);
      expect(herby.properties).to.eql([]);
    });
  });





});