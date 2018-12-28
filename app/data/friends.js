
    // Chosen CSS
    var config = {
        ".chosen-select": {},
        ".chosen-select-deselect": {
          allow_single_deselect: true
        },
        ".chosen-select-no-single": {
          disable_search_threshold: 10
        },
        ".chosen-select-no-results": {
          no_results_text: "Oops, nothing found!"
        },
        ".chosen-select-width": {
          width: "95%"
        }
      };
  
      for (var selector in config) {
        $(selector).chosen(config[selector]);
      }
  
      // Capture the form inputs
      $("#submit").on("click", function(event) {
        event.preventDefault();
  
        // Form validation
        function validateForm() {
          var isValid = true;
          $(".form-control").each(function() {
            if ($(this).val() === "") {
              isValid = false;
            }
          });
  
          $(".chosen-select").each(function() {
  
            if ($(this).val() === "") {
              isValid = false;
            }
          });
          return isValid;
        }
  
        // If all required fields are filled
        if (validateForm()) {
          // Create an object for the user"s data
          var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
              $("#sel1").val(),
              $("#sel2").val(),
              $("#sel3").val(),
              $("#sel4").val(),
              $("#sel5").val(),
              $("#sel6").val(),
              $("#sel7").val(),
              $("#sel8").val(),
              $("#sel9").val(),
              $("#sel10").val()
            ]
          };
  
          // AJAX post the data to the friends API.
          $.post("/api/friends", userData, function(data) {
  
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);
  
            // Show the modal with the best match
            $("#results-modal").modal("toggle");
  
          });
        } else {
          alert("Please fill out all fields before submitting!");
        }
      });

      
