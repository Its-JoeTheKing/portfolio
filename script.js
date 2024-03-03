data = [
    {
        "img": "./imgs/projects/1.PNG",
        "name": "Old Portfolio",
        "desc": "my old portfolio responsive on all devices",
        "link": "https://www.itsme-joe.cf"
    },
    {
        "img": "./imgs/projects/2.PNG",
        "name": "Sneakers Shop",
        "desc": "HTML CSS Design for sneakers shop Responsive on all devices",
        "link": "https://its-joetheking.github.io/ecommerce-product-page-main"
    },
    {
        "img": "./imgs/projects/3.PNG",
        "name": "Art Zone",
        "desc": "Art Categorie Blog dark mode responsive on all devices ",
        "link":"https://its-joetheking.github.io/ArtZone/"
    },
    {
        "img": "./imgs/projects/4.PNG",
        "name": "SQL Father",
        "desc": "A Game for SQL developers to test their skills developed using sql.js",
        "link": "https://its-joetheking.github.io/sql-mafia/"
    },
    {
        "img": "./imgs/projects/5.PNG",
        "name": "AutoDavinci",
        "desc": "A website to test and try the new AI Technique named DALL E2 using API of openai.com",
        "link": "https://www.autodavinci.cf"
    },
    {
        "img": "./imgs/projects/6.jpg",
        "name": "Room homepage",
        "desc": "Responsive Home Commerce Website in HTML CSS JS",
        "link": "https://its-joetheking.github.io/room-homepage-master/"
    },
    {
        "img": "./imgs/projects/7.jpg",
        "name": "Web News",
        "desc": "Responsive News Homepage Website in HTML CSS",
        "link": "https://its-joetheking.github.io/frontendmentor-news-homepage-main/"
    },
    
]
let i = 1;
setInterval(()=>{
    if (i < 7) {
        document.getElementById("image").src = data[i]["img"]
        document.getElementById("numb").innerText = "0"+i
        document.getElementById("title").innerText = data[i]["name"]
        document.getElementById("desc").innerText = data[i]["desc"]
        document.getElementById("link").href = data[i]["link"]
    } else {
        i = 0;
    }
    i++;
},3000)
let f = 0;
var slideRight = () => {
    f++;
    if (f >= 7) {
        f = 0;
    }
    document.getElementById("imageM").src = data[f]["img"];
    document.getElementById("titleM").innerText = data[f]["name"];
    document.getElementById("descM").innerText = data[f]["desc"];
    document.getElementById("linkM").href = data[f]["link"];
    
}
var slideLeft = () => {
    f--;
    if (f <= 0) {
        f = 6;
    }
    document.getElementById("imageM").src = data[f]["img"];
    document.getElementById("titleM").innerText = data[f]["name"];
    document.getElementById("descM").innerText = data[f]["desc"];
    document.getElementById("linkM").href = data[f]["link"];
}
document.getElementById("projects").addEventListener("click",()=>{
    document.getElementsByClassName("img")[0].style.display = "none";
    document.getElementsByClassName("projects")[0].style.display = "flex";
})
document.getElementById("close").addEventListener("click",()=> {
    document.getElementsByClassName("projects")[0].style.display = "none";
    document.getElementsByClassName("img")[0].style.display = "flex";
})
document.getElementById("right").addEventListener("click",()=> {
    slideRight();
})
document.getElementById("left").addEventListener("click",()=> {
    slideLeft()
})