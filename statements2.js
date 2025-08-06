//jumping statements

let a = [1,2,3,4,5];
for(let a1 of a ){
if (a1==3){
    break;
    
}
console.log("jump statement :" + a1);
}
for ( let a2 of a){
    if (a2==3){
     continue;
    }
   console.log("jump statement :" + a2);
}

for (let i= 0;i <5; i++  ){
    if (i==1)
    continue;    
    console.log("hi");
    
}

//switch statement
let workout_day= 6;

switch(workout_day){
    case 1:
        console.log("chest and triceps");
        break;
    case 2:
         console.log("Lat and biceps");
         break;
    case 3:
         console.log("shoulder and abs");
         break; 
    case 4:
        console("Leg");
         break;
    case 4:
         console.log("chest and triceps");
         break;
    case 5:
          console.log("Lat and Biceps");
          break;
          case 6:
               console.log("shoulder and abs")
               break;
    
    default:
         console.log("Break");
}


