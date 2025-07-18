/* Base Styles */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
}

/* Screens */
#home-screen,
#chat-screen {
  text-align: center;
  width: 100%;
}

/* Hidden Class */
.hidden {
  display: none !important;
}

/* Buttons */
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  margin: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Quote Display */
#quote-display {
  margin-top: 20px;
  font-style: italic;
  color: #555;
}

/* Chat Window */
#chat-window {
  width: 90%;
  max-width: 400px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
}

/* Chat Messages */
#chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

/* Chat Input */
#chat-input {
  display: flex;
  padding: 10px;
  gap: 10px;
  background-color: #f9f9f9;
}

#user-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

/* Message Bubbles */
.message {
  padding: 10px 15px;
  margin: 5px 0;
  border-radius: 20px;
  max-width: 75%;
  word-wrap: break-word;
  line-height: 1.4;
}

.user-message {
  background-color: #007bff;
  color: white;
  align-self: flex-end;
  text-align: right;
}

.bot-message {
  background-color: #e9e9eb;
  color: #333;
  align-self: flex-start;
  text-align: left;
}
