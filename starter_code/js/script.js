// YOUR CODE GOES HERE
var clientID = "3565fe59fc166cb7f5a0ab9b7c982cc8";

$(document).ready(function() {
  $("#reset-btn").click(function() {
                    $("#search-results").empty();
  });
    // your code here
    $("#search-btn").click(function() {
        var cool = $("#search-UserInput").val();
        searchFlickr(clientID, cool, 10, function(photos) {
            console.log(photos.photo[0].url_m);


            var i;
            for (i = 0; i < photos.photo.length; i++) {
                $("#search-results").append("<img src= " + photos.photo[i].url_m + ">");
              

             
            };
        });
    });
});
