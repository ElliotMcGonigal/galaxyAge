export class CalcAge {
  ageMercury(input){
    this.age = Math.round(input/.24);
    console.log(this.age);
    return this.age;
  }
  ageVenus(input){
    this.age = Math.round(input/.62);
    console.log(this.age);
    return this.age;
  }
  ageMars(input){
    this.age = Math.round(input/1.88);
    console.log(this.age);
    return this.age;
  }
  ageJupiter(input){
    this.age = Math.round(input/11.86);
    console.log(this.age);
    return this.age;
  }
}