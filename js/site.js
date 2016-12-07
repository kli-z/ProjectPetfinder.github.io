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
        var count = 5;
        queryURL = "https://api.petfinder.com/pet.find?key=" + APIkey +
          "&location=" + specifics[0] + "&animal=" + specifics[1] + "&breed=" + specifics[2] +
          "&count=" + count + "&output=full&format=json";

        console.log("Form submitted.");

        $.ajax({url: queryURL,dataType: 'jsonp'}).done(function(data) {
          var len = data.petfinder.pets.pet.length; //this is NOT the same as $count; might ask for 25 pets and only get 2

          for(var i=0;i<len;i++) {
            console.log("\n\n\nPet #" + (i+1)); //human readable numbers are not zero-based
            var tmpStatus = data.petfinder.pets.pet[i].status.$t;if(tmpStatus === 'A'){tmpStatus = "Active";}console.log(tmpStatus);
            var tmpContactPhone = data.petfinder.pets.pet[i].contact.phone.$t;console.log(tmpContactPhone);
            var tmpContactState = data.petfinder.pets.pet[i].contact.state.$t;console.log(tmpContactState);
            var tmpContactEmail = data.petfinder.pets.pet[i].contact.email.$t;console.log(tmpContactEmail);
            var tmpName = data.petfinder.pets.pet[i].name.$t;console.log(tmpName);
            var tmpSex = data.petfinder.pets.pet[i].sex.$t;console.log(tmpSex);
            var tmpDesc = data.petfinder.pets.pet[i].description.$t;console.log(tmpDesc);
            var tmpID = data.petfinder.pets.pet[i].id.$t;console.log(tmpID);
            var tmpShelterID = data.petfinder.pets.pet[i].shelterPetId.$t;console.log(tmpShelterID);

          }
          
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
