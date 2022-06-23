class Temperature {
  celsius;
  constructor(celsius) {
    this.celsius = celsius;
  }
  CelsiustoFahrenheit() {
    return (this.celsius *9)+32
  }
  CelsiustoKenin() {
    return (this.celsius + 273.15);
  }
  getTemperature() {
    return this.celsius;
  }
}
