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
        let title = $("#title");
        let rating = $("#rating");

        let movieData = {title, rating, currentID};
        const HTMLtoAppend = createMovieDataHTML(moviedata);

        currentID++
        movieList.push(movieData);

    $("#movie-table-body").append(HTMLtoAppend);
    $("#new-movie-form").trigger("reset");
    })       
    
})


