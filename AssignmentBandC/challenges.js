let userInput = document.getElementById("msg").value;
// function that randomly chooses a weapon for the computer.
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
// function that determine the winner through some if statements.
const determineWinner = (userInput, computerChoice) => {
        if (userInput === computerChoice) {
            document.getElementById("winner").innerHTML = "tie"
            document.getElementById("winner").style.color = "brown";
            return 'TIE';
        }
        if (userInput === 'rock') {
            if (computerChoice === 'paper') {
                document.getElementById("winner").innerHTML = "sorry, computer wins"
                document.getElementById("winner").style.color = "red";
                return 'sorry, computer wins';
            }
            if (computerChoice === 'scissors') {
                document.getElementById("winner").innerHTML = "You win"
                document.getElementById("winner").style.color = "green";
                return 'sorry, computer wins';
            }
        }
        if (userInput === 'paper') {
            if (computerChoice === 'scissors') {
                document.getElementById("winner").innerHTML = "sorry, computer wins"
                document.getElementById("winner").style.color = "red";
                return 'sorry, computer wins';
            }
            if (computerChoice === 'rock') {
                document.getElementById("winner").innerHTML = "You win"
                document.getElementById("winner").style.color = "green";
                return 'sorry, computer wins';
            }
        }
        if (userInput === 'scissors') {
            if (computerChoice === 'rock') {
                document.getElementById("winner").innerHTML = "sorry, computer wins"
                document.getElementById("winner").style.color = "red";
                return 'sorry, computer wins';
            }
            if (computerChoice === 'paper') {
                document.getElementById("winner").innerHTML = "You win"
                document.getElementById("winner").style.color = "green";
                return 'sorry, computer wins';
            }
        }
        if (userInput != 'rock' || userInput != 'paper' || userInput != 'scissors') {
            document.getElementById("winner").style.color = "orange";
            document.getElementById("winner").innerHTML = "wrong input"

        } else {
            document.getElementById("winner").style.color = "purple";
            document.getElementById("winner").innerHTML = "Something ain't right!";
        }
    }
    // function that prints the game statements and put then in the html page.
const playGame = () => {
    let userInput = document.getElementById("msg").value;
    const computerChoice = getComputerChoice();
    console.log(userInput);
    console.log(computerChoice);
    document.getElementById("userInput2").innerHTML = "You chose: " +
        userInput;
    document.getElementById("computerInput").innerHTML = "computer chose: " +
        computerChoice;

    console.log(determineWinner(userInput, computerChoice));
}
const playGameRock = () => {
    let userInput = 'rock';
    const computerChoice = getComputerChoice();
    document.getElementById("userInput2").innerHTML = "You chose: " +
        userInput;
    document.getElementById("computerInput").innerHTML = "computer chose: " +
        computerChoice;
    console.log(determineWinner(userInput, computerChoice));
}
const playGamePaper = () => {
    let userInput = 'paper';
    const computerChoice = getComputerChoice();
    document.getElementById("userInput2").innerHTML = "You chose: " +
        userInput;
    document.getElementById("computerInput").innerHTML = "computer chose: " +
        computerChoice;
    console.log(determineWinner(userInput, computerChoice));
}
const playGameScissors = () => {
    let userInput = 'scissors';
    const computerChoice = getComputerChoice();
    document.getElementById("userInput2").innerHTML = "You chose: " +
        userInput;
    document.getElementById("computerInput").innerHTML = "computer chose: " +
        computerChoice;

    console.log(determineWinner(userInput, computerChoice));
}


const button = document.getElementById("btn");
const input = document.getElementById("input");
const factorial = document.getElementById("factorial");

function stringToNumber(input, arg) {
    return +input[arg];
}

button.addEventListener("click", () => {
    const inputs = [input.value];
    const msg = ["Please enter a input"];
    const __fac = [];
    const __i = 0;
    const __f = 1;
    if (!inputs[__i]) {
        if (msg[__i].length > __i) {
            alert(msg[__i]);
        }
    } else {
        if (typeof __fac != "string") {
            if (typeof stringToNumber == "function") {
                __fac.push(stringToNumber(inputs, __i));
            }
        }

        if (__fac[__i] === __i || __fac[__i] === __f) {
            if (__fac[__i] != "string" && __fac[__i] > __i) {
                return __f;
            }
        }

        for (let i = __fac[__i] - __f; i >= __f; i--) {
            if (__fac[__i] > __i && typeof __fac[__i] != "string") {
                if (__fac[__i] == __fac[__i]) {
                    if (__fac[__i] != i) {
                        __fac[__i] *= i;
                    }
                }
            }
        }
        factorial.innerHTML = __fac[__i];
    }
});

