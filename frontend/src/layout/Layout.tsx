import ChatPage from "@/pages/ChatPage";
import ChatSidebar from "@/pages/ChatSidebar";

const Layout = () => {
  return (
    <div className="grid grid-cols-3 max-w-[1440px] mx-auto max-h-screen h-screen p-4">
      <aside>
        <ChatSidebar />
      </aside>
      <main className="col-span-2">
        <ChatPage />
      </main>
    </div>
  );
};

export default Layout;
