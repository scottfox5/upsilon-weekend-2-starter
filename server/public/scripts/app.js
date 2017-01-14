//Client-side code
var personCounter = 0;

$(function(){

  appendIndexBar();
  $('#nextButton').click(nextPerson);//When button is clicked, getPeople is run and all info is collected and appended to DOM
  $('#previousButton').click(previousPerson);//

});

function appendIndexBar(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(response){
      for (var i = 0; i < response.length; i++){
        $('#indexSection').append('<div class="index" id=indexNumber'+i+'></div>');
      }
    }
  });
}

function getPerson(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(response){
      appendPerson(response[personCounter]);//Request and receive data for student at index of value of personCounter
    }
  });
}

function appendPerson(person){
  var $personDiv = $('<div class ="person" id=personNumber'+personCounter+'></div>');//Setting jQuery variable of div to be appended
  $personDiv.append('<p>' + person.githubUserName + '</p>');//Adding property information to append to div
  $personDiv.append('<p>' + person.name + '<p/>');
  $personDiv.append('<p>' + person.shoutout + '<p/>');
  //$('#ajax-data').append($personDiv);//Appending DOM with properties of current person object.
  $($personDiv).fadeIn(200, function() { $(this).appendTo('#ajax-data'); });//Append DOM with fade in
}

function nextPerson(){
  getPerson();
  personCounter++;
  if (personCounter > 15){//Resetting personCounter for nextButton so clicking on last will bring to first
    personCounter = 0;
  };
  removePeople();
  indexPerson();
}

function previousPerson(){
  getPerson();
  personCounter--;
  if (personCounter < 0){//Resetting personCounter for nextButton so clicking on last will bring to first
    personCounter = 15;
  };
  removePeople();
  indexPerson();
}

function removePeople(){//Remove all people with class of person except the one with id of current personCounter
  //$(".person:not(#personNumber"+personCounter+")").remove();//Removes without fade out
  $(".person:not(#personNumber"+personCounter+")").fadeOut(200, function() { $(this).remove(); })//Removes with fade out
}

function indexPerson(){
  $('.index').css('background-color', 'black')
  $('#indexNumber'+personCounter+'').css('background-color', 'goldenrod');
}
