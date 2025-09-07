
//select the form from the DOM
const rateMyAdventurer = document.getElementById("rma-form");

//add a submit event to the form
rateMyAdventurer.addEventListener("submit", handleSubmit);

//handle the submit event
async function handleSubmit(event) {
  //prevent the data from going to the url
  event.preventDefault();

  //create  new template
  const formData = new FormData(rateMyAdventurer);

   //input data box
  //iput data in template
 const formValues = Object.fromEntries(formData.entries());;
  console.log(formValues);

fetch("https://assignment4-wqkw.onrender.com/khasrae", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ formValues }),
})
.then((response) => {
    if (response.ok) {
        alert ("Thank you for your review");
} else {
  alert ("Apologies, your review cannot be posted at this time. It appears to have been eaten by a mimic. Please try again later.")
}
  });
}

//TODO: Need to look at retrieving reviews and appending the new one on submission ^

//((Attempting to)) Grab reviews and append them
async function retrieveReviewsDisplayAll() {

  // Grabbing reviews from server
  const serverResponse = await fetch ("https://assignment4-wqkw.onrender.com/khasrae");

const adventurerReviews = await serverResponse.json();
const returnedSubmissionForms = document.getElementById("returned-submission-forms");

//Loop for each review and display for x amount
adventurerReviews.forEach((adventurerReview) => {
   const adventurerReviews = document.createElement("div");

   //Retrieve data for each review
   adventurerReview.innerhtml = `
   <b>Fellow adventuring member:</b>; ${adventurerReview.NAME}
   <p>Species: ${adventurerReview.SPECIES}</p>
   <p>Class: ${adventurerReview.CLASS}</p>
   <p>Review: ${adventurerReview.TEXT_FEEDBACK}</p>`
  
   //append
adventurerReviews.appendChild(adventurerReview);

// Todo: Find a way to implement a like and trash button, inline of the bottom of each review, perhaps.

//call function
retrieveReviewsDisplayAll();
})}
