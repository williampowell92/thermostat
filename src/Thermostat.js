"use strict";

function Thermostat() {
  const defaultMinimumTemperature = 10
  const defaultTemperature = 20
  this.temperature = defaultTemperature;
  this.minimumTemperature = defaultMinimumTemperature
}

Thermostat.prototype.increaseTemperature = function() {
  this.temperature++
}

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature <= this.minimumTemperature) {
    throw new Error("Minimum temperature reached")
  }

  this.temperature--
}
