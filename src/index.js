// Your code here
document.addEventListener("DOMContentLoaded", () => { 
  const filmsList = document.getElementById("films");
  const posterDisplay = document.getElementById("poster");
  const titleDisplay = document.getElementById("title");
  const runTimeDispay = document.getElementById("runtime");
  const showtimeDisplay = document.getElementById("showtime");
  const ticketCountDisplay = document.getElementById("ticket-num");
  const descriptionDisplay = document.getElementById("film-info");
  const buyButton = document.getElementById("buy-ticket");

  const baseURL = "http://localhost:3000";
  function loadFirstMovie(){
    fetch(`{baseUrl/films/1}`)
    .then((Response) => Response.json)
    .then((movie) => displayMovieDetails(movie));
  }
  function displayMovieDetails(movie){
    posterDisplay.src = movie.poster;
    posterDisplay.alt = movie.title;
    titleDisplay.textContent = `Runtime: ${movie.runtime} minutes`;
    showtimeDisplay.textContent = movie.showtime;
    descriptionDisplay.textContent = movie.description;
  }
  let ticketsAvailable = movie.capacity - movie.tickets_sold
  
}
)