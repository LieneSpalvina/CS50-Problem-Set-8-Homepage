
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});


$(document).ready(function(){
  $(".checkbox").click(function(){
    $(".checkbox").remove() 
      
  });    
});

$('.checkbox').click(function() {
  $('.button_container').toggle('slow', function() {      
  });    
});

$(document).ready(function() {
  $("#typewriter").typewriter({
      prefix : "I am ",
      text : ["smart", "strong", "blessed", "unique", "powerfull"],
      typeDelay : 100,
      waitingTime : 1500,
      blinkSpeed : 800      
  });
});
