
describe("Weather", function(){
var weather

  beforeEach(function(){
    weather = new Weather()
  });

  describe("getWeather", function(){
    it("returns a number", function(){
      expect(weather.getTemperature()).toBe("number")
    });
  });
});
