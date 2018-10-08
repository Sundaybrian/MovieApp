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
    })
    .catch(function (error) {
      console.log(error);
    });


  }

  $('#movies').html(response.data.Title);


});
