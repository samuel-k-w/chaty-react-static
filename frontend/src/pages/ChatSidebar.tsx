import ChatHeader from "./components/ChatHeader";
import ChatList from "./components/ChatList";

const ChatSidebar = () => {
  return (
    <div className="space-y-4">
      <ChatHeader />
      <ChatList />
    </div>
  );
};

export default ChatSidebar;
