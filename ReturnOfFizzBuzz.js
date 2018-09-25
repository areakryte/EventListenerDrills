// your code here
$('#number-chooser').submit(function(event){
  event.preventDefault();
  var inputNumber = $(event.currentTarget).find('#number-choice');
  //console.log(inputNumber.val());

  for(var i = 1; i <= inputNumber.val(); i++)
    {
      var newElement = '';
      if(i % 15 === 0)
        {
          //console.log('fizzbuzz');
          newElement = newElement + '<div class="fizz-buzz-item fizzbuzz"><span>';
          newElement = newElement + 'fizzbuzz';
        }
      else if(i % 5 === 0)
        {
          //console.log('fizz');
          newElement = newElement + '<div class="fizz-buzz-item buzz"><span>';
          newElement = newElement + 'buzz';
        }
      else if(i % 3 === 0)
        {
          //console.log('buzz');
          newElement = newElement + '<div class="fizz-buzz-item fizz"><span>';
          newElement = newElement + 'fizz';
        }
      else
        {
          newElement = newElement + '<div class="fizz-buzz-item"><span>';
          //console.log(inputNumber.val());
          newElement = newElement + i;
        }
      newElement = newElement + '</span></div>';
      $(".js-results").append(newElement);
    }
});
