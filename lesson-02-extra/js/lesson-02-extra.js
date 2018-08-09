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