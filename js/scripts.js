// for (var index = 0; index <= 3; index += 1) {
//   alert(index);
// }

// var languages = ['HTML', 'CSS', 'Javascript'];
// for (var index = 0; index < languages.length; index += 1) {
//   console.log(index)
//   alert ('I love ' + languages[index] + '!');
// }

// var total = 0;
// var summands = [1, 7, 12, 22, 15];
// for (var index = 0; index < summands.length; index += 1) {
//   total += summands[index];
//   console.log(total)
// }

// alert(total); 
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var input1 = parseInt($("#input-1").val());
    var input2 = parseInt($("#input-2").val());
    var numbers = [];

    for (index = 0; index < input1; index += input2) {
      numbers.push(index);
      console.log(index);
    }
    $(".output").append(numbers);
  });
});
