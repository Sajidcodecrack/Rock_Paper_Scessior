let user_score = 0;
let computer_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const user_score_count = document.querySelector("#user_score");
const computer_score_count = document.querySelector("#computer_score");

const show_winner = (user_win, user_choice, computer_choice) => {
    if (user_win) {
        user_score++;
        user_score_count.innerText = user_score;
        console.log("You win");
        msg.innerText = `You Win! Your ${user_choice} beats ${computer_choice}`;
        msg.style.backgroundColor = "green";
    } else {
        computer_score++;
        computer_score_count.innerText = computer_score;

        console.log("You lose");
        msg.innerText = `You Lose! Your ${computer_choice} beats ${user_choice}`;
        msg.style.backgroundColor = "red";
    }
};

const draw_game = (user_choice, computer_choice) => {
    console.log("Game is draw");
    msg.innerText = `Game is drawn! Your ${user_choice} and Computers ${computer_choice} are same! Try again`;
    msg.style.backgroundColor = "#081b31";
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
        draw_game(user_choice, computer_choice);
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

        show_winner(user_win, user_choice, computer_choice);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        play_game(user_choice);
    });
});
