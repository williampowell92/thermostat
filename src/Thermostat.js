"use strict";

function Thermostat() {
  const defaultMinimumTemperature = 10
  const defaultMaximumTemperature = 25
  const defaultTemperature = 20
  this.temperature = defaultTemperature;
  this.minimumTemperature = defaultMinimumTemperature
  this.maximumTemperature = defaultMaximumTemperature
  this.isPowerSaving = true
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature >= this.maximumTemperature) {
    throw new Error("Maximum temperature reached")
  }

  this.temperature++
}

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature <= this.minimumTemperature) {
    throw new Error("Minimum temperature reached")
  }

  this.temperature--
}

Thermostat.prototype.togglePowerSaving = function() {
  this.isPowerSaving = !this.isPowerSaving
}
//
// isPowerSaving = true/false
//
// _maximumTemperature()
