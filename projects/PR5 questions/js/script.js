
let printArray = document.getElementById('printArray');
let joinMethod = document.getElementById('joinMethod');
let shiftMethod = document.getElementById('shiftMethod');
let shiftMethod2 = document.getElementById('shiftMethod2');
let shiftMethod3 = document.getElementById('shiftMethod3');
let pushMethod = document.getElementById('pushMethod');

// Question.. 1 Write a simple JavaScript program to print expected Output using following array.
let myColor = ["Red","Green","white","black"];
let ele = 1;
printArray.innerHTML += ("Array is :")
// 1
myColor.forEach((ele) => 
    printArray.innerHTML += ( " " + ele)
)
// 2
let arr1 = myColor.join("+");
joinMethod.innerHTML = arr1;
// 3
let q3 = myColor.slice(0 , 3)
shiftMethod.innerHTML = q3;
//4
let q4 = myColor.slice(0 , 1)
shiftMethod2.innerHTML = q4;
//5
let q5 = myColor.slice(1 ,3)
shiftMethod3.innerHTML = q5;
//6
let q6 = myColor.push("orange")
myColor.forEach((ele) => 
    pushMethod.innerHTML += ( " " + ele)
)

//Question.2
let sum1 = document.getElementById('sum1');
let array2 = [7,3,4,3,2,8,8,4]
let sum = 0;
sum1.innerHTML += ("Array is : ");
array2.forEach((ele) => {
    sum1.innerHTML +=  (ele);
})
for(let i =0 ; i< array2.length ; i++){
    sum = sum+array2[i];
}
sum1.innerHTML += ("</br> Array of sum is : " + sum );
//Question.6
let mapMethod = document.getElementById('mapMethod');
let arraypr = document.getElementById('array6');
let array6 =  [2, 5, 6, 3, 8, 9];
let qw6 = array6.map((ele) => {
    return (ele) ;
})
arraypr.innerHTML = ("array is " + qw6);

let qs6 = array6.map((ele) => {
    return (ele * ele) ;
})
mapMethod.innerHTML = ("square of array is " + qs6);

//Question.9
let airplane = document.getElementById('airplane');
let ox = document.getElementById('ox');
let javaBook = document.getElementById('javaBook');

let a = "airplane";
let b = "oxoxoxox";
let c = "A New Java Book";

airplane.innerHTML += (a + "</br>");
airplane.innerHTML += ("index of 2 is " + a.charAt(2));
ox.innerHTML += (b + "</br>");
ox.innerHTML += b.replaceAll("x" , "X");
javaBook.innerHTML += (c + "</br>");
javaBook.innerHTML += c.toUpperCase();



//Question.10
let revers = document.getElementById('revers');
let arraypr2 = document.getElementById('array');
let array =  [1,2,3,4,5,6,7,8,9];
let arr = array.map((ele) => {
    return (ele) ;
});
arraypr2.innerHTML = ("array is " + arr );

array.reverse();
let rev = array.map((ele) => {
    return (ele) ;
})
revers.innerHTML = ("reverse array is " + rev);


//Question.11
let arr11 = document.getElementById('array11');
let check = document.getElementById('check');
let array11 =  [5,3,2,6,9,3];
let value = 8;
arr11.innerHTML += "array is :";
array11.forEach((ele) => {
    arr11.innerHTML +=  (ele);
})
if(array11.includes(value)){
    check.innerHTML += (value +" is availible in this array")
}else{
    check.innerHTML += (value +" is not availible in this array")
}

//Question.12
let name = document.getElementById('name');
let char = document.getElementById('char');

let Name = "Priya";
name.innerHTML = ("Name is : " + Name)
char.innerHTML = ("Name's length is : " + Name.length) ;

//Question.13
let syntax = document.getElementById('syntax');
let rSyntax = document.getElementById('rSyntax');

let syn = "i often take a walk with my dog in the evening. his dog follows him everywhere. I don't feed my dog in the morning";
syntax.innerHTML += (syn);
rSyntax.innerHTML += syn.replaceAll("dog" , "cat");

//Question.14
let str_1 = document.getElementById('str-1');
let arr_1 = document.getElementById('arr-1');

let str = "Hire the top 1 % freelance developers";
str_1.innerHTML = ("string : " + str);
let str1 = (str.split(" ") );
let arr__1 =  str1.slice(0 , 5);
arr_1.innerHTML = ("string to array : " + arr__1);

//Question.14
let str_2 = document.getElementById('str-2');
let arr_2 = document.getElementById('arr-2');

let array_2 = ['5','32','Daniel'];

array_2.forEach((ele) => 
    arr_2.innerHTML += ( " " + ele)
)

str_2.innerHTML += ("array to string : " + array_2.toString());
//Question.3
let array3 = [8 , 4 , 5 , 9, 3 , 6];
no(array);
function no(arr) {
    if (arr.length === 0) {
    }
let max = arr[0];
let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
document.getElementById('arr-3').innerHTML = " " + max;
document.getElementById('str-3').innerHTML = " " + min;
}
//Question-4
let sentence = 'This is cat';
let index = 3;
console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);

//Question-5
let array4 = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
function nag(arr) {
    return arr.filter(function(no) {
        return no >= 0;
});}
let pos = nag(array);
console.log("pos numbers=",pos);

//Question-8
const array5 = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const filterword = array5.filter(array5 => array5.length >= 8);
console.log("Filtered word:", filterword);
