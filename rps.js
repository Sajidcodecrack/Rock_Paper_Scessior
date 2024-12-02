let user_score = 0;
let computer_score = 0;

const choices = document.querySelectorAll(".choice");
const genarate_computerchoice = () => {
    // computer random choice genarating function 
}
const playgame = (user_choice) => {
    console.log("User choice :", user_choice);  //genarate user choice 
}
choices.forEach(choice => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        //   console.log("welcome to the game");
        playgame(user_choice);
    });
});