//site.js
//Javascript file for ProjectPetfinder that queries the Petfinder database.

$.noConflict(); //reserve $ namespace
(
  function($) {
    $(document).ready(function() {
      $('#formpetfinder').on('submit', function(event) {

        /*if $('#searchlocation').val() === "") { //if zipcode field is blank
          //$('label').append('<b>Required</b>');
        }
        else {
          //$('label').append('<b>Accepted</b>');
        }*/

        event.preventDefault();
      });
    });
  }
)(jQuery); //pass "jQuery" in for $ instead of assuming

