
// calculator
let principal = 1000 ;
let rate = 5 ;
let years = 5 ;
let total =  principal * ( 1 + (rate * years) );
let interest  = total - principal;

document.getElementById('principal').innerHTML = "Principal : "+ principal;
document.getElementById('rate').innerHTML = "rate: "+ rate;
document.getElementById('years').innerHTML = "years : "+ years;
document.getElementById('interest').innerHTML = "interest : "+ interest;
