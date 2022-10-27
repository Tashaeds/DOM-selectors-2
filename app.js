
//Event listener console logs when password is submitted.
const password = document.querySelector ("#passed");

//Event listener which console logs the current target text content
password.addEventListener("click", (event) => {
  console.log(event.currentTarget.textContent);
});