// Room.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMessageStore from "../hooks/useMessageStore";
import { messageStore } from "../stores/MessageStore"; // 이 줄 추가

const Room = () => {
  const { messageLogs } = useMessageStore();
  const { post_no } = useParams();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const fetchInitialMessages = async () => {
      try {
        await messageStore.connectAndSubscribe(post_no);
        setConnected(true);
        console.log(connected) ; // 확인용 로그
        // 이후의 코드 실행 확인
        const response = await fetch(`http://localhost:8080/studyRoom/post/${post_no}`);
        const responseData = await response.json();
        messageStore.updateMessageLogs(responseData);
        messageStore.subscribe(() => {
          // WebSocket 메시지 수신 시 로그를 추가할 수 있습니다.
          console.log("Received a new message:", messageStore.messageLogs);
        });
      } catch (error) {
        console.error('Error fetching initial messages:', error);
      }
    };
  
    fetchInitialMessages();
  
    return () => {
      messageStore.disconnect();
    };
  }, [post_no]);

  const beforeUnloadListener = () => {
    messageStore.disconnect();
  };

  useEffect(() => {
    window.addEventListener("beforeunload", beforeUnloadListener);

    return () => {
      window.removeEventListener("beforeunload", beforeUnloadListener);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    messageStore.sendMessage({ type: "message" });
  };

  const handleChangeInput = (event) => {
    const { value } = event.target;
    messageStore.changeInput(value);
  };

  if (!connected) {
    return null;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message-to-send">메시지 입력</label>
        <input
          type="text"
          value={messageStore.messageEntered}
          onChange={handleChangeInput}
        />
        <button type="submit">전송</button>
      </form>
      <ul>
  {messageLogs.map((message) => (
    <li key={message.message_id}>
      {message.userId} : {message.message || message.value} ({new Date(message.timestamp).toLocaleTimeString()})
    </li>
  ))}
</ul>
    </div>
  );
};

export default Room;
