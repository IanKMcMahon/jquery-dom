/* ## **Part Two - Movies App!**

Build an application that uses jQuery to do the following:

- Contains a form with two inputs for a title and rating along with a button to submit the form.
- When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
- When the button to remove is clicked, remove each title and rating from the DOM.
*/

let currentId = 0;

let movieList = [];


$(function(){
    
    $("#rating-form").on("submit", function(evt){
        evt.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();

        let movieData = {title, rating, currentID};
        const HTMLtoAppend = createMovieDataHTML(moviedata);

        currentID++
        movieList.push(movieData);

    $("#movie-form-body").append(HTMLtoAppend);
    $("#rating-form").trigger("reset");
    })       
    
});

    $(".btn-danger").on("click", function(evt) {
        let indexToRemoveAt = movieList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
    })

    movieList.splice(indexToRemoveAt, 1)

    $(evt.target)
      .closest("tr")
      .remove();


      ///FURTHER STUDY///
      
      // Ensure that the rating of a movie can only be between 0 and 10.
      
      // Ensure that a title has at least 2 characters in it.
      
       // Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.
       
       /////////////////

  $(".fas").on("click", function(evt) {
    
    let direction = $(evt.target).hasClass("fa-sort-down") ? "down" : "up";
    let keyToSortBy = $(evt.target).attr("id");
    let sortedMovies = sortBy(moviesList, keyToSortBy, direction);
  
    $("#movie-table-body").empty();

    for (let movie of sortedMovies) {
      const HTMLtoAppend = createMovieDataHTML(movie);
      $("#movie-table-body").append(HTMLtoAppend);
    }

   
    $(evt.target).toggleClass("fa-sort-down");
    $(evt.target).toggleClass("fa-sort-up");
  });


function sortBy(array, keyToSortBy, direction) {
    return array.sort(function(a, b) {
      if (keyToSortBy === "rating") {
        a[keyToSortBy] = +a[keyToSortBy];
        b[keyToSortBy] = +b[keyToSortBy];
      }
      if (a[keyToSortBy] > b[keyToSortBy]) {
        return direction === "up" ? 1 : -1;
      } else if (b[keyToSortBy] > a[keyToSortBy]) {
        return direction === "up" ? -1 : 1;
      }
      return 0;
    });
  }

      ///////////////////

function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.currentId}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }
  
