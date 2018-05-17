console.log(window)
$(document).ready(function() {

  $("#google-link").click(function() {
    alert("I broke the link")

    event.preventDefault()
  });

  ("#temperature-down").click(function() {
    $("body").removeClass("high-usage").addClass("low-usage")
  });
});
