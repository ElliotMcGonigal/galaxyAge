import CalcAge from './calcage.js';
import LifeLeft from './lifeleft.js';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const userInput = parseFloat($('#userInput').val());
    const calculatedAge = new CalcAge(userInput);
    const calculatedLife = new LifeLeft(userInput);
    const merAge = calculatedAge.ageMercury(userInput);
    const merLife = calculatedLife.leftMercury(userInput);
    const venAge = calculatedAge.ageVenus(userInput);
    const venLife = calculatedLife.leftVenus(userInput);
    const marAge = calculatedAge.ageMars(userInput);
    const marLife = calculatedLife.leftMars(userInput);
    const jupAge = calculatedAge.ageJupiter(userInput);
    const jupLife = calculatedLife.leftJupiter(userInput);
    if (userInput >= 78.6) {
      $("#displayGalactic").html("On Mercury you are " + merAge + " years old, and you have passed your life expectancy by " + merLife + " years!/n" + "On Venus you are " + venAge + " years old, and you have passed your life expectancy by " + venLife + " years!/n" + "On Mars you are " + marAge + " years old, and you have passed your life expectancy by " + marLife + " years!/n" + "On Jupiter you are " + jupAge + " years old, and you have passed your life expectancy by " + jupLife + " years!");
    }
    else {
      $("#displayGalactic").html("On Mercury you are " + merAge + " years old, and you will live for another " + merLife + " years!/n" + "On Venus you are " + venAge + " years old, and you will live for another " + venLife + " years!/n" + "On Mars you are " + marAge + " years old, and you will live for another " + marLife + " years!/n" + "On Jupiter you are " + jupAge + " years old, and you will live for another " + jupLife + " years!");      
    }
  });
});