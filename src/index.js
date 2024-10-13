// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const filmsList = document.getElementById("films");
    const posterDisplay = document.getElementById("poster");
    const titleDisplay = document.getElementById("title");
    const runtimeDisplay = document.getElementById("runtime");
    const showtimeDisplay = document.getElementById("showtime");
    const ticketCountDisplay = document.getElementById("ticket-num");
    const descriptionDisplay = document.getElementById("film-info");
    const buyButton = document.getElementById("buy-ticket");
    const baseURL = "http://localhost:3000/films";
  
    let currentMovie;
    let ticketsAvailable;
  
    function loadFirstMovie() {
      fetch(baseURL)
        .then((response) => response.json())
        .then((movie) => {
          currentMovie.textContent = movie.title;
         let  ticketsAvailable = movie.capacity - movie.tickets_sold;
         titleDisplay.
          displayMovieDetails(movie);
        });
    }
  
  
    function displayMovieDetails(movie) {
      posterDisplay.src = movie.poster;
      posterDisplay.alt = movie.title;
      titleDisplay.textContent = movie.title;
      runtimeDisplay.textContent = `${movie.runtime} minutes`;
      showtimeDisplay.textContent = movie.showtime;
      descriptionDisplay.textContent = movie.description;
      ticketCountDisplay.textContent = `${ticketsAvailable} tickets remaining`;
    }
  
    function loadMoviesMenu() {
      fetch(baseURL)
        .then((response) => response.json())
        .then((movies) => {
          filmsList.innerHTML = "";
  
          movies.forEach((movie) => {
            const filmItem = document.createElement("li");
            filmItem.className = "film item";
            filmItem.textContent = movie.title;
  
            filmItem.addEventListener("click", () => {
              displayMovieDetails(movie);
            });
  
            filmsList.appendChild(filmItem);
          });
        });
    }
  
    buyButton.addEventListener("click", () => {
      if (ticketsAvailable > 0) {
        ticketsAvailable -= 1;
        ticketCountDisplay.textContent = `${ticketsAvailable} tickets remaining`;
      } else {
        alert("Sorry, this showing is sold out!");
      }
    });
  
    function initialize() {
      loadFirstMovie();
      loadMoviesMenu();
    }
  
    initialize();
  });
  
