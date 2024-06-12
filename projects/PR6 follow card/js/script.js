//array object

let details = document.getElementById('card')


let users = [
    {
        sr: 1,
        name: "lily",
        email: "lily57@gmail.com",
        follow: "12.8K",
        following: "84",
    },
    {
        sr: 2,
        name: "john",
        email: "john49@gmail.com",
        follow: "15.8K",
        following: "50 ",
    },
    {
        sr: 3,
        name: "herry",
        email: "herry95@gmail.com",
        follow: "12.9K",
        following: "90 ",
    },
    {
        sr: 4,
        name: "meck",
        email: "meck48@gmail.com",
        follow: "19.8K",
        following: "58",
    },
    {
        sr: 5,
        name: "nick",
        email: "nick94@gmail.com",
        follow: "35.8K",
        following: "89",
    },
    {
        sr: 6,
        name: "olivia",
        email: "olivia16@gmail.com",
        follow: "20.8K",
        following: "200",
    },
    {
        sr: 7,
        name: "safra",
        email: "safra46@gmail.com",
        follow: "19.3k",
        following: "45",
    },
    {
        sr: 8,
        name: "mary",
        email: "mary26@gmail.com",
        follow: "29.3k",
        following: "459",
    },
    {
        sr: 9,
        name: "julie",
        email: "julie90@gmail.com",
        follow: "49.3k",
        following: "35",
    },
    {
        sr: 10,
        name: "karen",
        email: "karen29@gmail.com",
        follow: "19.3k",
        following: "78",
    },
    {
        sr: 11,
        name: "carol",
        email: "carol58@gmail.com",
        follow: "18.3k",
        following: "123",
    },
    {
        sr: 12,
        name: "ruth",
        email: "ruth29@gmail.com",
        follow: "46.3k",
        following: "567",
    },
    {
        sr: 13,
        name: "sara",
        email: "sara38@gmail.com",
        follow: "59.3k",
        following: "845",
    },
    {
        sr: 14,
        name: "tory",
        email: "tory84@gmail.com",
        follow: "45.3k",
        following: "656",
    },
    {
        sr: 15,
        name: "adena",
        email: "adena49@gmail.com",
        follow: "89.3k",
        following: "75",
    },
    {
        sr: 16,
        name: "alice",
        email: "alice57@gmail.com",
        follow: "56.3k",
        following: "75",
    },
    {
        sr: 17,
        name: "amy",
        email: "amy75@gmail.com",
        follow: "16.3k",
        following: "399",
    },
    {
        sr: 18,
        name: "lisa",
        email: "lisa59@gmail.com",
        follow: "3.3k",
        following: "64",
    },
    {
        sr: 19,
        name: "lynn",
        email: "lynn63@gmail.com",
        follow: "6.3k",
        following: "78",
    },
    {
        sr: 20,
        name: "julia",
        email: "julia34@gmail.com",
        follow: "12k",
        following: "47",
    },
    
]

for (let i = 0; i < users.length; i++) {

    details.innerHTML += ` <div class="item mt-5"><div class="shadow p-3 col-11 mx-auto rounded border py-5"><img src="img/pic${users[i].sr}.jpg" alt="img" class="wh-90 mx-auto rounded border mb-3"><h3>${users[i].name}</h3><h4>${users[i].email}</h4><button class="btn btn-primary px-4 py-1 mt-2 follow" onclick="return myfun()" >Follow Me</button><div class="d-flex justify-content-around mt-4"><div> <h4>${users[i].follow}</h4><p>Follows</p></div><div><h4>${users[i].following}</h4><p>Followings</p</div></div></div></div> `
}
const myfun = () => {

    event.target.innerHTML = "unfollow";

}

// const follows = document.querySelector(".follow");
// follows.addEventListener('click' , function(){
//     follows.innerHTML = "followed";
// })