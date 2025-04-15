import ChatHeader from "./components/ChatHeader";
import ChatList from "./components/ChatList";

const ChatSidebar = ({
  onSelectChat,
}: {
  onSelectChat?: (id: string) => void;
}) => {
  return (
    <div className="space-y-4">
      <ChatHeader />
      <ChatList onSelectChat={onSelectChat} />
    </div>
  );
};

export default ChatSidebar;
