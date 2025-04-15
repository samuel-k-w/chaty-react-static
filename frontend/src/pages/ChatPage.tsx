import { useParams } from "react-router-dom";
import ChatWindow from "./components/ChatWindow";

const ChatPage = () => {
  const { id } = useParams();

  return <ChatWindow chatId={id || null} />;
};

export default ChatPage;
