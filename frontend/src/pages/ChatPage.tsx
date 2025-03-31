import Conversation from "./components/Conversation";
import MessageInput from "./components/MessageInput";
import OpenChatHeader from "./components/OpenChatHeader";

const ChatPage = () => {
  return (
    <div className="space-y-2">
      <OpenChatHeader />
      <Conversation />
      <MessageInput />
    </div>
  );
};

export default ChatPage;
