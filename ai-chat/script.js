const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");
const typing = document.getElementById("typing");

function sendMessage(event) {
    event.preventDefault();

    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    typing.style.display = "block";

    setTimeout(() => {

        typing.style.display = "none";

        addMessage(
            "That's an interesting question! I'm your demo AI assistant. I can help you explore that idea.",
            "ai"
        );

    }, 1000);
}

function addMessage(text, type) {

    const message = document.createElement("div");
    message.className = `message ${type}`;

    if (type === "ai") {

        message.innerHTML = `
            <div class="avatar">AI</div>
            <div class="bubble">${text}</div>
        `;

    } else {

        message.innerHTML = `
            <div class="bubble">${text}</div>
        `;
    }

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
}

function newChat() {
    messages.innerHTML = `
        <div class="message ai">
            <div class="avatar">AI</div>
            <div class="bubble">
                New conversation started. How can I help?
            </div>
        </div>
    `;
}