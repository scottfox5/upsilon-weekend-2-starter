//Client-side code
var personCounter = 0;

$(function(){

  $('#nextButton').click(nextPerson);//When button is clicked, getPeople is run and all info is collected and appended to DOM
  $('#previousButton').click(previousPerson);//

});

function appendDom(person){
  var $personDiv = $('<div class ="person" id='+personCounter+'></div>');//Setting jQuery variable of div to be appended
  $personDiv.append('<p>' + person.githubUserName + '</p>');//Adding property information to append to div
  $personDiv.append('<p>' + person.name + '<p/>');
  $personDiv.append('<p>' + person.shoutout + '<p/>');
  $('#ajax-data').append($personDiv);//Appending properties of person object to DOM
};

function nextPerson(){
  getPerson();
  //removePeople();
  personCounter++;
  // if (personCounter = 17){//Resetting personCounter for nextButton so clicking on last will bring to first
  //   personCounter = 0;
  // }
}

function previousPerson(){
  getPerson();
  //removePeople();
  personCounter--;
  // if (personCounter = -1){//Resetting personCounter for previousButton so clicking on first will bring to last
  //   personCounter = 16;
  // }
}

// function removePeople(){//Trying to remove all people with class of person except the one with id of current personCounter
//   (".person:not(#"+personCounter+")").remove();
// }

function getPerson(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(response){
      console.log(response[personCounter]);
      appendDom(response[personCounter]);
    }
  });
}
