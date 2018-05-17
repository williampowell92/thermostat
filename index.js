console.log(window)
$(document).ready(function() {
  $('#temperature-up').click(function(){
    $("body").removeClass().addClass("high-usage");
  });

  $('#temperature-down').click(function(){
    $("body").removeClass().addClass("low-usage")
  });

  $("body").addClass("low-usage")

  $('#temperature-reset').click(function(){
    $("body").removeClass().addClass("medium-usage")
  });
});
