// your code here
function clickCat(){
  $('.thumbnail').click(function(event){
    //must fetch event first
    //should not try to directy fit into image
    var imgSrc = $(event.currentTarget).find('img').attr('src');
    $('.hero img').attr('src', imgSrc)
  });
}

$(function(){
  clickCat();
});
