// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning.

(function(){
    let greeting = document.getElementById('greeting');
    function greet(message){
        if(message){
            greeting.innerHTML = (`${message}`);
        }else{
            greeting.innerHTML = (`Good Morning`);
        }
    }
    greet('Hello World ');
    greet();
})();
// 2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.
(function(){
    let area1 = document.getElementById('circle_area');
    function circleArea(r){
        pi = 3.14;
        let area = pi*r*r;
        return area;
    }
    let radius = 10;
    let result = circleArea(radius);

    area1.innerHTML = (`Area of Circle is ${result}`);
})();

// 3. Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return type with argument function.
(function(){
    let area2 = document.getElementById('triangle_area');
    function triangleArea(l , h){
        let area = (l * h)/2 ;
        return area;
    }

    let lengh = 5;
    let height = 10;
    let result2 = triangleArea(lengh , height);

    area2.innerHTML = (`Area of Triangle is ${result2}`);
})();

// 4. Write a JAVASCRIPT Program to find Rectangle area = l * h using return type with argument function.

(function(){
    let area3 = document.getElementById('rectangle_area');
    function triangleArea(l , h){
        let area = l * h
        return area;
    }

    let lengh = 10;
    let height = 5;
    let result3 = triangleArea(lengh , height);

    area3.innerHTML = (`Area of Rectangle is ${result3}`);

})();

// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

(function(){
    let area4 = document.getElementById('p5');
    function p5(a ,b , c){
        let ans = ((b*b)*(4*a*c))/(2*a)
        return ans;
    }

    let a = 10;
    let b = 5;
    let c = 15;
    let result5 = p5(a ,b , c);

    area4.innerHTML = (`ans is : ${result5}`);

})();

// Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function

(function(){
    let area6 = document.getElementById('p6');
    function p6(a ,b , c){
        let ans =  (a*a) + (2*a*b) + (b*b);
        return ans;
    }

    let a = 10;
    let b = 5;
    let c = 15;
    let result6 = p6(a ,b , c);

    area6.innerHTML = (`ans is : ${result6}`);

})();

// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function

(function(){
    let area7 = document.getElementById('p7');
    function p7(f){
        let ans =  (f-32)/1.8;
        return ans;
    }

    let fahrenheit = 50.7;
    let result7 = p7(fahrenheit);

    area7.innerHTML = (`Fahrenheit ${fahrenheit} is converted to Celsius ${result7}`);

})();

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32 ) using return type with argument function

(function(){
    let area8 = document.getElementById('p8');
    function p8(c){
        let ans = (c*1.8)+32;
        return ans;
    }

    let Celsius = 10;
    let result8 = p8(Celsius);

    area8.innerHTML = (`Celsius ${Celsius} is converted to fahrenheit ${result8}`);

})();

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using with argument no return type.

(function(){
    let p9 = document.getElementById('p9');
    function odd_even(number){
        if(number % 2 == 0){
            p9.innerHTML = (`${number} is even`);
        }else{
            p9.innerHTML = (`${number} is even`);
        }
    }
    let number = 10;
    odd_even(number);

})();

// 10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type.

(function(){
    let swap_number = document.getElementById('p10');

    function swapping_number(a,b){
        swap_number.innerHTML += (`before swapping a= ${a} and b= ${b} <br> `);
        a = a + b;
        b = a - b;
        a = a - b;
        swap_number.innerHTML += (`after swapping a= ${a} and b =${b}`);
    }

    a=5;
    b=10;
    swapping_number(a,b);
})();