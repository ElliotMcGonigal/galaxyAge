export class CalcAge{
  ageMercury(input){
    this.age = input * .24;
    console.log(this.age);
    return this.age;
  }
  ageVenus(input){
    this.age = input * .62;
    console.log(this.age);
    return this.age;
  }
} 