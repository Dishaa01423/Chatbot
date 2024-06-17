function sendMessage() {
    const inputField = document.getElementById('input-field');
    const chatArea = document.getElementById('chat-area');
    const userMessage = inputField.value.trim();

    if (userMessage) {
        chatArea.innerHTML += `<p><strong>Me:</strong> ${userMessage}</p>`;
        inputField.value = '';

        fetch('/api/v1/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        })
        .then(response => response.json())
        .then(data => {
            if (data.response) {
                chatArea.innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
            } else {
                chatArea.innerHTML += `<p><strong>Bot:</strong> Error: ${data.error}</p>`;
            }
            chatArea.scrollTop = chatArea.scrollHeight;
        })
        .catch(error => {
            chatArea.innerHTML += `<p><strong>Bot:</strong> Error: ${error.message}</p>`;
            chatArea.scrollTop = chatArea.scrollHeight;
        });
    }
}
