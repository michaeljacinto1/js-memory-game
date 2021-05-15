const gameItems = [
    { name:"ball", link:"img/ball.jpg" },
    { name:"ball", link:"img/ball.jpg" },
    { name:"bird", link:"img/bird.png" },
    { name:"bird", link:"img/bird.png" },
    { name:"guitar", link:"img/guitar.jpeg" },
    { name:"guitar", link:"img/guitar.jpeg" },
    { name:"laptop", link:"img/laptop.jpg" },
    { name:"laptop", link:"img/laptop.jpg" },
    { name:"pizza", link:"img/pizza.png" },
    { name:"pizza", link:"img/pizza.png" },
    { name:"cap", link:"img/cap.jpeg" },
    { name:"cap", link:"img/cap.jpeg" }
];

let itemsPicked = [];
let itemsPickedId = [];
let okayCards = [];
let maxTime = 30;
let minTime = 0;

const gameAreaDiv = document.querySelector(".gameArea");
let scoreDisplay = document.querySelector("#score");
scoreDisplay.innerHTML = 0;
let myInterval;

let timer = function () {
    if (minTime > maxTime) {
        clearInterval(myInterval);
        alert("Time's up!");
        gameAreaDiv.innerHTML = "";
        return;
    }
        document.getElementById("timer").innerHTML = (maxTime--);
};

    function timerStart() {
        clearInterval(myInterval);
        myInterval = setInterval(timer, 1000);
    }

    let easyBtn = document.querySelector("#easyBtn");
    easyBtn.addEventListener("click", easyLevel);

    function easyLevel() {
        itemsPicked = [];
        itemsPickedId = [];
        okayCards = [];
        maxTime = 30;
        minTime = 0;

        gameAreaDiv.innerHTML = "";
        gameAreaDiv.style.width = "50%";
        scoreDisplay.innerHTML = 0;
        document.querySelector("#difficultyDisplay").textContent = easyBtn.textContent;

        for(let i=0; i<gameItems.length; i++) {
            let card = document.createElement("img");
            card.setAttribute('src', "img/blank.jpg");
            card.setAttribute("id",i);
            card.addEventListener("click", flippingCard);
            gameAreaDiv.append(card);
        }

        shuffleArray(gameItems);
        function shuffleArray() {
            gameItems.sort(function() {
            return 0.5 - Math.random()});
        }

        //timer
        timerStart();
    
        //flip the card
        function flippingCard(card) {
            let cardId = card.target.getAttribute("id");
            card.target.style.pointerEvents = "none";
            itemsPicked.push(gameItems[cardId].name);
            itemsPickedId.push(cardId);
            card.target.setAttribute('src', gameItems[cardId].link);

            if (itemsPicked.length == 2) {
                setTimeout(checkingCard, 500);
            }
        }
      
        // check the card
        function checkingCard() {
            let cards = document.querySelectorAll("img");
            const option1 = itemsPickedId[0];
            const option2 = itemsPickedId[1];
            
            if(itemsPicked[0] === itemsPicked[1]) {
                cards[option1].setAttribute("src", "img/white.jpg");
                cards[option2].setAttribute("src", "img/white.jpg");
                okayCards.push(itemsPicked);
            }else{
                cards[option1].setAttribute("src", "img/blank.jpg");
                cards[option2].setAttribute("src", "img/blank.jpg");
                cards[option1].style.pointerEvents = "auto";
                cards[option2].style.pointerEvents = "auto";
            }
    
            itemsPicked = [];
            itemsPickedId = [];
            scoreDisplay.textContent = okayCards.length;
    
            if(okayCards.length == gameItems.length/2) {
                alert("Congratualions! You won!");
                clearInterval(myInterval);
                gameAreaDiv.innerHTML = "";
            }
        }
    }
    
    let normalBtn = document.querySelector("#normalBtn");
    normalBtn.addEventListener("click", normalLevel);   
    
    function normalLevel() {
        const gameItemsNormal = gameItems.concat(
            { name: "car", link: "img/car.jpg" },
            { name: "car", link: "img/car.jpg" },
            { name: "phone", link: "img/phone.jpg" },
            { name: "phone", link: "img/phone.jpg" });
        
        okayCards = [];
        itemsPicked = [];
        itemsPickedId = [];
        option1 = itemsPickedId[0];
        option2 = itemsPickedId[1];
        maxTime = 30;
        minTime = 0;

        gameAreaDiv.innerHTML = "";
        gameAreaDiv.style.width = '50%';
        scoreDisplay.innerHTML = 0;
        document.querySelector("#difficultyDisplay").textContent = normalBtn.textContent;
                
        shuffleArray(gameItemsNormal);
        function shuffleArray() {
            gameItemsNormal.sort(function() {
            return 0.5 - Math.random()});
        }
        
        for(let i=0; i<gameItemsNormal.length; i++) {
            let card = document.createElement("img");
            card.setAttribute('src', "img/blank.jpg");
            card.setAttribute("id",i);
            card.addEventListener("click", flippingCard);
            gameAreaDiv.append(card);
        }

        //timer
        timerStart();

        function flippingCard(card) {
            let cardId = card.target.getAttribute("id");
            card.target.style.pointerEvents = "none";
            itemsPicked.push(gameItemsNormal[cardId].name);
            itemsPickedId.push(cardId);
            card.target.setAttribute('src', gameItemsNormal[cardId].link);
            
            if (itemsPicked.length == 2) {
                setTimeout (checkingCard, 500);
            }
        }

        // check the card
        function checkingCard() {
            let cards = document.querySelectorAll("img");
            const option1 = itemsPickedId[0];
            const option2 = itemsPickedId[1];
            
            if(itemsPicked[0] === itemsPicked[1]) {
                cards[option1].setAttribute("src", "img/white.jpg");
                cards[option2].setAttribute("src", "img/white.jpg");
                okayCards.push(itemsPicked);
            }else{
                cards[option1].setAttribute("src", "img/blank.jpg");
                cards[option2].setAttribute("src", "img/blank.jpg");
                cards[option1].style.pointerEvents = "auto";
                cards[option2].style.pointerEvents = "auto";
        }

            itemsPicked = [];
            itemsPickedId = [];
            scoreDisplay.textContent = okayCards.length;

            if(okayCards.length == gameItemsNormal.length/2) {
                alert("Congratualions! You won!");
                clearInterval(myInterval);
                gameAreaDiv.innerHTML = "";
            }
        }
    }
    
    let hardBtn = document.querySelector("#hardBtn");
    hardBtn.addEventListener("click", hardLevel);    

    function hardLevel() {
        const gameItemsHard = gameItems.concat(
            { name: "car", link: "img/car.jpg" },
            { name: "car", link: "img/car.jpg" },
            { name: "phone", link: "img/phone.jpg" },
            { name: "phone", link: "img/phone.jpg" },
            { name: "ds4", link: "img/ds4.jpg" },
            { name: "ds4", link: "img/ds4.jpg" },
            { name: "glass", link: "img/glass.jpg" },
            { name: "glass", link: "img/glass.jpg" }
        );

        okayCards = [];
        itemsPicked = [];
        itemsPickedId = [];
        maxTime = 30;
        minTime = 0;

        gameAreaDiv.innerHTML = "";
        gameAreaDiv.style.width = '60%';
        scoreDisplay.innerHTML = 0;
        document.querySelector("#difficultyDisplay").textContent = hardBtn.textContent;
        
        for(let i=0; i<gameItemsHard.length; i++) {
            let card = document.createElement("img");
            card.setAttribute('src', "img/blank.jpg");
            card.setAttribute("id",i);
            card.addEventListener("click", flippingCard);
            gameAreaDiv.append(card);
        }

        shuffleArray(gameItemsHard);
        function shuffleArray() {
            gameItemsHard.sort(function() {
            return 0.5 - Math.random()});
        }

        //timer
        timerStart();

        function flippingCard(card) {
            let cardId = card.target.getAttribute("id");
            card.target.style.pointerEvents = "none";
            itemsPicked.push(gameItemsHard[cardId].name);
            itemsPickedId.push(cardId);
            card.target.setAttribute('src', gameItemsHard[cardId].link);
            
            if (itemsPicked.length == 2) {
                setTimeout (checkingCard, 500);
            }
        }

        // check the card
        function checkingCard() {
            let cards = document.querySelectorAll("img");
            const option1 = itemsPickedId[0];
            const option2 = itemsPickedId[1];
            
            if(itemsPicked[0] === itemsPicked[1]) {
                cards[option1].setAttribute("src", "img/white.jpg");
                cards[option2].setAttribute("src", "img/white.jpg");
                okayCards.push(itemsPicked);
            }else{
                cards[option1].setAttribute("src", "img/blank.jpg");
                cards[option2].setAttribute("src", "img/blank.jpg");
                cards[option1].style.pointerEvents = "auto";
                cards[option2].style.pointerEvents = "auto";
            }

            itemsPicked = [];
            itemsPickedId = [];
            scoreDisplay.textContent = okayCards.length;

            if(okayCards.length == gameItemsHard.length/2) {
                alert("Congratualions! You won!");
                clearInterval(myInterval);
                gameAreaDiv.innerHTML = "";
            }
        }
    }
    
    let resetBtn = document.querySelector(".resetBtn");
    resetBtn.addEventListener("click", reset);

    function reset() {
        okayCards = [];
        itemsPicked = [];
        itemsPickedId = [];
        maxTime = 30;
        minTime = 0;

        gameAreaDiv.innerHTML = "";
        gameAreaDiv.style.width = '50%';
        scoreDisplay.innerHTML = 0;
        clearInterval(myInterval);
        document.getElementById("timer").innerHTML = "";
        document.querySelector("#difficultyDisplay").textContent = "";

    }