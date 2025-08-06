//array 
//duplicates , unique , second largest, pattern, sorting,

//string
//palindrome , anagram
 
//numbers 
//prime , fibonacci, factorial

// both numbers and string
//reverse , frequency 


//duplicate
let num = [1,2,3,2,4,5,1];
let obj= {};
for(let a of num){
  if (!obj[a]){
    obj[a] = 1;
  }else{
    obj[a]++;
  }
}
 console.log("The duplicate :", obj);



 for( let a1 in obj){
    if(obj[a1] > 1){
        console.log("The duplicate Num :" ,a1)
    }
 }

  //unique
 let num1= [ 1,2,3,4,5,1,2];
 let obj1={};

 for(let b of num1){
    if (!obj1[b]){
        obj1[b]=1;
    }else obj1[b]++;
 }
console.log("The unique :",obj1)
 for( b1 in obj1){
     if (obj1[b1] ==1){
        console.log("The unique num :",b1)
     }
 }

 //second largest
let numbers = [1,2,3,4,5,7,6];
 let largest = 0;
 let secondlargest = 0;
 for (i=0;i< numbers.length;i++){
    if (numbers[i]>largest){
        secondlargest =largest;
        largest=numbers[i];
    }
 }
 console.log("Second largest :"  + secondlargest);
 console.log("Largest :"+ largest);