$(function () {

     $("#addburgerbtn").on("click", function (event) 
    {

        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

   $("#devourit").on("click",function(event)
   {
       //add this prevent default otherwise both PUT and POST get executed
       event.preventDefault();
       var id=$(this).data("id");
       var newstate=$(this).data(true);
       var newdevourstate={
        devoured:newstate
       };

       $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newdevourstate
      }).then(
        function() {
          console.log("changed devour to", newdevourstate);
          // Reload the page to get the updated list
          location.reload();
        }
      );
   }),
   $("#deleteBurger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("trashed the burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});


