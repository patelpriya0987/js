// array methods
let arr1 = document.getElementById("arr1");
let arr2 = document.getElementById("arr2");
let concat1 = document.getElementById("concat");
let indexOf = document.getElementById("indexOf");
let join = document.getElementById("join");
let map = document.getElementById("map");
let forEach = document.getElementById("forEach");
let pop = document.getElementById("pop");
let push = document.getElementById("push");
let shift = document.getElementById("shift");
let unshift = document.getElementById("unshift");
let reverse = document.getElementById("reverse");
let slice = document.getElementById("slice");
let splice = document.getElementById("splice");

let array1 = [10, 20 , 30 , 40 , 50];
let array2 = [60, 70, 80, 90, 100];

// array 1 print
array1.forEach((ele) => {
    console.log(ele);
})
arr1.innerHTML = array1;
console.log(array1);
//array 2 print
array1.forEach((ele) => {
    console.log(ele);
})
arr2.innerHTML = array2;
console.log(array2);


// concat
let array3 = array1.concat(array2);
concat1.innerHTML = array1.concat(array3);
console.log(array3);

//indexOf
let array4 = array1.indexOf(30);
indexOf.innerHTML += (`IndexOf 30 is : ${array4}`);
console.log(`IndexOf 30 is : ${array4}`);


// join 
let array5 = array1.join(array2);
join.innerHTML = array5;
console.log(array5);

// map
let array6 = array1.map((value, index) => {

    console.log(value, index);
    return value * 2;
});
map.innerHTML = array6;
console.log(array6);


// forEach
array1.forEach((ele) => {
    console.log(ele);
})
forEach.innerHTML = array1;
console.log(array1);

//pop method
//before pop
pop.innerHTML += (`array1 before pop ${array1} <br>`);
console.log(`array1 before pop ${array1}`);
array1.pop();
//after pop
console.log(`array1 after pop ${array1}`);
pop.innerHTML += (`array1 after pop : ${array1}`);

// push method
//before pop
push.innerHTML += (`array1 before push ${array1} <br>`);
console.log(`array1 before push ${array1}`);
array1.push(50);
//after pop
console.log(`array1 after push ${array1}`);
push.innerHTML += (`array1 after push : ${array1}`);

// shift method
//before shift
shift.innerHTML += (`array2 before shift ${array2} <br>`);
console.log(`array2 before shift ${array2}`);
array2.shift();
//after shift
console.log(`array2 after shift ${array2}`);
shift.innerHTML += (`array2 after shift : ${array2}`);

//unshift method
//before unshift
unshift.innerHTML += (`array2 before unshift ${array2} <br>`);
console.log(`array2 before unshift ${array2}`);
array2.unshift(60);
//after unshift
console.log(`array2 after unshift ${array2}`);
unshift.innerHTML += (`array2 after unshift : ${array2}`);

//reverse method
//before reverse
reverse.innerHTML += (`array3 before reverse ${array3} <br>`);
console.log(`array3 before reverse ${array3}`);
array3.reverse();
//after reverse
console.log(`array3 after reverse ${array3}`);
reverse.innerHTML += (`array3 after reverse : ${array3}`);


//slice method
//before slice
slice.innerHTML += (`array2 before slice ${array2} <br>`);
console.log(`array2 before slice ${array2}`);
let array7 = array2.slice(0 , 3);
//after slice
console.log(`array2 after slice ${array7}`);
slice.innerHTML += (`array2 after slice : ${array7}`);

//splice method
splice.innerHTML += (`array7 before splice ${array7} <br>`);
console.log(`array7 before splice ${array7}`);
array7.splice(2 , 1 , 80 , 90 , 100);
//after splice
console.log (`array7 after splice ${array7}`);
splice.innerHTML += (`array7 after splice : ${array7}`);









// //splice method
// //before splice
// splice.innerHTML += (`array2 before splice ${array2} <br>`);
// console.log(`array2 before splice ${array2}`);
// array2.splice(2 , 3);
// //after splice
// console.log(`array2 after splice ${array2}`);
// splice.innerHTML += (`array2 after splice : ${array2}`);