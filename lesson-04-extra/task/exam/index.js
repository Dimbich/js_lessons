
//проверка двух дружственных чисел
function getFriendlyNumbers(start, end) {
  if (checkNumber(start,end)) {
    let arr=[];
    while (start < end) {
      let num1=getOneNumber(start);

      if ((num1 <= end)&&(num1 >= start)) {
        let num2=getOneNumber(num1);

        if ((start==num2) && (start!==num1)) {
         arr.push([start,num1]);
         start=num1;
        }      
      }
     start++
   }
   return arr;
  }
  return false;
}  

//создание дружественного числа
function getOneNumber(start) {
	let i=1;
	let sum=0;

	while (i<start) {
	  if(!(start%i)) {
		   sum+=i;
		 }
	  i++;
    }

  return sum;	

}

//проверка корректности введенных чисел
function checkNumber(x,y) {
  return (typeof(x)=='number' && typeof(y)=='number' && (x*y>0) && y>=x && !~(x+y+"").indexOf("."));  
}

module.exports = {
    firstName: 'Dmitriy',
    secondName: 'Shirmanov',
    task: getFriendlyNumbers
}