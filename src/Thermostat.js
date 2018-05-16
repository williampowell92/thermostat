"use strict";

function Thermostat() {
  this.DEFAULT_MINIMUM_TEMPERATURE = 10
  this.DEFAULT_TEMPERATURE = 20
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18
  this.MAX_TEMP_PSM_ON = 25
  this.MAX_TEMP_PSM_OFF = 32
  this.temperature = this.DEFAULT_TEMPERATURE
  this.isPowerSaving = true
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature >= this._maximumTemperature()) {
    throw new Error("Maximum temperature reached")
  }

  this.temperature++
}

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature <= this.DEFAULT_MINIMUM_TEMPERATURE) {
    throw new Error("Minimum temperature reached")
  }

  this.temperature--
}

Thermostat.prototype.togglePowerSaving = function() {
  this.isPowerSaving = !this.isPowerSaving
}

Thermostat.prototype._maximumTemperature = function() {
  return (this.isPowerSaving ? this.MAX_TEMP_PSM_ON : this.MAX_TEMP_PSM_OFF);
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return "low-usage"
  } else if (this.temperature < this.MAX_TEMP_PSM_ON){
    return "medium-usage"
  } else {
    return "high-usage"
  }
}
