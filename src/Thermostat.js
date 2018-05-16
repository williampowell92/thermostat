"use strict";

function Thermostat() {
  const defaultTemperature = 20
  this.temperature = defaultTemperature;
}

Thermostat.prototype.increaseTemperature = function() {
  this.temperature++
}

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature--
}
