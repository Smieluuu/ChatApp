import React, { useState } from "react";
import Websocket from "react-websocket";
import { Props } from "./index.types";

const Chat: React.FC<Props> = (props: Props) => {
  const { nickname } = props;
  const websocketRef = React.createRef();
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  return (
    <div className="Chat">
      <Websocket
        ref={websocketRef}
        url={`ws://localhost:8080?nickname=${nickname}`}
        onMessage={(message: string) => {
          setMessages([...messages, message]);
        }}
      />
      <div className="messages">
        {messages.map((message) => (
          <div key={message} className="message">
            {message}
          </div>
        ))}
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          (websocketRef.current as any)?.sendMessage(newMessage);
          setNewMessage("");
        }}
      >
        <input
          type="text"
          value={newMessage}
          onChange={(event) => {
            setNewMessage(event.target.value);
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
