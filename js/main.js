// JQUERY
$(document).ready(function(){
        $('#add').click(function(){
    var toAdd = $('input[name=ListItem]').val();
      $('ol').append('<li>' + toAdd + '</li>');
      });

      $(document).on('click','li', function(){
        $(this).fadeOut('slow');
      });

      $('input').focus(function() {
        $(this).val('');
      });
    });
