const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const button1 = document.querySelector(".button1");
let play = false;
let newWords1 = "";
let randWords1 = "";
let sWords1 = ["tiger", "fox", "lion", "snake", "giraffe", "dog", "elephant", "horse", "zebra", "bear", "wolf",
    "cat", "deer", "monkey", "sheep", "buffalo", "hippopotamus", "cheetah", "rhinoceros"];

function start() {
    window.location.href = "../static pages/index1.html";
}
function birds() {
    window.location.href = "../static pages/index3.html";
}
function animals() {
    window.location.href = "../static pages/index2.html";
}

const createNewWords1 = () => {
    let ranNum1 = Math.floor(Math.random() * sWords1.length);
    //console.log(ranNum);
    let newtempsWords1 = sWords1[ranNum1];
    //console.log(newtempsWords.split(""));
    return newtempsWords1;
}
const scrambleWords1 = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        //console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));
        //console.log(i);
        //console.log(j);
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

button1.addEventListener("click", function () {
    if (!play) {
        play = true;
        button1.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        newWords1 = createNewWords1();
        randWords1 = scrambleWords1(newWords1.split(""));
        //console.log(randWords.join(""));
        msg.innerHTML = randWords1;
    }
    else {
        let tempword = guess.value;
        if (tempword == newWords1) {
            //console.log("Correct");
            play = false;
            msg.innerHTML = `Awesome It's Correct`;
            button1.innerHTML = "NEXT";
            guess.classList.toggle("hidden");
            guess.value = "";
        }
        else {
            //console.log("Incorrect");
            msg.innerHTML = `It's InCorrect. Please try again: ${randWords1}`;
        }
    }
})


