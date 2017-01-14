//Client-side code
$(function(){

  $('button').click(getPeople);//When button is clicked, getPeeps is run and all info is collected and appended to DOM

});

function appendDom(person){
  var $personDiv = $('<div class ="person"></div>');//Setting jQuery variable of div to be appended
  $personDiv.append('<p>' + person.githubUserName + '</p>');//Adding property information to append to div
  $personDiv.append('<p>' + person.name + '<p/>');
  $personDiv.append('<p>' + person.shoutout + '<p/>');
  $('#ajax-data').append($personDiv);//Appending properties of person object to DOM
};

function getPeople(){

  $.ajax({
    type: "GET",
    url: "/data",
    success: function(response){
      console.log(response);//Verifying response is returning data

      response.forEach(function(person){//Looping through each person object and using property values to append DOM
      appendDom(person);
      });
    }
  });

}
