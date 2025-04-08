/*--------------------lecture-9 Tic Tac Toe---------------------*/

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;

const winpattern = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
];

// Add click event to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("You Have Clicked!!");
        
        // Set "X" or "O" based on the turn
        if (turnX === true) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        
        box.disabled = true;  // Disable clicks on the same box

        checkWinner();  // Check for a winner after every move
    });
});

const checkWinner = () => {
    for (let pattern of winpattern) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        // Check if all three positions in a win pattern are filled and the same
        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                console.log(`${position1} is the Winner!`);
                
                showwinner(position1);
                break;  // Stop further checking once we have a winner
            }
        }
    }
};

const disableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;  // Disable all boxes
    });
};

const enableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;  // Enable all boxes
        box.innerText = "";  // Clear the box content
    });
};

const showwinner = (winner) => {
    msg.innerText = `Winner is ${winner} Player`;
    msgcontainer.classList.remove("hide");
    disableboxes();  // Disable all boxes after declaring a winner
};

const resetgame = () => {
    turnX = true;  // Reset turn to X
    enableboxes();  // Re-enable all boxes and clear text
    msgcontainer.classList.add("hide");  // Hide the winner message
};

document.addEventListener("DOMContentLoaded", () => {
    let newGamebtn = document.querySelector("#new-game");
    let resetbtn = document.querySelector("#reset-btn");
    
    newGamebtn.addEventListener("click", resetgame);
    resetbtn.addEventListener("click", resetgame);
});

