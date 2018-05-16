"use strict";

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.increaseTemperature = function() {
  this.temperature++
}

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature--
}
