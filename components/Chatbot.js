"use client";


import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hi! How can I help you today?" }]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, newMessage]);

    // Add a bot response
    const botResponse = getBotResponse(userInput);
    setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);

    setUserInput(""); // Clear input field
  };

  const getBotResponse = (input) => {
    // Define static bot responses
    const responses = {
      hello: "Hello! Nice to meet you!",
      projects: "You can check out my projects in the Projects section.",
      contact: "You can find my contact details in the Contact section.",
    };

    const lowerInput = input.toLowerCase();
    return responses[lowerInput] || "Sorry, I didn't understand that. Try asking about 'projects' or 'contact'.";
  };

  return (
    <div className="fixed bottom-4 right-4 w-72 bg-white shadow-lg rounded-2xl border p-4">
      <div className="h-64 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.sender === "bot" ? "text-left" : "text-right"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.sender === "bot" ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-grow p-2 border rounded-l-lg focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
