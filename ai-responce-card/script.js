const response = document.getElementById("response");
const feedbackMessage = document.getElementById("feedback");

function copyResponse() {

    navigator.clipboard.writeText(response.innerText);

    feedbackMessage.textContent = "Response copied to clipboard!";
}

function regenerate() {

    feedbackMessage.textContent = "Generating a new response...";

    setTimeout(() => {

        response.innerHTML = `
            <p>
                AI interfaces combine natural language with interactive
                visual components to make digital products easier to use.
            </p>

            <p>
                Good AI interfaces provide clear feedback, useful suggestions,
                transparent responses, and simple controls for users.
            </p>
        `;

        feedbackMessage.textContent = "Response regenerated!";
    }, 800);
}

function feedback(type) {
    feedbackMessage.textContent =
        `Thanks! You marked this response as "${type}".`;
}