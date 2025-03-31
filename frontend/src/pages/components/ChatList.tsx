import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Video, MessageSquare } from "lucide-react";

const chats = [
  {
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    name: "Harold Gunderson",
    message: "Thanks Mike! :)",
    date: "12/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    name: "Katrina Bennett",
    message: "I've sent you the files for...",
    date: "16/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    name: "Charles Forstman",
    message: "Mike, this isn't over.",
    date: "18/3/2020",
    img: "https://via.placeholder.com/40",
    status: "offline",
  },
  {
    name: "Jonathan Sidwell",
    message: "That's bullshit. This deal..",
    date: "24/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
];

export default function ChatList() {
  return (
    <Card className="w-80 shadow-md rounded-lg p-4">
      <div className="flex justify-between mb-4">
        <Button variant="ghost" className="flex items-center gap-2">
          <Video size={18} /> Meet Now <ChevronDown size={16} />
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <MessageSquare size={18} /> New Chat <ChevronDown size={16} />
        </Button>
      </div>
      <div className="text-gray-500 text-sm flex items-center justify-between mb-2">
        RECENT CHATS <ChevronDown size={16} />
      </div>
      <div>
        {chats.map((chat, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-none"
          >
            <div className="relative">
              <Avatar>
                <AvatarImage src={chat.img} alt={chat.name} />
                <AvatarFallback>{chat.name[0]}</AvatarFallback>
              </Avatar>
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                  chat.status === "online" ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">{chat.name}</p>
              <p className="text-gray-500 text-xs truncate w-40">
                {chat.message}
              </p>
            </div>
            <p className="text-gray-400 text-xs">{chat.date}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
