var enterWeight = parseInt(prompt("Please enter your weight: "));

var kilograms = 0.45;

var poundsToKilograms = enterWeight * kilograms;

var enterHeightInches = parseInt(prompt("Please enter your height in inches: "));

var Meters = .025;

var heightToMeters = enterHeightInches * Meters;

var heightToMetersSquared = heightToMeters * heightToMeters;

var BMI = poundsToKilograms / heightToMetersSquared;

alert("Your BMI is " + BMI.toFixed(3) + ".");
