import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Stomp from 'react-stomp';

const StompComponent = forwardRef((props, ref) => (
  <Stomp ref={ref} {...props} />
));

const Chat = ({ post_no }) => {
  const stompRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (stompRef.current && stompRef.current.sockJsClient) {
      if (stompRef.current.sockJsClient.readyState === WebSocket.OPEN) {
        stompRef.current.sendMessage(
          `/app/chat/${post_no}`,
          {},
          JSON.stringify({
            type: 'YOUR_MESSAGE_TYPE',
            roomId: post_no,
            userId: 1,
            message: newMessage,
          })
        );
      } else {
        console.error('Stomp client is not connected.');
      }
    } else {
      console.error('Stomp client is not initialized.');
    }
  };

  const handleMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>

      <StompComponent
        ref={(node) => (stompRef.current = node)}
        url={`https://localhost:8080/chat/${post_no}`}
        topics={[`/topic/chat/${post_no}`]}
        onMessage={(msg) => handleMessage(JSON.parse(msg.body))}
      />
    </div>
  );
};

export default Chat;
