document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#login-form");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const message = document.querySelector("#message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload on form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Simple validation for username and password
        if (!username || !password) {
            message.innerText = "Please fill in both fields!";
        } else {
            // Successful login
            message.innerText = "Didnt fill"; // Clear any previous messages
            alert(`Welcome, ${username}! Starting the game...`);
            // Redirect to the game page
            window.location.href = "rps.html"; // Adjust the path to your actual game page
        }
    });
});
