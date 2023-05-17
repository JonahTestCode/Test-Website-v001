// Get a reference to the restart button
const restartButton = document.getElementById('restart-button');

// Add a click event listener to the restart button
restartButton.addEventListener('click', () => {
  // Clear the chat log by setting its innerHTML to an empty string
  const chatLog = document.getElementById('chat-log');
  chatLog.innerHTML = '';
});
