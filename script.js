"use strict";

const genBtn = document.getElementById("gen-btn");
const shirtForm = document.getElementById("shirt-form");

function FootballShirtGenerator(nation, decade, color, style, brand, teamName) {
  this.nation = nation;
  this.decade = decade;
  this.color = color;
  this.style = style;
  this.brand = brand;
  this.teamName = teamName;
  // this.img = image;
}

let nation = prompt("Would you prefer European or South American?");
let decade = prompt("Would you prefer modern or retro?");
let color = prompt("What is your color shirt would do you like?");
let style = prompt("Do you prefer a home or away shirt?");
let brand = prompt("What brand would you prefer?");

// let shirt = new FootballShirtGenerator(nation, decade, color, style, brand);
let shirt = new FootballShirtGenerator("european", "2020's", "blue", "home", "adidas", teamName);

console.log("Here are the details of the shirt you should buy:");
console.log("Nation: " + shirt.nation);
console.log("Decade: " + shirt.decade);
console.log("Color: " + shirt.color);
console.log("Style: " + shirt.style);
console.log("Brand: " + shirt.brand);
console.log("Team Name" + shirt.teamName);

function handleShirtForm(event) {
  event.preventDefault();
  console.log(event.target.decade.value);
}
shirtForm.addEventListener("submit", handleShirtForm);
