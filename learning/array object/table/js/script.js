//array object

let details = document.getElementById('details')


let students = [
    {
        sr : 1,
        name : "priya",
        age : 17,
        number : 6486589
    },
    {
        sr : 2,
        name : "ragini",
        age : 17,
        number : 98763846
    }, 
    {
        sr : 3,
        name : "dhara",
        age : 35,
        number : 6495785
    },
    {
        sr : 4,
        name : "urvisha",
        age : 20,
        number : 74826768
    },
    {
        sr : 5,
        name : "dipali",
        age : 18,
        number : 748288979
    },
    {
        sr : 6,
        name : "nandani",
        age : 19,
        number : 488264979
    },
    {
        sr : 7,
        name : "bhindi",
        age : 20,
        number : 956758979
    },
]

for(let i=0; i<students.length ; i++){
    
    details.innerHTML += `<tr><td class="py-2">${students[i].sr}</td><td class="py-2"> ${students[i].name} </td><td class="py-2"> ${students[i].age} </td><td class="py-2"> ${students[i].number} </td></tr>`
}