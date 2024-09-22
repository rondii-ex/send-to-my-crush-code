const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

//Change text and gif button when the Yes button is clicked 
yesBtn.addEventListener("click", ()=> {
question.innerHTML = "I love you too baby❤️";
gif.src="LINE Creators' Stickers - Cutie Cat-Chan four Example with GIF Animation.gif";

});
//Make the No button move away anytime you want to click on it

const wrapper = document.querySelector(".wrapper");

function moveButton() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate new random positions for the "No" button
    let maxX = wrapperRect.width - noBtnRect.width;
    let maxY = wrapperRect.height - noBtnRect.height;

    // Randomize position within bounds of wrapper

    let randomX = Math.floor(Math.random()*maxX);
    let randomY = Math.floor(Math.random()*maxX);

    // Set new position for the button
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
//move the button when mouse is over it
noBtn.addEventListener("mouseover", moveButton);
//move button when it  is touched(for touchscreen)
noBtn.addEventListener("touchstart", moveButton);
//move the button when it gains focus
noBtn.addEventListener("focus", moveButton);
//move the button if a click is attempted
noBtn.addEventListener("click", moveButton);