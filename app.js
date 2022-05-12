let now = new Date();
let li = document.querySelector("li");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[now.getDay()];

li.innerHTML = `${day} ${hours}:${minutes}`


function search(event) {
  event.preventDefault();
  let searhInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searhInput.value}`; 
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
