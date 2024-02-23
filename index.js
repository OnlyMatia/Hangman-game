const initalStartBtn = document.getElementById("btn")
const categoryBtns = document.querySelectorAll(".btnCategory");
const mainHeader = document.getElementById("headerMain")
const gameDiv = document.getElementById("gameDiv")
const usedLetters = document.getElementById("usedLetters")

var countries = [
    "Serbia",
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


function selection(){
    mainHeader.innerText = "Choose a category."

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

    let rijec;

    if(cat === countries){
        rijec = countries[Math.floor(Math.random() * countries.length)]
    }else if(cat === animals){
        rijec = animals[Math.floor(Math.random() * animals.length)]
    }else if(cat === random){
        rijec = random[Math.floor(Math.random() * random.length)]
    }

    const word = Array.from(rijec.toLowerCase())
    const lettersToLine = word.map(() => '_');

    // adding paragraph and text in paragraph
    const displayText = document.createElement("p");
    displayText.classList.add("GuessingWord");
    displayText.innerText = lettersToLine.join(" ")
    gameDiv.appendChild(displayText);
    
    const used = []
    let counter = 1;
    
    document.addEventListener("keypress", (e) => {
        let tipka = e.key
        const displayedWord = word.join("").toUpperCase()
        if(counter === 10){
            mainHeader.style.color = "red";
            mainHeader.innerText = `You Lose, the word was ${displayedWord}`;
            restartGame()
            return;
        }
        if(!word.includes(tipka) && !used.includes(tipka)){
            hangmanImgs.setAttribute("src", "imgs/img" + counter +".png");
            counter++;
            console.log(counter);
        }
        if(lettersToLine.join() !== word.join()){
            if(!used.includes(tipka)){
                used.push(tipka)
            }
            if(!word.includes(tipka)){               
                usedLetters.innerText = used;
                //-1 life if letter not in word 
            }else{                                   
                for (let i = 0; i < word.length; i++) {
                    if(tipka === word[i]){
                        lettersToLine[i] = tipka;
                    }
                }
                displayText.innerText = lettersToLine.join(" ")
                if(lettersToLine.join() === word.join()){
                    mainHeader.innerText = `You Win!`
                    mainHeader.style.color = "blue"
                    
                    restartGame()
                }
            }
        }

    })  
}


function restartGame(){
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart Game";
    document.body.appendChild(restartBtn);
    restartBtn.addEventListener("click", () => {

        document.body.removeChild(restartBtn);
        gameDiv.innerHTML = '';
        usedLetters.innerHTML = '';
        mainHeader.style.color = "black"
        selection();
    });
}
