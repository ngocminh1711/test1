class TH_b1 {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

  }
  getDate() {
      return this.day + "/" + this.month + "/" + this.year;
    }
  setDate(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}
let date = new TH_b1(2,2,2019);
let date1 = new TH_b1(3,2,2022)
document.write(date.getDate());
document.write('<br>');
date1.setDate(2, 3, 2011);
document.write(date1.getDate());
