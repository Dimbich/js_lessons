let str,
    str2,
    pos; 

str = "урок-3-был слишком легким";
str = (str.charAt(0).toUpperCase()+str.substring(1)).replace( /-/g," ");
console.log(str);
pos = str.indexOf("легким")
str2 = str.substring(pos);
str = str.substring(0,pos) + str2.substring(0, str2.length-2) + "о";
alert(str);

let arr = [20, 33, 1, 'Человек', 2, 3];

function sqrtSumArr(arr, handleItemArr) {
  let sum = 0;
  for(let i = 0;i < arr.length; i++) {
    sum+=handleItemArr(arr[i]);
  }  
  return Math.round(Math.sqrt(sum) * 100)/100;
}

function handleItemArr(num){
  return isNaN(num) ? 0 : num**3;
}

console.log("квадратный корень из суммы кубов элементов массива равен "
            + sqrtSumArr(arr,handleItemArr));


function handleStr(str) {
  if (typeof(str)==='string') {
    let newStr = str.replace(/^\s+|\s+$/g,"");
    return newStr.length > 50 ? newStr.substring(0, 49) + "..." : newStr;          
  }
}  

