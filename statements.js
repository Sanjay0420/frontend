// statements
// conditional iterative switch jump
// if else statement
if(4!=4){
    console.log("the condition is True");
}else{
     console.log("the condition is False");
}

// ladder if, nested if

let mark = 76;
if ( mark > 90){
     console.log("A Grade");
}else if(mark >80) {
  console.log("B Grade");
}else if (mark > 70) {
     console.log("C Grade");
}else{
     console.log("Failed")
}
 
// nested if

let age =45;
if (age > 50){
    if (age >35){
         console.log("First Class")
    }else{
         console.log("Waiting list")
    }
}



// iterative
// for , while , do-while
for ( let y=0 ; y <=20 ; y+=2){
     console.log("The result is : "+ y);
}


let arr= [1,2,3,4,5           ]
for ( let i=0 ; i<=20 ; i++){
     console.log("The result is : "+ arr[i]);
}

//while loop
let i=0 ;
while( i< arr.length){
        console.log("the length : "+ arr[i]);
        i++;
}
i=0;
do{
     console.log("Do While : " + arr[i]);
     i++;
}while( i< arr.length);