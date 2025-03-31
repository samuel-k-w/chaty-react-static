import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Video, Phone, Users } from "lucide-react";

export default function OpenChatHeader() {
  return (
    <div className="flex items-center justify-between p-2 border rounded-lg shadow-md w-full">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage src="/placeholder.jpg" alt="Harvey Inspector" />
          <AvatarFallback>HI</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold text-lg">Harvey Inspector</h2>
          <p className="text-sm text-green-600">● Active Now</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button variant="ghost" size="icon">
          <Video className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Phone className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Users className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
