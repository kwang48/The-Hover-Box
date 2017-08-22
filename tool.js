$(document).ready(function(){
    var numOfBoxes = prompt("How many boxes? Please enter a number")
    //Creating the boxes:
var content = [];
    for(var i = 0; i < numOfBoxes; i++){ content.push('<img class="box">');}
    $("#container").html(content.join(''));
    //making boxes clickable:
    $(".box").click(function(){
    $(this).toggleClass('activateBox');
    });
  });


