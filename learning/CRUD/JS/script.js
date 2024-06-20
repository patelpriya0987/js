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
let isEdit = false;
let isIndex;

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

    console.log(gender.value);
    let obj = {
        id : isIndex ? isIndex : storage.length + 1,
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        course: course.value,
        number: number.value,
        duretion: duretion.value,
        gender: gender[0].checked ? "Male" : "Female"

    }

    if(isEdit){

      console.log("obj",obj);

      let data = [...storage];
      let updatedRec = data.map((rec) => {

        if(rec.id == isIndex){
            return rec = obj;
        }else{
            return rec;
        }

      })
      console.log('updated..',updatedRec);
      storage = updatedRec;
      isEdit = false;
      isIndex = ' ';

    }else{

       storage = [...storage, obj];
       console.log(obj);
       console.log(storage);

    }


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

let singleRecord = (id) => {
   console.log("Click On Edit ..");

   let data = [...storage];

   let single = data.filter((d) => {

      return d.id === id;

   })

   isEdit = true;
   isIndex = id;

   console.log("single", single[0] );

   fname.value = single[0].fname;
   lname.value = single[0].lname;
   email.value = single[0].email;
   course.value = single[0].course;
   number.value = single[0].number;
   duretion.value = single[0].duretion;
   gender.value = single[0].gender;

}

let deletRec = (id) => {

    console.log("delet..");
    let data = [...storage]

    let newRec = data.filter((rec) =>{
        return rec.id != id
    })

    console.log('New Record ',newRec);

    storage = newRec;

    let setData = JSON.stringify(storage);
    localStorage.setItem("data", setData);

    displayData();

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
            <td><button class="btn btn-primary" onClick="return singleRecord(${rec.id})" > <i class="fa-solid fa-pen-to-square"></i> </button> || <button class="btn btn-danger" onClick="return deletRec(${rec.id})"> <i class="fa-solid fa-trash"></i> </button> ||  <button class="btn btn-warning"> <i class="fa-solid fa-eye"></i>  </button></td>
        </tr>
        `
    })
}

displayData();
