    
    //1  multiplication table
    let table = document.getElementById('table');
    let i=1
    while(i<=10){
        table.innerHTML += (`5 * ${i} = ${5 * i} </br>`);
        i++ ;
    }


    //2 factorial number
    let factN = document.getElementById('fact');
    let fact_number = 5;
    let j = 1;
    let fact = 1;
    while( j <=fact_number){ //  1 <= 3 , 2 <=3 , 3<=3 , 6<=3
        fact = fact * j ;  // 1 = 1 * 1 ;  1 = 1 * 2; //2 = 2* 3 ->6
        j++ ; // 1++ ; 2++ 6++
    }
    factN.innerHTML = (`fact of ${fact_number} is ${fact} `) ;

    //9 total
    let total = document.getElementById('total');
    let n = 3 ;
    let sum = 0;
    do{
        sum +=i ;
        i++;
    }while(i <= n);
    total.innerHTML = (`total of ${n} is ${sum} `) ;


    //10 fizzBuzz
    // let fizzBuzz = document.getElementById('fizzBuzz');
    // let f = 1;
    // let content = ' ';
    // do{
    //     if(i == 3){
    //         content = "fizz";
    //     }
    //     else if(i == 5){
    //         content = "buzz";
    //     }
    //     else if()
    // }while(i <=100)




    //11. 1 to 10 number 
    let numbers = document.getElementById('oneToTan');
    let store = ' ';
    for(let i=1; i<=10 ; i++){
        store +=i;
        if ( i < 10 ){
            store += " - "
        }
    }
    numbers.innerHTML = store ;
    
    //12 display number
    let display = document.getElementById('display');
    let result = '';
    let z = 0;

    for (let i = 1; i <= 10; i++) {
        const square = i * i;
        z += square;
        result += square;
        if (i < 10) {
            result += '+';
        }
    }

    console.log(result + ' = ' + z);
    total.innerHTML = (result + ' = ' + z) ;
    // total.innerHTML = (result + ' = ' + display_con) ;
    // 
    // let  = ' ';
    // let l = 100;
    

    // for (let i=1; i<=100; i++) {   

    //     display_con = i * i; 
    // }
    // display.innerHTML = display_con ;

    //13.  ptr1 //1 23 456 789 1112131415
    let ptr1 = document.getElementById('ptr1');
    let str = ' ';
    let number = 1;
    for(let i=1 ; i<=5 ; i++){    
        for(let j=1 ; j<=i ; j++){
            str += number;
            number++;
        }
        str += innerHTML = (' </br>')    }
    ptr1.innerHTML = str;

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