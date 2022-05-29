import { CalcAge } from "./../src/calcage.js";
import { LifeLeft } from "./../src/lifeleft.js";

describe('CalcAge', ()=>{
  test('should return inputted number as their age on Mercury', ()=>{
    const age = new CalcAge(23);
    expect(age.ageMercury(23)).toEqual(96);
    expect(age.ageVenus(23)).toEqual(37);
    expect(age.ageMars(23)).toEqual(12);
    expect(age.ageJupiter(23)).toEqual(2);
  });
}); 

describe('LifeLeft', ()=>{
  test('should return their remaining years on Mercury, Venus, Mars, and Jupiter', ()=>{
    const remain = new LifeLeft(23);
    expect(remain.leftMercury(23)).toEqual(232);
    expect(remain.leftVenus(23)).toEqual(90);
    expect(remain.leftMars(23)).toEqual(30);
    expect(remain.leftJupiter(23)).toEqual(5);
  });
}); 