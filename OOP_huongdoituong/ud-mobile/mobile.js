class Mobile {
  id;
  name;
  battery;
  draft;
  inbox;
  sent;
  status;
  constructor(id, name, battery, draft, inbox, sent,) {
    this.battery = battery;
    this.draft = draft;
    this.inbox = inbox;
    this.sent = sent;
    this.status = status;
  }
  chargeBattery() {
    if (battery < 100) {
      battery++;
    }
  }
  turnOn () {
    this.status = true;
    return this.status;
  }
  turnOff () {
    this.status = false;
    return this.status;
  }
  checkStatus () {
    if (this.status) {
      return "Turn On"
    }
    else {
      return "Turn Off"
    }
  }


}


