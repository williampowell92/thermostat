function Weather(){
}

Weather.prototype.getTemperature = function() {
  console.log(1);
  var myData = JSON.parse(data);
  var APIKey = myData[0]["APIKey"];
  var temperature = $.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${APIKey}`, function(response) {
    console.log(2);
    console.log(response.main.temp);

    return response.main.temp;
    console.log(3);
  });
  console.log(temperature)
};
