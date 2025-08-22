import React, { useState } from "react";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type here..."
        rows={3}
        style={{ width: "100%", fontSize: "16px" }}
      />
      <button onClick={() => alert(message)}>Send</button>
    </div>
  );
}
