import { Input } from "./ui/input";
import { IconSearch } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function NavBar() {
  return (
    <div className="w-full h-16 sticky py-4 flex justify-between items-center bg-white px-14">
      <div className="relative">
        <Input
          className="w-96 border border-gray-400 pl-8 focus-visible:ring-0 focus-visible:ring-offset-0"
          type="text"
          placeholder="search tickets..."
        />
        <IconSearch className="absolute top-2 left-2" size={18} stroke={2} />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center space-x-4 cursor-pointer outline-none border-none focus:ring-0 focus:ring-offset-0">
            <div>
              <p className="font-semibold">Youssef Ababou</p>
              <span className="flex justify-end text-gray-800">Admin</span>
            </div>
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default NavBar;
