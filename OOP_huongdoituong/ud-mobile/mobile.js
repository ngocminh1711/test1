class Mobile {
  id;
  name;
  battery;
  draft;
  inbox;
  sent;
  tinnhan;
  constructor(id, name, battery, draft, inbox, sent, tinnhan) {
    this.battery = battery;
    this.draft = draft;
    this.inbox = inbox;
    this.sent = sent;
    this.tinnhan = tinnhan;
  }
  chargeBattery() {
    if (battery < 100) {
      battery++;
    }
  }
  sentMessage(tinnhan){

    }
}


