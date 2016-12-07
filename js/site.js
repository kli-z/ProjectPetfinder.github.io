//site.js
//Javascript file for ProjectPetfinder that queries the Petfinder database.

$.noConflict(); //reserve $ namespace

(
  function($) {
    $(document).ready (function() {
      $('#search').on('submit', function(event) {
        if (#searchlocation.value === "") { //if zipcode field is blank
          alert("Please enter a zipcode.");
          return -1; //Exit this function -- we shouldn't submit like this
        }
        event.preventDefault();
      });
    });
  }
)(jQuery); //pass "jQuery" in for $ instead of assuming

