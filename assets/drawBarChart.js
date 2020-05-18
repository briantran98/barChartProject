let tempInputData = "";
$(document).ready(function(){
  $("#getStarted").click(function(){
    $(".start").hide();
    $("#barGraph").show("2");
  });

  $("#barWidth").keypress(function (event) {
    let keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      $(".bar").css("max-width", (document.getElementById("barWidth").value + "%"))
      $("#bar1").text(document.getElementById("barWidth").value)
    }
  });

  $("input").focus(function() {
    $(this).val("");
    $(this).css("color", "black");
    tempInputData = this.value;
  });
  $("input").blur(function() {
    if (this.value == "") {
      $(this).css("color", "gray")
      $(this).val(tempInputData)
    }
  });
});


function drawBarChart(data, options, element) {
  let array = [];
  array = data;
  let object = {width:0, height:0};
  let string = element;
};