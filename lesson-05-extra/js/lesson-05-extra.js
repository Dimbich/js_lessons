setTimeout(alert(1000),1000);

function showDate(ddate) {

  function addZero(v) {
  if(v<10||v==0) {
    return "0"+v;
  }
 return v; 
 }	 	
 
 let hours =  addZero(ddate.getHours()),
 	 minutes = addZero(ddate.getMinutes()),
 	 seconds = addZero(ddate.getSeconds()),
 
 return hours+":"+minutes+":"+seconds+";
}

setInterval (function(){
	let curDate = new Date;
	document.write(showDate(curDate))}, 1000);

//----конец вывода времени

//----начало вывода времени
function writeDayOnRussian(){
  let cureDate = new Date;
  let day=cureDate.getDay();
  let dayOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  document.write(dayOfWeek[day]);
}

	
