const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumberSpan = document.querySelector(".advice-number");
const adviceQuoteSlot = document.querySelector(".advice");
const fetchBtn = document.querySelector(".dice");

const fetchNewAdvice = async () => {
  // Send a request to the API URL and "await" for the response
  const response = await fetch(API_LINK);

  // Convert the response data to JSON format and return it. JSON is necessary for the JavaScript to understand it
  const advice = await response.json();
  return advice;
};

const renderAdvice = (adviceObj) => {
  // Extract the advice ID and actual advice from the object
  const { id, advice } = adviceObj;

  adviceNumberSpan.textContent = `ADVICE #${id}`;
  adviceQuoteSlot.textContent = advice;
};

// Define an asynchronous function to generate and display new advice
const generateNewAdvice = async () => {
  // Call the "fetchNewAdvice" function to get advice data from the API
  const data = await fetchNewAdvice();

  // Extract the actual advice from the fetched data
  const advice = data.slip;

  // Call the "renderAdvice" function to display the advice on the webpage
  renderAdvice(advice);
};

window.addEventListener("DOMContentLoaded", () => {
  // Add a click event listener to the "fetchBtn" (dice button)
  // When the button is clicked, call the "generateNewAdvice" function
  fetchBtn.addEventListener("click", generateNewAdvice);
});
