class Human {
  name;
  gender;
  weight;

  constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  }

  getInfo() {
    return "This human is " + this.name + " ," + this.gender + " gender, weight is " + this.weight;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
    return this.name;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    this.weight = weight;
    return this.weight;
  }

  isGender() {
    if (this.gender == 1) {
      return "Male";
    } else {
      return "Female";
    }
  }

  say(String) {
    console.log(String);
  }

  checkApple() {
    return apple.isEmpty();
  }

  eat(apple) {
    if (apple.getWeight() > 0) {
      apple.decreaseApple();
      this.weight++
    } else {
      alert("Táo đã hết")
    }
  }
}
