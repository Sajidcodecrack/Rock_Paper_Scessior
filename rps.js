let user_score = 0;
let computer_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const show_winner = (user_win) => {
    if (user_win) {
        console.log("You win");
        msg.innerText = "You win";
    } else {
        console.log("You lose");
        msg.innerText=("You lose");
    }
};

const draw_game = () => {
    console.log("Game is draw");
    msg.innerText=("Game is draw");
};

const generate_computer_choice = () => {
    // Computer random choice generating function
    const options = ["rock", "paper", "scissor"];
    const random_index = Math.floor(Math.random() * 3);
    return options[random_index];
};

const play_game = (user_choice) => {
    console.log("User choice:", user_choice);
    const computer_choice = generate_computer_choice(); // Generate computer choice
    console.log("Computer choice:", computer_choice);

    // Draw game conditions:
    if (computer_choice === user_choice) {
        draw_game();
    } else {
        let user_win = true;

        if (user_choice === "rock") {
            // Rock vs Paper & Scissor
            user_win = computer_choice === "paper" ? false : true;
        } else if (user_choice === "paper") {
            // Paper vs Rock & Scissor
            user_win = computer_choice === "rock" ? true : false;
        } else {
            // Scissor vs Rock & Paper
            user_win = computer_choice === "rock" ? false : true;
        }

        show_winner(user_win);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        play_game(user_choice);
    });
});
