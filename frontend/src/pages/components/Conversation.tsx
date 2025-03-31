import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const messages = [
  {
    id: 1,
    sender: "you",
    text: "codervent is the author of this admin template",
    time: "3:22 PM",
    gradient: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
  {
    id: 2,
    sender: "Harvey",
    text: "ohh i know about this author. he has good admin products in his portfolio.",
    time: "3:16 PM",
    gradient: "bg-gradient-to-r from-blue-600 to-cyan-400",
  },
  {
    id: 3,
    sender: "you",
    text: "yes, codervent has multiple admin templates. also he is very supportive.",
    time: "3:30 PM",
    gradient: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
  {
    id: 4,
    sender: "Harvey",
    text: "All the best for your target. thanks for giving your time.",
    time: "3:33 PM",
    gradient: "bg-gradient-to-r from-blue-600 to-cyan-400",
  },
  {
    id: 5,
    sender: "you",
    text: "thanks Harvey",
    time: "3:35 PM",
    gradient: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
];

export default function Conversation() {
  return (
    <Card className="w-full border rounded-lg shadow-md overflow-y-auto custom-scrollbar h-[500px]">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={cn(
            "flex items-start space-x-2 mb-2",
            msg.sender === "you" && "justify-end"
          )}
        >
          {msg.sender !== "you" && (
            <Avatar>
              <AvatarImage src="/harvey.jpg" alt="Harvey" />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
          )}
          <div className="flex flex-col max-w-[70%]">
            <p className="text-xs text-gray-500">
              {msg.sender}, {msg.time}
            </p>
            <div
              className={cn("text-white px-4 py-2 rounded-lg", msg.gradient)}
            >
              {msg.text}
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
}
