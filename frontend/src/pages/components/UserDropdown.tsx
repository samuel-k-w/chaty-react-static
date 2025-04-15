import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  //   Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DarkMode } from "@/components/DarkMode";
// import {
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
// import { User } from "@/types/auth";
import { useLogout } from "@/hooks/useAuth";

export interface User {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  avatar: string;
  accessToken: string;
}

const user: User = {
  id: "new",
  lastName: "K",
  firstName: "Samuel",
  email: "sk@gm.com",
  avatar: "new",
  accessToken: "token",
};

// export function NavUser({ user }: { user: User }) {
export function UserDropdown() {
  //   const { isMobile } = useSidebar();
  const logout = useLogout();
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center gap-4">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={user.avatar} alt={user.firstName[0]} />
            <AvatarFallback className="rounded-lg">
              {user.firstName[0] + user.lastName[0]}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{user.firstName}</span>
            <span className="truncate text-xs">{user.email}</span>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        // side={isMobile ? "bottom" : "right"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.firstName} />
              <AvatarFallback className="rounded-lg">
                {user.firstName[0] + user.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.firstName}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <DarkMode />
            Theme
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate("/profile")}>
            <BadgeCheck />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
          //   onClick={() => navigate("/billing")}
          >
            <CreditCard />
            Billing
          </DropdownMenuItem>

          <DropdownMenuItem
          //   onClick={() => navigate("/notifications")}
          >
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => logout.mutate()}
          className="bg-red-600"
        >
          <LogOut />
          {logout.isPending ? "Logging Out" : "Log out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
