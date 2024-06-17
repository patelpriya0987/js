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

let storage = [];
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
}

const displayData = () => {

    table.innerHTML = "";
    storage.forEach((rec) => {
        table.innerHTML += `
        <div class="shadow p-3 col-4 mx-auto rounded border py-5 mx-4">
            <h3>First Name : ${rec.fname}</h3>
            <h3>Last Name : ${rec.lname}</h3>
            <h3>Email : ${rec.email}</h3>
            <h3>Course : ${rec.course}</h3>
            <h3>Number : ${rec.number}</h3>
            <h3>Duretion : ${rec.duretion}</h3>
            <h3>Gender : ${rec.gender}</h3>
            </div>
          </div>
        `
    })
}