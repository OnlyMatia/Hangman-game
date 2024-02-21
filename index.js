const initalStartBtn = document.getElementById("btn")
const categoryBtns = document.querySelectorAll(".btnCategory");
const mainHeader = document.getElementById("headerMain")
const gameDiv = document.getElementById("gameDiv")


var countries = [
    "United States",
    "China",
    "India",
    "Brazil",
    "Russia",
    "Indonesia",
    "Pakistan",
    "Nigeria",
    "Croatia",
    "Japan",
    "Mexico",
    "Philippines",
    "Egypt",
    "Maldives",
    "Vietnam"
];
var animals = [
    "Lion",
    "Tiger",
    "Elephant",
    "Giraffe",
    "Zebra",
    "Monkey",
    "Kangaroo",
    "Penguin",
    "Panda",
    "Gorilla",
    "Dolphin",
    "Wolf",
    "Bear",
    "Sloth",
    "Cheetah"
];
var random = [
    "Chair",
    "Table",
    "Laptop",
    "Mountain",
    "Notebook",
    "Orange",
    "Pizza",
    "Cup",
    "Sunglasses",
    "Backpack",
    "Watch",
    "Television",
    "Pen",
    "Shoes",
    "Phone",
    "Guitar",
    "Book",
    "Clock",
    "Camera",
    "Pencil",
    "Headphones",
    "Basketball",
    "Keyboard",
    "Microphone",
    "Candle",
    "Wallet",
    "Towel",
    "Painting",
    "Umbrella"
];

//console.log(random);

function selection(){
    mainHeader.innerText = "Choose a category."
    //console.log(categoryBtns);
    categoryBtns.forEach((el) => {
        el.classList.remove("hide")
    })
    initalStartBtn.classList.add("hide")
}

function startGame(cat){
    categoryBtns.forEach((el) => {
        el.classList.add("hide")
    }) 

    if(cat === countries){
        mainHeader.innerText = `Category: Countries`
    }else if(cat === animals){
        mainHeader.innerText = `Category: Animals`
    }else if(cat === random){
        mainHeader.innerText = `Category: Random Word`
    }

    // adding starting hangman img
    const hangmanImgs = document.createElement("img");
    hangmanImgs.setAttribute("src", "imgs/img1.png");
    gameDiv.appendChild(hangmanImgs);

    // adding paragraph 
    const displayText = document.createElement("p");
    displayText.classList.add("GuessingWord");
    gameDiv.appendChild(displayText);

    let rijec;

    if(cat === countries){
        rijec = countries[Math.floor(Math.random() * countries.length)]
    }else if(cat === animals){
        rijec = animals[Math.floor(Math.random() * animals.length)]
    }else if(cat === random){
        rijec = random[Math.floor(Math.random() * random.length)]
    }
    console.log(rijec);

    

}