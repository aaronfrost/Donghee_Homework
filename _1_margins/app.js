/**
 * Created by frost on 6/27/14.
 */



  var firstButton = document.querySelector('.icon:first-child');
  console.log(firstButton);

  firstButton.addEventListener('click',function(){
    var block1 = document.querySelector('.block1');
    block1.classList.add('hidden');
  });
