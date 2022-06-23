class Flashlamp {
  battery;
  status;

  constructor(battery, status) {
    this.battery = battery;
    this.status = status;
  }

  getBattery(battery) {
    return this.battery;
  }

  setBattery(battery) {
    this.battery = battery;
    return this.battery;
  }

  turnOn() {
    this.status = true;
    return this.status;
  }

  turnOff(status) {
    this.status = false;
    return this.status;
  }
  checkLight() {
    if (this.status) {
      return "Turn on";
    }
    else {
      return "Turn off";
    }
  }
}

