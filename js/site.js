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

        $.ajax({url: queryURL,dataType: 'jsonp'}).done(function(data) {
          var len = data.petfinder.pets.pet.length; //this is NOT the same as $count; might ask for 25 pets and only get 2

          for(var i=0;i<len;i++) {
            $("#content").append("<h3>Pet #" + (i+1) + "</h3>"); //human readable numbers are not zero-based
            var tmpContactPhone = data.petfinder.pets.pet[i].contact.phone.$t;
            var tmpContactState = data.petfinder.pets.pet[i].contact.state.$t;
            var tmpContactEmail = data.petfinder.pets.pet[i].contact.email.$t;
            var tmpContactZip = data.petfinder.pets.pet[i].contact.zip.$t;
            var tmpContactCity = data.petfinder.pets.pet[i].contact.city.$t;
            var tmpStatus = data.petfinder.pets.pet[i].status.$t;if(tmpStatus === 'A'){tmpStatus = "Active";}
            var tmpName = data.petfinder.pets.pet[i].name.$t;
            var tmpSex = data.petfinder.pets.pet[i].sex.$t;
            var tmpDesc = data.petfinder.pets.pet[i].description.$t;
            var tmpID = data.petfinder.pets.pet[i].id.$t;
            var tmpShelterID = data.petfinder.pets.pet[i].shelterPetId.$t;
            var tmpAge = data.petfinder.pets.pet[i].age.$t;

            $("#content").append(
              "<h4>Pet Info</h4>" +
              "<ul id=\"petInfo\">" +
                "<li>Name: " + tmpName + "</li>" +
                "<li>Age: " + tmpAge + "</li>" +
                "<li>Sex: " + tmpSex + "</li>" +
                "<li>Status: " + tmpStatus + "</li>" +
                "<li>ID: " + tmpID + "</li>" +
                "<li>Shelter ID: " + tmpShelterID + "</li>" +
                "<li>Desc: " + tmpDesc + "</li>" +
              "</ul>"
              "<h4>Contact Info</h4>" +
              "<ul id=\"petContactInfo\">" +
                "<li>Location: " + tmpContactCity + ", " + tmpContactState + ", " + tmpContactZip + "</li>" +
                "<li>Email: " + tmpContactEmail + "</li>" +
                "<li>Phone: " + tmpContactPhone + "</li>" +
              "</ul>"
            );
          }
        });
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
