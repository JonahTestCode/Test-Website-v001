// Get references to the necessary elements
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatLog = document.getElementById('chat-log');

// Function to handle sending the user's message
function sendMessage() {
  // Get the user's message from the input field
  const message = messageInput.value;

  // Create a new chat message element
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('message', 'user-message');
  chatMessage.textContent = message;

  // Append the message to the chat log
  chatLog.appendChild(chatMessage);

  // Clear the input field
  messageInput.value = '';

  // Scroll to the bottom of the chat log
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Event listener for the "Send" button click
sendButton.addEventListener('click', sendMessage);

// Function to adjust the input field's height based on its content
function adjustInputHeight() {
  messageInput.style.height = 'auto';
  messageInput.style.height = messageInput.scrollHeight + 'px';
}

// Event listener for input events (e.g., typing)
messageInput.addEventListener('input', adjustInputHeight);

// Initial adjustment of input field's height on page load
adjustInputHeight();

// Add a keydown event listener to the message input field
messageInput.addEventListener('keydown', (event) => {
  // Check if the pressed key is the Enter key (key code 13)
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent the default behavior of the Enter key

    // Trigger the send button's click event
    sendButton.click();
  }
});
