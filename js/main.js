$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    console.log(searchText + "initial");

    getMovies(searchText);

    e.preventDefault();


  });

  function getMovies(searchText){
    console.log(searchText);
    axios.get('http://www.omdbapi.com/?apikey=c729fcf0&s=' +searchText)
    .then(function (response) {
      console.log(response);
      let movies = response.data.Search;
      let output='';

      $.each(movies,(index,movie)=>{
        output+=`
        <div class="col-md-3">
        <div class="well text-center">
        <img src="${movie.Poster}">
        <h5>${movie.Title}</h5>

        <a onClick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">View Details</a>

        </div>

        </div>
        `;
      });

      $('#movies').html(output);

    })
    .catch(function (error) {
      console.log(error);
    });


  }




});