let wordButton3 = document.getElementById("longestWord");
wordButton3.addEventListener("click", () => {
    let input = document.getElementById("input5").value;
    let temp = input.split(" ");
    let temp1 = "";
    temp.forEach(element => {
        if (element.length > temp1.length) {
            temp1 = element;
        }
    });
    document.getElementById("longestWord1").innerText = temp1;
    console.log(temp1);
})

//Calculate Tip
function calculateTip() {
    let billAmt = document.getElementById("billamt").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = document.getElementById("peopleamt").value;

    //validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    let total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};

function chooseDay() {
    let theDay = document.getElementById("day").value;
    theDay = theDay.toLowerCase();
    document.getElementById("test").innerHTML = theDay;
    let status2;
    switch (theDay) {
        case 'sunday':
            status2 = "Today is Sunday, we offer apple pie.";
            break;
        case 'monday':
            status2 = "Today is Monday, we offer cheesecake.";
            break;
        case 'tuesday':
            status2 = "Today is Tuesday, we offer arabic food.";
            break;
        case 'wednesday':
            status2 = "Today is Wednesday, we offer english food.";
            break;
        case 'thursday':
            status2 = "Today is Thursday, we offer only drinks.";
            break;
        case 'friday':
            status2 = "Today is Friday, we offer everything.";
            break;
        case 'saturday':
            status2 = "Today is Saturday, we offer everything but for Saturday.";
            break;
        default:
            status2 = "wrong input";
            break;

    }
    document.getElementById("test4").innerHTML = status2;

}

//new
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn8");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.getElementById("tempColor").style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

//counter
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn9");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});
//ip locator

function callApi() {
    let info = document.getElementById("info")
    info.innerHTML = "Calculating..."

    // alert(input);
    fetch("https://freegeoip.app/json/")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let ip = data["ip"],
                country = data["country_name"],
                region = data["region_name"],
                city = data["city"];
            let innerHtml = `
            <div>
                <label class="titletext"><b> IP Address </b></label>
                <div> ` + ip + ` </div>
                <label class="titletext"><b> Country </b></label>
                <div> ` + country + ` </div>
                <label class="titletext"><b> Region </b></label>
                <div> ` + region + ` </div>
                <label class="titletext"><b> City </b></label>
                <div> ` + city + ` </div>
            </div>
            `

            info.innerHTML = innerHtml;

        });

}

updateText = () => {
    let text = document.getElementById('text-input').value;
    document.getElementById('text-output').innerText = text
}

makeBold = (elem) => {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
}

makeItalic = (elem) => {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic')
}

makeUnderline = (elem) => {
    elem.classList.toggle('active');
    let formattedText = document.getElementById('text-output');
    if (formattedText.classList.contains('underline')) {
        formattedText.classList.remove('underline');
    } else {
        formattedText.classList.add('underline');
    }
}

alignText = (elem, alignType) => {
    document.getElementById('text-output').style.textAlign = alignType;
    let buttonList = document.getElementsByClassName('align');
    for (let buttonValue of buttonList) {
        buttonValue.classList.remove('active');
    }
    elem.classList.add('active');
}
const container = document.getElementById('container1')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 990

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    container.appendChild(square)
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = '0 0 2px ${color}, 0 0 10px ${color}'
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}
// //Listen for submit button
//document.getElementById('loan-form').addEventListener('submit',calculateResults);;

