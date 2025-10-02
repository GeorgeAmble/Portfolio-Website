// Linking the document
const toggleDiv = document.getElementById("toggleDiv");
const target = document.getElementById("targetElement");
const caseStudies = document.getElementById("caseStudies");
const caseStudiesMobile = document.getElementById("caseStudiesMobile");
const caseStudiesSection = document.getElementById("caseStudiesSection");
const getInTouch = document.getElementById("getInTouch");
const getInTouchMobile = document.getElementById("getInTouchMobile");
const getInTouchSection = document.getElementById("getinTouchSection");
const buttonGetStarted = document.getElementById("buttonGetStarted");

function checkViewport() {
  // Define the function to avoid errors
  console.log("Viewport resized");
  // Add your viewport checking logic here
}

function toggleClasses() {
  target.classList.toggle("on");
}

function scrollToCaseStudiesSection(event) {
  if (event) event.preventDefault(); // Prevent default behavior if it's a link
  console.log("Scrolling to Case Studies Section");
  caseStudiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToGetInTouchSection(event) {
  if (event) event.preventDefault(); // Prevent default behavior if it's a link
  console.log("Scrolling to Get In Touch Section");
  getInTouchSection.scrollIntoView({ behavior: "auto", block: "start" });
}

// Event Listeners
if (toggleDiv) {
  toggleDiv.addEventListener("click", toggleClasses);
}

window.addEventListener("resize", checkViewport);

if (caseStudies) {
  caseStudies.addEventListener("click", scrollToCaseStudiesSection);
}

if (caseStudiesMobile) {
  caseStudiesMobile.addEventListener("click", scrollToCaseStudiesSection);
}

if (getInTouch) {
  getInTouch.addEventListener("click", scrollToGetInTouchSection);
}

if (getInTouchMobile) {
  getInTouchMobile.addEventListener("click", scrollToGetInTouchSection);
}

if (buttonGetStarted) {
  buttonGetStarted.addEventListener("click", scrollToGetInTouchSection);
}
