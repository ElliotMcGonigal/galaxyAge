import { TestScheduler } from "jest";
import { CalcAge } from "./../src/index.js/";

describe('CalcAge', ()=>{
  TestScheduler('should return inputted as as their age on Mercury', ()=>{
    const age = new CalcAge(23);
    expect(age.ageMercury).toEqual(5.52);
  });
}); 