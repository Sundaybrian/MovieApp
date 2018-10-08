$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    console.log(searchText + "initial");

    getMovies(searchText);

    e.preventDefault();


  });

  function getMovies(searchText){
    console.log(searchText);
  }


});
