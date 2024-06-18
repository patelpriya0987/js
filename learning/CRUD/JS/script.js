let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let course = document.getElementById("course");
let number = document.getElementById("number");
let table = document.getElementById("displayData");
let duretion = document.getElementById("duration");
let gender = document.getElementsByName("gender");
let male = document.getElementById("male");
let female = document.getElementById("female");

const getData = () => {
    let Data = JSON.parse(localStorage.getItem("data"));

    if(Data){
        return Data;
    }else{
        return [];
    }
}


let storage = getData();
const addData = () => {
    event.preventDefault();
    console.log(gender);
    console.log(gender[0].checked);

    console.log(gender.value);
    let obj = {
        id : storage.length + 1,
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        course: course.value,
        number: number.value,
        duretion: duretion.value,
        gender: gender[0].checked ? "Male" : "Female"

    }

    storage = [...storage, obj];
    console.log(obj);
    console.log(storage);

    displayData();

    fname.value = "";
    lname.value = "";
    email.value = "";
    course.value = "";
    number.value = "";
    duretion.value = "";
    gender.value = "";


    let setData = JSON.stringify(storage);
    localStorage.setItem("data", setData);
}

const displayData = () => {

    table.innerHTML = "";
    storage.forEach((rec) => {
        table.innerHTML += `
        <tr>
            <td>${rec.id}</td>
            <td>${rec.fname}</td>
            <td>${rec.lname}</td>
            <td>${rec.email}</td>
            <td>${rec.course}</td>
            <td>${rec.number}</td>
            <td>${rec.duretion}</td>
            <td>${rec.gender}</td>
            <td><button class="btn btn-primary"> <i class="fa-solid fa-pen-to-square"></i> </button> || <button class="btn btn-danger"> <i class="fa-solid fa-trash"></i> </button></td>

        </tr>
        `
    })
}

displayData();