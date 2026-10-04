const sidebar = document.getElementById("aiSidebar");
const content = document.getElementById("assistantContent");
const promptInput = document.getElementById("prompt");

function toggleSidebar() {
    sidebar.classList.toggle("open");
}

function suggest(text) {
    promptInput.value = text;
    promptInput.focus();
}

function sendPrompt(event) {

    event.preventDefault();

    const text = promptInput.value.trim();

    if (!text) return;

    const userMessage = document.createElement("div");

    userMessage.style.cssText = `
        background:#2563eb;
        color:white;
        padding:12px;
        border-radius:10px;
        margin:15px 0;
    `;

    userMessage.textContent = text;

    content.appendChild(userMessage);

    promptInput.value = "";

    setTimeout(() => {

        const response = document.createElement("div");

        response.className = "ai-message";

        response.textContent =
            "I've analyzed your request. This is a demo AI response.";

        content.appendChild(response);

        content.scrollTop = content.scrollHeight;

    }, 700);
}