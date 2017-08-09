
$(document).ready(function() {


  $("form#appointment").submit(function(event) {
    event.preventDefault();
    var Name = $("#Name").val();
    var Description = $("#Description").val();
    var date = $("#date").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();

    var showall = Name+" "+Description+" "+date+" "+startTime+" "+endTime;
    $("#output").text(showall);
  });


});
