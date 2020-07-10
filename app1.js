const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const button2 = document.querySelector(".button2");
let play = false;
let newWords2 = "";
let randWords2 = "";

let sWords2 = ["pigeon", "crow", "parrot", "owl", "swan", "peacock", "penguin", "ostrich", "vulture", "eagle", "hen", "sparrow",
    "dove", "flamingo", "duck", "goose", "cuckoo", "kingfisher", "falcon"];


const createNewWords2 = () => {
    let ranNum2 = Math.floor(Math.random() * sWords2.length);
    //console.log(ranNum);
    let newtempsWords2 = sWords2[ranNum2];
    //console.log(newtempsWords.split(""));
    return newtempsWords2;
}
const scrambleWords2 = (arr) => {
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
button2.addEventListener("click", function () {
    if (!play) {
        play = true;
        button2.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        newWords2 = createNewWords2();
        randWords2 = scrambleWords2(newWords2.split(""));
        //console.log(randWords.join(""));
        msg.innerHTML = randWords2;
    }
    else {
        let tempword = guess.value;
        if (tempword == newWords2) {
            //console.log("Correct");
            play = false;
            msg.innerHTML = `Awesome It's Correct`;
            button2.innerHTML = "NEXT";
            guess.classList.toggle("hidden");
            guess.value = "";
        }
        else {
            //console.log("Incorrect");
            msg.innerHTML = `It's InCorrect. Please try again: ${randWords2}`;
        }
    }
})
