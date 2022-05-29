import { CalcAge } from "./../src/index.js/";

describe('CalcAge', ()=>{
  test('should return inputted as as their age on Mercury', ()=>{
    const age = new CalcAge(23);
    expect(age.ageMercury(23)).toEqual(6);
    expect(age.ageVenus(23)).toEqual(14);
    expect(age.ageMars(23)).toEqual(43);
  });
}); 
