const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color"); // Changed from ".colour" to ".color"

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(document.body);
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}