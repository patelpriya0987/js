let choice = 32;
let month = document.getElementById("month")

switch(choice){
    case 1 :
        
        month.innerHTML = "january";
        break;
    case 2 :
        month.innerHTML = "February";
        break;
    case 3 :
        month.innerHTML = "March";
        break;
    case 4 :
        month.innerHTML = "April";
        break;
    case 5 :
        month.innerHTML = "May";
        break;
    case 6 :
        month.innerHTML = "Jun";
        break;
    case 7 :
        month.innerHTML = "July";
        break;
    case 8:
        month.innerHTML = "August";
        break;
    case 9:
        month.innerHTML = "September";
        break;
    case 10:
        month.innerHTML = "octomber";
        break;
    case 11:
        month.innerHTML = "November";
        break;
    case 12:
        month.innerHTML = "December";
        break;
    default:
        month.innerHTML = "Invaild Choice ... ";
        break;

}