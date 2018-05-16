"use strict";

describe("Thermostat", function() {
  var thermostat
  const defaultTemperature = 20
  const incrementValue = 1
  const minimumTemperature = 10

  beforeEach(function() {
    thermostat = new Thermostat()
  });

  describe("temperature", function() {
    it("starts at 20", function() {
      expect(thermostat.temperature).toEqual(defaultTemperature)
    });
  });

  describe("increaseTemperature", function() {
    it("increases the temperature by 1", function() {
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(defaultTemperature+incrementValue)
    });
  });

  describe("decreaseTemperature", function() {
    it("decreases the temperature by 1", function() {
      thermostat.decreaseTemperature()
      expect(thermostat.temperature).toEqual(defaultTemperature-incrementValue)
    });

    it("cannot go below minimum temperature", function() {
      thermostat.temperature = 10
      expect(function() {
        thermostat.decreaseTemperature()
      }).toThrowError("Minimum temperature reached")
    });
  });
});
