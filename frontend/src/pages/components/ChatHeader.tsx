import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Phone, Users, Bell } from "lucide-react";

export default function ChatHeader() {
  return (
    <Card className="w-80 shadow-md rounded-lg">
      <CardHeader className="flex items-center gap-3">
        <Avatar>
          <AvatarImage
            src="https://via.placeholder.com/40"
            alt="Samuel Kifle"
          />
          <AvatarFallback>SK</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-medium">Samuel Kifle</p>
        </div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </CardHeader>
      <CardContent className="mt-3 relative">
        <Search className="absolute left-8 top-3 text-gray-500" size={16} />
        <Input
          placeholder="People, groups, & messages"
          className="pl-8 text-sm"
        />
      </CardContent>
      <div className="flex justify-around mt-4 text-gray-600 text-sm">
        <Button variant="ghost" className="flex flex-col items-center">
          <MessageCircle size={18} />
          <span>Chats</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <Phone size={18} />
          <span>Calls</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <Users size={18} />
          <span>Contacts</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <Bell size={18} />
          <span>Notifications</span>
        </Button>
      </div>
    </Card>
  );
}
