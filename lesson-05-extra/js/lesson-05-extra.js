//----начало вывода времени
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

//----конец вывода времени

//----начало вывода времени
function writeDayOnRussian(){
  let cureDate = new Date;
  let day=cureDate.getDay();
  let dayOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  document.write(dayOfWeek[day]);
}

writeDayOnRussian();
//----конец вывода времени

//----начало расчета количества дней между датами
let data1 = document.querySelector('.date1');
let data2 = document.querySelector('.date2');
let dataOut = document.querySelector('.dateOut');
let result_btn = document.querySelector('.getDate');

result_btn.addEventListener('click',()=>{
  let data1_value = new Date(data1.value);
  data1_value=getRuDate(data1_value);
  let data2_value = new Date(data2.value);
  data2_value=getRuDate(data2_value);
  dataOut.value =(data2_value-data1_value)/60/60/24/1000; 	
}
);

function getRuDate(dd){
let day=dd.getDate();
let mounth=dd.getMonth();
let year = dd.getFullYear();
let newDate= new Date(year, day, mounth);
return newDate;
}	
	

