//13.  ptr1 //1 23 456 789 1112131415
let ptr1 = document.getElementById('ptr1');
let str1 = ' ';
let number = 1;
for(let i=1 ; i<=5 ; i++){    
    for(let j=1 ; j<=i ; j++){
        str1 += number;
        number++;
    }
    str1 += innerHTML = (' </br>')    }
ptr1.innerHTML = str1;

//14.  ptr2 //5 54 543 5432 54321
let ptr2 = document.getElementById('ptr2');
let str2 = ' ';
let number2 = 1;
for(let l=5 ; l>=1 ; l--){    
    for(let m=5 ; m>=l ; m--){
        str2 += m;
    }
    str2 += innerHTML = (' </br>')
}
ptr2.innerHTML = str2;

//ptr 3
let ptr3 = document.getElementById('ptr3');
let str3 = ' ';

for(let i=1 ; i<=5 ; i++){

    for(let j=1 ; j<=5 ; j++){

        str3 += j + ' ';
    }

    str3 += "</br>"

}
ptr3.innerHTML = str3;