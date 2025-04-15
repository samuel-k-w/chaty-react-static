import Conversation from "./Conversation";
import MessageInput from "./MessageInput";
import OpenChatHeader from "./OpenChatHeader";

const ChatWindow = ({ chatId }: { chatId: string | null }) => {
  return (
    <div className="space-y-2">
      <OpenChatHeader />
      <Conversation chatId={chatId} />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
