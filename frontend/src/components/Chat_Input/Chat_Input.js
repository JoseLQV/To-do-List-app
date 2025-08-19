import React, { useState, useRef, useEffect } from "react";
import "./Chat_Input.css";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

useEffect(() => {
  const ta = textareaRef.current;
  if (!ta) return; 
  ta.style.height = "auto"; 
  ta.style.height = Math.max(ta.scrollHeight, 30) + "px"; 
}, [message]);


const handleSend = () => {
  if (!message.trim()) return; 
  console.log("Message:", message);
  setMessage("");
};


  return (
    <div className="chat-input-container">

      <textarea
        ref={textareaRef}
        className="chat-input-field"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={1}
      />
      <button className="chat-send-button" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
