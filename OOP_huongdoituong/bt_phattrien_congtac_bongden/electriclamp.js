class Electriclamp {
  status;
  constructor(status) {
    this.status = status;
  }
  getStatus() {
    return this.status;
  }
  setStatus(status){
    this.status = status;
  }
}
