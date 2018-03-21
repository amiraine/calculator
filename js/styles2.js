
var add = function(number1, number2) {
  return number1 + number2;
};
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    $("#sum").text(add(number1, number2));
    // alert(add(number1, number2));
});
});
