//site.js
//Javascript file for ProjectPetfinder that queries the Petfinder database.

console.log("Compiled");

$.noConflict(); //reserve $ namespace
(
  function($) {
    $(document).ready(function() {

      var APIkey = "dbc84ba782ca38e121f2d7c21d0b2787";

      $("#formpetfinder").on("submit", function(event) {
        event.preventDefault(); //prevents submit from reloading page and dumping stuff into the URL
        var specifics = [$('#searchlocation').val(), $("#searchanimal").val(), $("#searchbreed").val()];
        //note the single quotes below for the get request
        queryURL = "https://api.petfinder.com/pet.find?key=" + APIkey +
          "&location=" + specifics[0] + "&animal=" + specifics[1] + "&breed=" + specifics[2] +
          "&count=5&output=full&format=json";

        console.log("Form submitted.\nqueryURL: " + queryURL + "\n\nSending query now.");

        $.ajax({url: queryURL,dataType: 'jsonp'}).done(function(data) {
          console.log(data.petfinder.pets.pet[0]);
        });
        console.log("Query sent.");
      });
    });
  }
)(jQuery); //pass "jQuery" in for $ instead of assuming








/* Commented-out */

/*if $('#searchlocation').val() === "") { //if zipcode field is blank
          //$('label').append('<b>Required</b>');
        }
        else {
          //$('label').append('<b>Accepted</b>');
        }*/
