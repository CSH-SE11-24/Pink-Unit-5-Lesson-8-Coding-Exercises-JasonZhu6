console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let helloBtn = document.querySelector("#helloButton")

// Select the empty p tag under that button
let helloTxt = document.querySelector("#helloText")

// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
helloBtn.addEventListener("click", function() {
  helloTxt.textContent = "Hello";
})

// Task 2: All caps button flow
// Implement the DOM manipulation code flow such that when you click the all caps button, the text below becomes all caps (i.e. "THERE'S NO NEED TO SHOUT")
// Make sure to add whatever IDs/classes you need to select the necessary elements
let capBtn = document.querySelector("#capButton")
let capTxt = document.querySelector("#capText")

capBtn.addEventListener("click", function() {
  capTxt.textContent = capTxt.textContent.toUpperCase()
})


// Task 3: Dog image flow
// Implement the DOM manipulation code flow such that when your mouse is over the dog image, it shows happy-dog.jpeg and when it is off the dog image, it shows sad-dog.jpeg.
// Make sure to add whatever IDs/classes you need to select the necessary elements
let dogFeeling = document.querySelector("#dogFeeling")

dogFeeling.addEventListener("mouseover", function() {
  dogFeeling.src = "happy-dog.jpeg"
})

dogFeeling.addEventListener("mouseout", function() {
  dogFeeling.src = "sad-dog.jpeg"
})


// Task 4: Name input flow
// Implement the DOM manipulation code flow such that when you click the submit button, you display "Nice to meet you " with the value typed into the input field
// Make sure to add whatever IDs/classes you need to select the necessary elements
let submitBtn = document.querySelector("#submitButton")
let submitTxt = document.querySelector("#submitText")
let nameInput = document.querySelector("#nameInput")

submitBtn.addEventListener("click", function() {
  submitTxt.textContent = "Nice to meet you, " + nameInput.value + "!"
})

