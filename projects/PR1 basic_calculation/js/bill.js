// bill
let pr_no1 ="1"
let pr_name1 = "shampo";
let price = "40";
let total = price;
// let after discount;
// let payable amount;


// if 500 -> 50%
// if 100 -> 10%
// if 50 -> 5%
//  discount 
if(total >= 500){ //  555 >= 500 
    let discount =  ( total * 20 ) / 100; // 111
    document.getElementById('discount').innerHTML = " " +discount;

    let after_discount = total - discount;
    document.getElementById('after_discount').innerHTML = " " + after_discount;
    document.getElementById('pay_amount').innerHTML = " " + after_discount;
}else{
    let discount = 0;
    document.getElementById('discount').innerHTML = " " + discount;
    document.getElementById('after_discount').innerHTML = " " + price;
    document.getElementById('pay_amount').innerHTML = " " + price;
}



if(total >= 100 && total <500 ){ // 200 >=100  && 555 <=500 // 55
    let discount =  ( total * 10 ) / 100;
    document.getElementById('discount').innerHTML = " " +discount;

    let after_discount = total - discount;
    document.getElementById('after_discount').innerHTML = " " + after_discount;
    document.getElementById('pay_amount').innerHTML = " " + after_discount;
    
}

if(total >= 50 &&  total <100  ){
    let discount =  ( total * 5 ) / 100; // 27
    document.getElementById('discount').innerHTML = " " +discount;

    let after_discount = total - discount;
    document.getElementById('after_discount').innerHTML = " " + after_discount;
    document.getElementById('pay_amount').innerHTML = " " + after_discount;
}

document.getElementById('pr_no1').innerHTML = " " + pr_no1;
document.getElementById('pr_name1').innerHTML = " " + pr_name1;
document.getElementById('price').innerHTML = " " + price;
document.getElementById('total').innerHTML = " " + total;
