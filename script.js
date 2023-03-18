// Constants
const DEFAULT_GRADIENT_STEPS = 10;
const MAX_GRADIENT_STEPS = 100;

// Variables
let vectors = [];
let currentVector = null;
let color1 = "#000000";
let color2 = "#ffffff";
let gradientPicker = null;

// Functions
function addVector() {
  const vector = document.createElement("div");
  vector.classList.add("vector");
  vectors.push(vector);
  document.getElementById("vectors").appendChild(vector);
  setCurrentVector(vector);
}

function setCurrentVector(vector) {
  currentVector = vector;
  const vectorIndex = vectors.indexOf(vector);
  color1 = localStorage.getItem(`color1-${vectorIndex}`) || "#000000";
  color2 = localStorage.getItem(`color2-${vectorIndex}`) || "#ffffff";
  document.getElementById("color1-picker").value = color1;
  document.getElementById("color2-picker").value = color2;
  updateGradientPicker();
}

function updateGradientPicker() {
  const gradientSteps = localStorage.getItem(`gradient-steps-${vectors.indexOf(currentVector)}`) || DEFAULT_GRADIENT_STEPS;
  const gradientColors = hslGradient(color1, color2, gradientSteps);
  gradientPicker.innerHTML = "";
  for (let i = 0; i < gradientColors.length; i++) {
    const option = document.createElement
