let arr=[];

function getFriendlyNumbers(start) {
	let i=1;
	let sum=0;
	while (i<start) {
	  if(!(start%i)) {
		 sum+=i;
		 }
	  i++;
	}
	arr.push(sum);
    return sum;	
}

console.log(getFriendlyNumbers(220));