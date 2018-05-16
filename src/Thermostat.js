"use strict";

function Thermostat() {
  const defaultMinimumTemperature = 10
  const defaultTemperature = 20
  this.temperature = defaultTemperature
  this.minimumTemperature = defaultMinimumTemperature
  this.isPowerSaving = true
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature >= this._maximumTemperature()) {
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

Thermostat.prototype._maximumTemperature = function() {
  const powerSavingOnMaxTemp = 25
  const powerSavingOffMaxTemp = 32

  return (this.isPowerSaving ? powerSavingOnMaxTemp : powerSavingOffMaxTemp);
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20
}
