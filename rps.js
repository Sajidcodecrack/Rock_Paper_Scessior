let user_score = 0;
let computer_score = 0;

const choices = document.querySelectorAll(".choice");
const genarate_computerchoice = () => {
    // computer random choice genarating function 
    const options = ["rock", "paper", "scissor"];
    const random_index = Math.floor(Math.random() * 3);
    return options[random_index];
}
const playgame = (user_choice) => {
    console.log("User choice :", user_choice);
    const computer_choice = genarate_computerchoice(); //genarate user choice 
    console.log("Computer_choice: ",computer_choice);
}
choices.forEach(choice => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        //   console.log("welcome to the game");
        playgame(user_choice);
    });
});