import { useIsMobile } from "@/hooks/useIsMobile";
import ChatSidebar from "./ChatSidebar";
import DesktopLayout from "@/layout/DesktopLayout";

const HomePage = () => {
  const isMobile = useIsMobile();

  return isMobile ? <ChatSidebar /> : <DesktopLayout />;
};

export default HomePage;
