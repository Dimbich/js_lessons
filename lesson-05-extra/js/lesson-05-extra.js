


 let p = document.createElement('p');
 p.style.borderStyle = "solid";
 document.body.appendChild(p);

function addZero(v) {
 if(v<10||v==0) {
   return "0"+v;
 }
return v; 
}	

function showDate(ddate) {
 let year = ddate.getFullYear();
 let mounth = addZero(+ddate.getMonth()+1);
 let day = addZero(ddate.getDate());
 let hours =  addZero(ddate.getHours());
 let minutes = addZero(ddate.getMinutes());
 let seconds = addZero(ddate.getSeconds());
 
 return hours+":"+minutes+":"+seconds+" "+day+"."+mounth+"."+year;
}

setInterval(function(){
	let curDate = new Date;
	p.textContent=showDate(curDate)}, 1000);
	
function getDayOnRussian(){
  let cureDate = new Date;
  let day=cureDate.getDay();
  let dayOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  document.write(dayOfWeek[day]);
}

getDayOnRussian();

	

