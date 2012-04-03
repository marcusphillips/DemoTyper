$(function(){
  var $input = $('.input');
  var $output = $('.output');
  $input.keypress(function(event){
    $output.append($('<span>'+'a'+'</span>'));
    console.log(event);
  }).focus();
});
