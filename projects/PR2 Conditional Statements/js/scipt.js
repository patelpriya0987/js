
// bill
let units = 80   

document.getElementById('units').innerHTML = " electricity unit  :  " + units;

let bill_amount = 0;
    
    if (units <= 50) {
        bill_amount = units * 1;
    } else if (units <= 150) {
        bill_amount = 50 * 1 + (units - 50) * 2;
    } else if (units <= 250) {
        bill_amount = 50 * 1 + 100 * 2 + (units - 150) * 3;
    } else {
        bill_amount = 50 * 1 + 100 * 2 + 100 * 3 + (units - 250) * 4;
    }
    if (units > 150) {
        const surcharge = 0.2 * bill_amount;
        bill_amount += surcharge;
    }
    
    document.getElementById('bill_amount').innerHTML = " bill amount  :  " + bill_amount;

//month

let choice = 3;
let month = document.getElementById("month");
switch(choice){
    case 1 :
    case 2 :
    case 3 :
    case 4 :
        month.innerHTML = choice + " :  Winter";
        break;
    case 5 :
    case 6 :
    case 7 :
    case 8:
        month.innerHTML = choice +  "Summer";
        break;
    case 9:
    case 10:
    case 11:
    case 12:
        month.innerHTML = choice +  "Monsoon";
        break;
    default:
        month.innerHTML = "Invalid season ... ";
        break;

}

// Total Interest
let P = 2000;
let N = 3;

    if (N > 3 && N <= 5) {
        R = 3;
    } else if (N > 5 && N <= 8) {
        R = 5;
    } else if (N > 8 && N <= 12) {
        R = 12;
    } else {
        R = 15;
    }

    let t_interest = (P * R * N) / 100;

    document.getElementById('Amount').innerHTML = "Amount : " +  P;
    document.getElementById('Year').innerHTML =   "Year : " + N;
    document.getElementById('t_interest').innerHTML = " Total Interest   :  " + t_interest;