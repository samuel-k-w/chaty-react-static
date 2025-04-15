import ChatWindow from "@/pages/components/ChatWindow";
import ChatSidebar from "@/pages/ChatSidebar";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const DesktopLayout = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1440px] mx-auto max-h-screen p-2 md:p-4">
      <aside className="col-span-1">
        <ChatSidebar onSelectChat={setSelectedChatId} />
      </aside>
      <main className="md:col-span-1 lg:col-span-2 xl:col-span-3 hidden md:block">
        {selectedChatId ? (
          <ChatWindow chatId={selectedChatId} />
        ) : (
          <Card className="flex items-center justify-center h-full">
            Select a chat
          </Card>
        )}
      </main>
    </div>
  );
};

export default DesktopLayout;
