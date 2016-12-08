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
        $('#content').empty();
        var specifics = [$("#searchlocation").val(), $("#searchanimal").val(), $("#searchbreed").val()];
        var count = 5;
        var queryURL = "https://api.petfinder.com/pet.find?key=" + APIkey +
          "&location=" + specifics[0] + "&animal=" + specifics[1] + "&breed=" + specifics[2] +
          "&count=" + count + "&output=full&format=json";

        $.ajax({url: queryURL,dataType: "jsonp"}).done(function(data) {
          var len = data.petfinder.pets.pet.length; //this is NOT the same as $count; might ask for 25 pets and only get 2

          for(var i=0;i<len;i++) {
            $("#content").append("<h3>Pet #" + (i+1) + "</h3>"); //human readable numbers are not zero-based
            var tmpContactPhone = data.petfinder.pets.pet[i].contact.phone.$t;
            var tmpContactState = data.petfinder.pets.pet[i].contact.state.$t;
            var tmpContactEmail = data.petfinder.pets.pet[i].contact.email.$t;
            var tmpContactZip = data.petfinder.pets.pet[i].contact.zip.$t;
            var tmpContactCity = data.petfinder.pets.pet[i].contact.city.$t;
            var tmpStatus = data.petfinder.pets.pet[i].status.$t;if(tmpStatus === "A"){tmpStatus = "Active";}
            var tmpName = data.petfinder.pets.pet[i].name.$t;
            var tmpSex = data.petfinder.pets.pet[i].sex.$t;
            var tmpDesc = data.petfinder.pets.pet[i].description.$t;
            var tmpID = data.petfinder.pets.pet[i].id.$t;
            var tmpShelterID = data.petfinder.pets.pet[i].shelterPetId.$t;
            var tmpAge = data.petfinder.pets.pet[i].age.$t;

            //Let's give the user the largest image we can find, if we're only going to give them one.
            var tmpPhotos = [];
            var biggest = [0,""]; //number is the largest area, string is the url to that image

            for(var j=0; j<data.petfinder.pets.pet[i].media.photos.photo.length; j++) { //j<10
              tmpPhotos.push(data.petfinder.pets.pet[i].media.photos.photo[j].$t); //get the jth image into tmpPhotos
              var tmpImage = new Image();tmpImage.src = tmpPhotos[j]; //make an image object of which we can query height and width
              var tmpArea = (tmpImage.height * tmpImage.width); //calculate area
              if(tmpArea > biggest[0]) { //if the area is larger than the previously largest area
                biggest[1]=tmpPhotos[j]; //update biggest[1] with the url of the new largest image
              }
              console.log("\n" + tmpPhotos[j] + "\nbiggest[0] at step " + "[" + i + "]" + j + " is " + biggest[0] + "\nbiggest[1]: " + biggest[1]);
            }

            $("#content").append(
              "<div class=\"petresult\">" +
                "<h4>Pet Info</h4>" +
                "<ul id=\"petInfo\">" +
                  "<li><img src=\"" + biggest[1] + "\" /></li>" +
                  "<li><h5>Name:</h5> " + tmpName + "</li>" +
                  "<li><h5>Age:</h5> " + tmpAge + "</li>" +
                  "<li><h5>Sex:</h5> " + tmpSex + "</li>" +
                  "<li><h5>Status:</h5> " + tmpStatus + "</li>" +
                  "<li><h5>ID:</h5> <a href=\"https://www.petfinder.com/petdetail/" + tmpID + "\">" + tmpID + "</a></li>" +
                  "<li><h5>Shelter ID:</h5> " + tmpShelterID + "</li>" +
                  "<li><h5>Description:</h5> " + tmpDesc + "</li>" +
                "</ul>" +
                "<h4>Contact Info</h4>" +
                "<ul id=\"petContactInfo\">" +
                  "<li><h5>Location:</h5> " + tmpContactCity + ", " + tmpContactState + ", " + tmpContactZip + "</li>" +
                  "<li><h5>Email:</h5> " + tmpContactEmail + "</li>" +
                  "<li><h5>Phone:</h5> " + tmpContactPhone + "</li>" +
                "</ul>" +
              "</div>"
            );
          }
        });
      });
    });
  }
)(jQuery); //pass "jQuery" in for $ instead of assuming