//Listen for submit button
const form = document.getElementById('loan-form');
//form.addEventListener('submit',calculateResults);//Without loader
form.addEventListener('submit', function(e) {
    //Hide Results
    document.getElementById('results').style.display = 'none';
    //Show Loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

//Calculate Results function
function calculateResults(e) {

    console.log('calculating...');
    //UI cars
    const ELamount = document.getElementById('amount');
    const ELinterest = document.getElementById('interest');
    const ELyears = document.getElementById('years');
    const ELMonthly_payment = document.getElementById('monthly-payment');
    const ELtotal_payment = document.getElementById('total-payment');
    const ELtotal_interest = document.getElementById('total-interest');

    const principal = parseFloat(ELamount.value);
    const calculatedInterest = parseFloat(ELinterest.value) / 100 / 12;
    const calculatedPayment = parseFloat(ELyears.value) * 12;

    //Create monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    console.log(monthly);

    if (isFinite(monthly)) { //check whether it is finite or not
        ELMonthly_payment.value = monthly.toFixed(2);
        ELtotal_payment.value = (monthly * calculatedPayment).toFixed(2);
        ELtotal_interest.value = ((monthly * calculatedPayment) - principal).toFixed(2); //fix to 2 deciman places

        //Show Results
        document.getElementById('results').style.display = 'block';

        //Hide Loader
        document.getElementById('loading').style.display = 'none';
    } else {
        console.log("Plase check your numbers");
        //Display an error
        showError('Plase check your number');
    }

    e.preventDefault();
}



function showError(error) {

    //Show Results
    document.getElementById('results').style.display = 'none';

    //Hide Loader
    document.getElementById('loading').style.display = 'none';
    //--------------------------------------------------------------------


    //Create a div
    const errorDiv = document.createElement('div');

    //get elements
    const ELcard = document.querySelector('.card');
    const ELheading = document.querySelector('.heading');


    //Add class
    errorDiv.className = 'alert alert-danger';

    //create text node and append  to dic
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error  above heading
    ELcard.insertBefore(errorDiv, ELheading);

    //clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}

function firstReverse() {
    let str = document.getElementById("reverseText").value.toLowerCase();
    let letters1 = "abcdefghijklmnopqrstuvwxyz";
    let letters2 = "bcdEfghIjklmnOpqrstUvwxyzA";
    let newLetters = str.split('').map((char, x) => letters2[letters1.indexOf(char)] || char).join('');
    document.getElementById("output7").innerText = newLetters;
    console.log(newLetters);
    return newLetters
}

function reverse() {
    let str = document.getElementById('reversedText').value;
    let newStr = str.split("").reverse().join("");
    document.getElementById('output8').innerHTML = newStr;
    return str.split("").reverse().join("");

}

function kgToPound() {
    let weightInKg = document.getElementById("weightInput").value;
    let weightInPound = weightInKg * 2.20462;
    document.getElementById("output9").innerText = weightInPound;
    console.log(weightInPound);
}

function capitalizeLetters() {
    let string = document.getElementById('capitalizeInput').value;
    let oldArray = string.split(' '),
        newArray = [];

    for (let i = 0; i < oldArray.length; i++) {
        newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
    }
    document.getElementById('output10').innerHTML = newArray.join(' ');
    return newArray.join(' ');

}


function newStyle() {
    let newColor = '';
    let newFont = '';
    let x = Math.floor(Math.random() * 7);
    switch (x) {
        case 0:
            newColor = 'red';
            newFont = 'Times New Roman';
            break;
        case 1:
            newColor = 'blue';
            newFont = 'Florence, cursive';
            break;
        case 2:
            newColor = 'yellow';
            newFont = 'Verdana';
            break;
        case 3:
            newColor = 'purple';
            newFont = 'Courier New';
            break
        case 4:
            newColor = 'cyan';
            newFont = 'Georgia';
            break;
        case 5:
            newColor = 'maroon';
            newFont = 'Palatino';
            break;
        case 6:
            newColor = 'lime';
            newFont = 'Impact';
            break;
    }
    let elem = document.getElementById('logo');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont;
}

// // This variable stores the "Pick a Color" button
// let button15 = document.getElementById('colorbutton');

// // This variable stores the "Mystery Color" button
// let mysteryButton = document.getElementById('nextbutton');

// // This random number function will create color codes for the randomColor variable
// function colorValue() {
//     return Math.floor(Math.random() * 256);
// }

// function colorChange(event) {
//     let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
//     event.target.style.backgroundColor = randomColor;
// }
// button15.addEventListener('click', colorChange);
// mysteryButton.addEventListener('wheel', colorChange);

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document



function toFahrenheit() {
    let celsius = document.getElementById("celsiusInput").value;
    let fahrenheit = celsius * (9 / 5) + 32;
    document.getElementById("fahrenheitOutput").innerHTML = 'The temperature is ' + fahrenheit + ' fahrenheit.';
}