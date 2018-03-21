$(document).ready(); {
  $("#add").submit(function(event){
    var number1 = $("input#add1").val();
    var number2 = $("input#add2").val();
    var add = function(number1, number2) {
      return number1 + number2;
      console.log(number1);

    };

  // var multiply = function(number1, number2) {
  //   return number1 * number2;
  // }
  //
  // var divide = function(number1, number2) {
  //   return number1 / number2;
  // }
  //
  // var subtract = function(number1, number2) {
  //   return number1 - number2;
  // }
  $("#addB").click(function() {
    var result = (add(number1, number2));
    alert(result);


debugger;

  });
// var saySomething = function(whatToSay) {
//   alert(whatToSay);
// };

// event.preventDefault();
});
};
