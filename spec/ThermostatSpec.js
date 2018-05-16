"use strict";

describe("Thermostat", function() {
  var thermostat
  const incrementValue = 1

  beforeEach(function() {
    thermostat = new Thermostat()
  });

  describe("temperature", function() {
    it("starts at 20", function() {
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE)
    });
  });

  describe("increaseTemperature", function() {
    it("increases the temperature by 1", function() {
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE + incrementValue)
    });

    it("cannot go above maximum temperature in power saving mode", function() {
      thermostat.temperature = thermostat.MAX_TEMP_PSM_ON
      expect(function() {
        thermostat.increaseTemperature()
      }).toThrowError("Maximum temperature reached")
    });

    it("can go above default max temp out of power saving mode", function() {
      thermostat.isPowerSaving = false
      thermostat.temperature = thermostat.MAX_TEMP_PSM_ON
      expect(function() {
        thermostat.increaseTemperature()
      }).not.toThrowError("Maximum temperature reached")
    });
  });

  describe("decreaseTemperature", function() {
    it("decreases the temperature by 1", function() {
      thermostat.decreaseTemperature()
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE - incrementValue)
    });

    it("cannot go below minimum temperature", function() {
      thermostat.temperature = thermostat.DEFAULT_MINIMUM_TEMPERATURE
      expect(function() {
        thermostat.decreaseTemperature()
      }).toThrowError("Minimum temperature reached")
    });
  });

  describe("isPowerSaving", function() {
    it("default is power saving mode is on", function() {
      expect(thermostat.isPowerSaving).toBeTruthy()
    });
  });

  describe("togglePowerSaving", function(){
    it("switches power saving to off", function(){
      thermostat.togglePowerSaving()
      expect(thermostat.isPowerSaving).toBeFalsy()
    });
    it("switches power saving mode to on", function(){
      thermostat.isPowerSaving = false
      thermostat.togglePowerSaving()
      expect(thermostat.isPowerSaving).toBeTruthy()
    });
  });

  describe("_maximumTemperature", function(){
    it("is 25 in power saving mode", function(){
      thermostat.isPowerSaving = true
      expect(thermostat._maximumTemperature()).toEqual(thermostat.MAX_TEMP_PSM_ON)
    });
    it("is 32 if power saving mode is off", function(){
      thermostat.isPowerSaving = false
      expect(thermostat._maximumTemperature()).toEqual(thermostat.MAX_TEMP_PSM_OFF)
    });
  });

  describe("resetTemperature", function() {
    it("resets the temperature to default", function() {
      thermostat.temperature = thermostat.MAX_TEMP_PSM_ON
      thermostat.resetTemperature()
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE)
    });
  });

  describe("energyUsage", function() {
    it("is low when temperature is below 18", function(){
      for (var temp = thermostat.DEFAULT_MINIMUM_TEMPERATURE; temp < thermostat.MEDIUM_ENERGY_USAGE_LIMIT; temp++) {
        thermostat.temperature = temp
        expect(thermostat.energyUsage()).toEqual("low-usage")
      };
    });
    it("is medium when the temperature is between 18 and 24", function (){
      for (var temp = thermostat.MEDIUM_ENERGY_USAGE_LIMIT; temp < thermostat.MAX_TEMP_PSM_ON; temp++) {
        thermostat.temperature = temp
        expect(thermostat.energyUsage()).toEqual("medium-usage")
      };
    });
    it("is high when the temperature is 25 or above", function(){
      thermostat.isPowerSaving = false
      for (var temp = thermostat.MAX_TEMP_PSM_ON; temp < thermostat.MAX_TEMP_PSM_OFF; temp++) {
        thermostat.temperature = temp
        expect(thermostat.energyUsage()).toEqual("high-usage")
      };
    });
  });
});
