import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "./Chat";
import namer from "korean-name-generator";

const socket = io.connect("http://localhost:3001");

function App() {
  const [showChat, setShowChat] = useState(false);
  const settledRoom = "1";
  const generatedUserName = namer.generate(true);
  useEffect(() => {
    socket.emit("join_room", settledRoom);
    setShowChat(true);
  }, []);
  return (
    <div className="App">
      {showChat && (
        <Chat socket={socket} username={generatedUserName} room={settledRoom} />
      )}
    </div>
  );
}

export default App;
