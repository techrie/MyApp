import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";
import { nanoid } from "nanoid";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    console.log("API call");
    let interval = setInterval(() => {
      //API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 bg-slate-100 border border-black overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((message) => (
          <ChatMessage
            key={nanoid()}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="w-full ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Kevin Josh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[20rem] px-2 border border-gray-400"
          type="text"
          placeholder="Type a new message"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-1 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
