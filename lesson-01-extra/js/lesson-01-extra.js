var xNumber = 33721;

function getAnswer(num) {
  var sum=1;
  num=num.toString();
  
  for (var i = 0; i <  num.length; i++) {
    sum *=  num.charAt(i);
  }

  return sum;
}

var strAnswer=getAnswer(xNumber)**3;
alert(strAnswer.toString().substring(0, 2));
