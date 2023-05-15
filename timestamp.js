// Function to handle sending the user's message
function sendMessage() {
    // Get the user's message from the input field
    const message = messageInput.value;
  
    // Create a new chat message element
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('message', 'user-message');
    
    // Create a timestamp element
    const timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');
    const currentTime = new Date().toLocaleTimeString();
    timestamp.textContent = currentTime;
  
    // Create a message content element
    const messageContent = document.createElement('span');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;
  
    // Append the timestamp and message content to the chat message element
    chatMessage.appendChild(timestamp);
    chatMessage.appendChild(messageContent);
  
    // Append the message to the chat log
    chatLog.appendChild(chatMessage);
  
    // Clear the input field
    messageInput.value = '';
  
    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
  // ... rest of your JavaScript code ...
  