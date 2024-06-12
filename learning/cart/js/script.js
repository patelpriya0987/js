//array object

let details = document.getElementById('card')


let students = [
    {
        sr : 1,
        name : "voilen",
        age : 17,
        number : "456$"
    },
    {
        sr : 2,
        name : "beer",
        age : 17,
        number : "234$"
    }, 
    {
        sr : 3,
        name : "monalisa",
        age : 35,
        number : "643$"
    },
    {
        sr : 4,
        name : "shushi",
        age : 20,
        number : "746$"
    },
    {
        sr : 5,
        name : "wine",
        age : 18,
        number : "323$"
    },
    {
        sr : 6,
        name : "car",
        age : 19,
        number : "432$"
    },
    {
        sr : 7,
        name : "dish",
        age : 20,
        number : "563$"
    },
]

for(let i=0; i<students.length ; i++){
    
    details.innerHTML += `<div class="col-3 mx-2"><div class="shadow text-center"><div><img src="img/news${students[i].sr}.png" alt="img" class="col-12"></div><div class="p-3"><h2>${students[i].name}<h4>${students[i].number}</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptas nemo.</p><button class="py-1 px-4">buy now</button></div></div></div></h2> `
}

