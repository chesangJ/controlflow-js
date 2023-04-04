function array(){
    let word=["beautiful","world","pets","angle","joy"]
    for(i=0;i<word.length;i++){
     console.log(word[i])
    }
       
    
}
array();

// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function numbers(){
    let digits=[2,4,6,8,10]
    function multiply(digits){
        console.log(digits*2)
    }
digits.forEach(multiply)
    
}
numbers();


// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function array2(num1){
    let emptyArray=[]
    for(let i=0;i<num1.length;i++){

        if(i<4){
           emptyArray.push(num1[i]*8);
        }
        else if(i>=num1.length-2){
            emptyArray.push (num1[i]+5)

        }
      
        }
        console.log(emptyArray);
       
    }
let digits=[2,4,5,6,8,10]
console.log(array2(digits));




// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
function arr3(){
    
    let i=0

    while(i<=arrNum.length){

        if(i===5){
            break;
        }
        console.log(arrNum[i])
        i++
    }
}
let arrNum=[1,2,3,4,5,6,7,8,9]
arr3(arrNum);


function array3(){
    let fruits=["apple","plum","banana","strawberries","kiwi"]
    for(let x=0;x<fruits.length;x++){
        if(x===2){
            continue
        }
        console.log(fruits[x])
    }

}
array3()





