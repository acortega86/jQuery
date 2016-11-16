// JQUERY

$(document).ready(function(){

  $('#button').click(function(){

    $('ul li:nth-child(2), #button').fadeTo('fast', 0.5);

  });

});
