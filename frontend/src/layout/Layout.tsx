import ChatPage from "@/pages/ChatPage";
import ChatSidebar from "@/pages/ChatSidebar";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1440px] mx-auto max-h-screen p-2 md:p-4">
      <aside className="col-span-1">
        <ChatSidebar />
      </aside>
      <main className="md:col-span-1 lg:col-span-2 xl:col-span-3 hidden md:block">
        <ChatPage />
      </main>
    </div>
  );
};

export default Layout;
