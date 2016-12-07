//site.js
//Javascript file for ProjectPetfinder that queries the Petfinder database.

alert("Compiled");

$.noConflict(); //reserve $ namespace
(
  function($) {
    $(document).ready(function() {

      var APIkey = "dbc84ba782ca38e121f2d7c21d0b2787";

      $("#formpetfinder").on("submit", function(event) {
        event.preventDefault(); //prevents submit from reloading page and dumping stuff into the URL
        var specifics = [$('#searchlocation').val(), $("#searchanimal").val(), $("#searchbreed").val()];
        queryURL = "http://api.petfinder.com/my.method?key=" + APIkey;
        response = function() {
          $.ajax ({
            type: "GET", url: queryURL
          
        }
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
