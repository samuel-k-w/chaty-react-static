import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Phone, Users, Bell } from "lucide-react";
import { UserDropdown } from "./UserDropdown";

export default function ChatHeader() {
  return (
    <Card className="w-full mr-4 shadow-md rounded-lg">
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <UserDropdown />
        </div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </CardHeader>

      <CardContent className="relative">
        <Search className="absolute left-8 top-3 text-gray-500" size={16} />
        <Input
          placeholder="People, groups, & messages"
          className="pl-8 text-sm"
        />
      </CardContent>

      <div className="flex justify-around text-primary">
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
