
$(document).ready(function() {
  var thermostat = new Thermostat
  updateTemperature();

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
  };

  function lowUsage() {
    $("body").removeClass().addClass("low-usage")
  }

  function mediumUsage() {
    $("body").removeClass().addClass("medium-usage")
  }

  function highUsage() {
    $("body").removeClass().addClass("high-usage")
  }

  function updateEnergyUsage() {
    if (thermostat.energyUsage() === "low-usage") {
      $("body").removeClass().addClass("low-usage")
    } else if (thermostat.energyUsage() === "medium-usage") {
      $("body").removeClass().addClass("medium-usage")
    } else {
      $("body").removeClass().addClass("high-usage");
    }
  };



  $("#temperature-up").click(function() {
    thermostat.increaseTemperature()
    updateTemperature()
    updateEnergyUsage()
  });

  $("#temperature-down").click(function() {
    thermostat.decreaseTemperature()
    updateTemperature()
    updateEnergyUsage()
  });

  $("#temperature-reset").click(function() {
    thermostat.resetTemperature()
    updateTemperature()
    updateEnergyUsage()
  })

  $("#power-saving").click(function() {
    thermostat.togglePowerSaving()
    updateTemperature()
    updateEnergyUsage()
  })

  // $('#temperature-up').click(function() {
  //   $("body").removeClass().addClass("high-usage");
  // });
  //
  // $('#temperature-down').click(function() {
  //   $("body").removeClass().addClass("low-usage")
  // });
  //
  // $('#temperature-reset').click(function() {
  //   $("body").removeClass().addClass("medium-usage")
  // });

  // $("#temperature").html(thermostat.temperature);
});
