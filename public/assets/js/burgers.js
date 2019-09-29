

$('.create-form').on('submit', function(e) {

    // Make sure to preventDefault on a submit event.
    e.preventDefault();

    let newBurger = {

        name: $('#burger').val().trim()

    };

    $.ajax('/burger', {

        type:'POST',
        data: newBurger

    }).done(function(){

        location.reload();

    })


});

$(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");

    var devouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/burger/" + id, {
      type: "PUT",
      data: devouredState
    }).done(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });