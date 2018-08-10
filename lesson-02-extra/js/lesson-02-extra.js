let week=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];

function getDayOfWeek(arr){
  arr.forEach(function(element, index) {
                let d = new Date();
                switch (index) {
                  case d.getDay():
                    document.write("<p><em>"+element+"</em></p>");
                    break;
                  case 0:
                  case 6:
                    document.write("<p><strong>"+element+"</strong></p>");
                    break;  
                  default:
                    document.write("<p>"+element+"</p>");
                    break;
                }                
              }
  );
}

getDayOfWeek(week);

//---Второе дополнительное задание---//

let arr = [];
let countItem=7;
let i=1;

function checkNumber(x) {
  if (x.length>1) {
   x++;	  
   if (typeof(x) == 'number') {
     return true;
   };
  }
  return false;  
}
	
while (i <= countItem) {
  let num = prompt("Введите "+i+" многозначное число","" );
  checkNumber(num)?arr.push(num):alert("Число задано не верно!");  
  i++;  
}	

function getItemArr(arr){
  arr.forEach(function(element, index) {	  
                switch (element.substring(0,1)) {
                  case '3':
                  case '7':
                    document.write("<p><strong>"+element+"</strong></p>");
                    break;
                }                
              });
}

getItemArr(arr);
