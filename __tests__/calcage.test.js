import { CalcAge } from "./../src/index.js/";

describe('CalcAge', ()=>{
  test('should return inputted as as their age on Mercury', ()=>{
    const age = new CalcAge(23);
    expect(age.ageMercury(23)).toEqual(96);
    expect(age.ageVenus(23)).toEqual(37);
    expect(age.ageMars(23)).toEqual(12);
    expect(age.ageJupiter(23)).toEqual(2);
  });
}); 
