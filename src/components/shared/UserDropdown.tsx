"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutUser } from "@/services/auth/logoutUser";
import { UserInfo } from "@/types/user.interface";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Settings, LogOut, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface UserDropdownProps {
  user: UserInfo;
}

const UserDropdown = ({ user }: UserDropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logoutUser();
  };

  const isAdmin = user.role === "ADMIN";

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <div
            className="flex items-center gap-2 cursor-pointer group py-2"
            suppressHydrationWarning
          >
            <div className="relative w-10 h-10 border-2 border-[#19bfc3] rounded-full overflow-hidden transition-transform group-hover:scale-105">
              <div className=" w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src={user.profilePhoto || "https://github.com/shadcn.png"}
                  alt={user.name || "User"}
                  fill
                  className="object-cover"
                  sizes="40px"
                  priority={false}
                />
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-start leading-none">
              <span className="text-xs font-bold text-neutral-700">
                {user.name.split(" ")[0]}
              </span>
              <span className="text-[10px] text-neutral-400 capitalize">
                {user.role.toLowerCase()}
              </span>
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-64 p-2 rounded-xl shadow-2xl border-neutral-100 bg-white"
        >
          <DropdownMenuLabel className="font-normal p-4">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold text-neutral-800">
                {user.name}
              </p>
              <p className="text-xs text-neutral-500 truncate">{user.email}</p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="bg-neutral-100" />

          {isAdmin ? (
            <div className="py-2 space-y-1">
              <DropdownMenuItem
                asChild
                className="rounded-lg cursor-pointer focus:bg-[#07B4B0] focus:text-white group/item"
              >
                <Link
                  href="/admin/manage-products"
                  className="flex items-center w-full"
                >
                  <LayoutDashboard className="mr-2 h-4 w-4 text-teal-600 group-focus/item:text-white" />
                  <span className="text-sm font-medium">Manage Products</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="rounded-lg cursor-pointer focus:bg-[#07B4B0] focus:text-white group/item"
              >
                <Link
                  href="/admin/manage-banner"
                  className="flex items-center w-full"
                >
                  <Settings className="mr-2 h-4 w-4 text-teal-600 group-focus/item:text-white" />
                  <span className="text-sm font-medium">Manage Banner</span>
                </Link>
              </DropdownMenuItem>
            </div>
          ) : (
            <div className="py-2">
              <DropdownMenuItem
                asChild
                className="rounded-lg cursor-pointer focus:bg-[#07B4B0] focus:text-white group/item"
              >
                <Link href="/cart" className="flex items-center w-full">
                  <ShoppingCart className="mr-2 h-4 w-4 text-orange-600 group-focus/item:text-white" />
                  <span className="text-sm font-medium">Your Cart</span>
                </Link>
              </DropdownMenuItem>
            </div>
          )}

          <DropdownMenuSeparator className="bg-neutral-100" />

          <DropdownMenuItem
            onClick={handleLogout}
            className="rounded-lg cursor-pointer text-red-600 focus:bg-[#07B4B0] p-3 font-semibold mt-1"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdown;
