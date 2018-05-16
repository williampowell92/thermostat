"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("temperature", function() {
    it("starts at 20", function() {
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe("increaseTemperature", function() {
    it("increases the temperature by 1", function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });
  });
});
