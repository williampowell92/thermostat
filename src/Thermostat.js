"use strict";

function Thermostat() {
  const defaultTemperature = 20
  const defaultValue = 1
  this.temperature = defaultTemperature;
  this.incrementValue = defaultValue;
}

Thermostat.prototype.increaseTemperature = function() {
  // this.temperature++
  this.temperature = this.temperature + this.incrementValue
}

Thermostat.prototype.decreaseTemperature = function() {
  // this.temperature--
  this.temperature = this.temperature - this.incrementValue
}
