const promptBox = document.getElementById("prompt");
const count = document.getElementById("count");
const result = document.getElementById("result");

function updateCount() {
    count.textContent = `${promptBox.value.length} / 500`;
}

function usePrompt(text) {
    promptBox.value = text;
    updateCount();
    promptBox.focus();
}

function generate() {

    const prompt = promptBox.value.trim();

    if (!prompt) {
        alert("Please enter a prompt first.");
        return;
    }

    result.style.display = "block";

    result.innerHTML = `
        <strong>AI is generating...</strong>
    `;

    setTimeout(() => {

        result.innerHTML = `
            <h3>AI Response</h3>
            <p>
                Based on your prompt:
                <strong>${prompt}</strong>
            </p>
            <br>
            <p>
                This is a demonstration of an AI-generated response.
                A real application could connect this interface to an AI API.
            </p>
        `;

    }, 1000);
}