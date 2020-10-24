$(document).ready(function() {
  
  $('.acc-dropdown').click( function() {
    $(this).parent().toggleClass('active');
  });

  $('.test-list').slick({
      dots: true,
      arrows: false,
      autoplay: true
  });

});
