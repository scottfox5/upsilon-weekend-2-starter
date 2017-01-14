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
        $('#indexSection').append('<div class="index" id='+i+'></div>');
      }
    }
  });
}

function getPerson(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(response){
      //console.log(response[personCounter]);//Test to verify array data is accessible
      appendPerson(response[personCounter]);
    }
  });
}

function appendPerson(person){
  var $personDiv = $('<div class ="person" id='+personCounter+'></div>');//Setting jQuery variable of div to be appended
  $personDiv.append('<p>' + person.githubUserName + '</p>');//Adding property information to append to div
  $personDiv.append('<p>' + person.name + '<p/>');
  $personDiv.append('<p>' + person.shoutout + '<p/>');
  $('#ajax-data').append($personDiv);//Appending properties of person object to DOM
  console.log(personCounter)
};

function nextPerson(){
  getPerson();
  //removePeople();
  personCounter++;
  if (personCounter > 15){//Resetting personCounter for nextButton so clicking on last will bring to first
    personCounter = 0;
  };
}

function previousPerson(){
  getPerson();
  //removePeople();
  personCounter--;
  if (personCounter < 0){//Resetting personCounter for nextButton so clicking on last will bring to first
    personCounter = 15;
  };
}

// function removePeople(){//Trying to remove all people with class of person except the one with id of current personCounter
//   (".person:not(#"+personCounter+")").remove();
// }
