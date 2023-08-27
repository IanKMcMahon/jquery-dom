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







///

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
  
