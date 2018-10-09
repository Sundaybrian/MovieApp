$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    console.log(searchText + "initial");

    getMovies(searchText);

    e.preventDefault();

  });
});


function getMovies(searchText) {
  console.log(searchText);
  axios.get('http://www.omdbapi.com/?apikey=c729fcf0&s=' + searchText)
    .then(function(response) {
      console.log(response);
      let movies = response.data.Search;
      let output = '';

      $.each(movies, (index, movie) => {
        output += `
      <div class="col-md-3">
      <div class="well text-center">
      <img src="${movie.Poster}">
      <h5>${movie.Title}</h5>

      <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">View Details</a>
      </div>
      </div>
      `;
      });

      $('#movies').html(output);

    })
    .catch(function(error) {
      console.log(error);
    });

}


function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie() {

  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com/?apikey=c729fcf0&i=' + movieId)
    .then(function(response) {
      console.log(response);
      let movie = response.data;
      let output = `

      <div class ="row">
      <div class ="col-md-4">
      <img src="${movie.Poster}" class="thumbnail">

      </div>

      <div class ="col-md-8">
      <h2>${movie.Title}</h2>

      <ul class="list-group">
      <li class="list-group-item">Genre:${movie.Genre}</li>
      <li class="list-group-item">Released:${movie.Released}</li>
      <li class="list-group-item">Rated:${movie.Rated}</li>
      <li class="list-group-item">Rating:${movie.imdbRating}</li>
      <li class="list-group-item">Runtime:${movie.Runtime}</li>
      <li class="list-group-item">Director:${movie.Director}</li>
      <li class="list-group-item">Actors:${movie.Actors}</li>
      <li class="list-group-item">Year:${movie.Year}</li>

      </ul>

      </div>
      </div>

      <div class="row">
      <div class="well">
      <h3>Plot</h3>
      ${movie.Plot}

      <hr>

      </div>

      </div>
      <a href="http://imdb.com/title/${movie.imdbID}" target ="_blank" class="btn btn-primary">View IMDB</a>
      <a href="index.html" class="btn ">Go Back</>

      `;

      $('#movie').html(output);


    })
    .catch(function(error) {
      console.log(error);
    });


}
