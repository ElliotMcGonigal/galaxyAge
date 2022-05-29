export class CalcAge {
  ageMercury(input){
    this.age = Math.round(input/.24);
    return this.age;
  }
  ageVenus(input){
    this.age = Math.round(input/.62);
    return this.age;
  }
  ageMars(input){
    this.age = Math.round(input/1.88);
    return this.age;
  }
  ageJupiter(input){
    this.age = Math.round(input/11.86);
    return this.age;
  }
}