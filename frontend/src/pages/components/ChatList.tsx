import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ChevronDown, Video, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const chats = [
  {
    id: "1",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "2",
    name: "Harold Gunderson",
    message: "Thanks Mike! :)",
    date: "12/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "3",
    name: "Katrina Bennett",
    message: "I've sent you the files for...",
    date: "16/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "4",
    name: "Charles Forstman",
    message: "Mike, this isn't over.",
    date: "18/3/2020",
    img: "https://via.placeholder.com/40",
    status: "offline",
  },
  {
    id: "5",
    name: "Jonathan Sidwell",
    message: "That's bullshit. This deal..",
    date: "24/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "6",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "7",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "8",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "9",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "10",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "11",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "1",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "12",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "12",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "13",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "14",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "15",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "16",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
  {
    id: "17",
    name: "Jessica Pearson",
    message: "Have you finished the draft...",
    date: "9/3/2020",
    img: "https://via.placeholder.com/40",
    status: "online",
  },
];

export default function ChatList({
  onSelectChat,
}: {
  onSelectChat?: (id: string) => void;
}) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleSelect = (user: { id: string }) => {
    if (isMobile) {
      navigate(`/chat/${user.id}`, { state: { user } });
    } else {
      onSelectChat?.(user.id);
    }
  };
  return (
    <Card className="w-full shadow-md rounded-lg">
      <CardHeader>
        <div className="flex justify-between">
          <Button variant="ghost" className="flex items-center gap-2">
            <Video size={18} /> Meet Now <ChevronDown size={10} />
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <MessageSquare size={18} /> New Chat <ChevronDown size={16} />
          </Button>
        </div>
        <div className="text-gray-500 flex items-center justify-between">
          RECENT CHATS <ChevronDown size={16} />
        </div>
      </CardHeader>

      <CardContent className="md:overflow-y-auto custom-scrollbar md:h-[250px]">
        {chats.map((chat, index) => (
          <div
            key={index}
            // onClick={() => navigate(`/chat/${chat.id}`, { state: { chat } })}
            onClick={() => handleSelect(chat)}
            className="flex items-center cursor-pointer gap-3 py-2 border-b border-secondary last:border-none"
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
              <p className="text-gray-500 text-xs truncate w-36">
                {chat.message}
              </p>
            </div>
            <p className="text-gray-400 text-xs">{chat.date}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
