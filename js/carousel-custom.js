// this is the right coding
$(document).ready(function() {

  $("#main-page").owlCarousel({
    jsonPath : 'json/owl-carousel.data.json',
    jsonSuccess : openFile
  });

  function openFile(data){
    var content = "";
    for(var i in data["items"]){

       var img = data["items"][i].img;

       content += "<img src=\"" +img+ "\" >"
    }
    $("#main-page").html(content);
  }

});
