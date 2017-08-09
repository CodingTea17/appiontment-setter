
$(document).ready(function() {


  $("form#appointment").submit(function(event) {
    event.preventDefault();
    var Name = $("#Name").val();
    var Description = $("#Description").val();
    var date = $("#date").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();

    var showall = "Mr/Ms." + Name + "," + " Your appointment for " + Description + " is on " + date + " at " + startTime + " and will go until " + endTime;

    $("#output").text(showall);

    $(".appointment-confirm").show();

    $(".appointment-form").hide();
  });

  $("button#togglebutt").click(function() {
    $(".appointment-form").toggle();
  })

});
