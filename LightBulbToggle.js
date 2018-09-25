// your code here
$('.lightbulb').click(function(event){
  //this.remove();
  $('.lightbulb').removeClass('bulb-on');
  $(event.currentTarget).addClass('bulb-on');
  //this.addClass('bulb-on');
});
