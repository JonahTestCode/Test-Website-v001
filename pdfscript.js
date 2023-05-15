// Get a reference to the download button
const downloadButton = document.getElementById('download-button');

// Add a click event listener to the download button
downloadButton.addEventListener('click', () => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Get the chat log container element
  const chatLog = document.getElementById('chat-log');

  // Get all the chat messages
  const messages = chatLog.getElementsByClassName('message');

  // Loop through each message and add it to the PDF
  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    doc.text(message.innerText, 10, 10 + (i * 10)); // Adjust the position as needed
  }

  // Save the PDF as a file
  doc.save('chatlog.pdf');
});
