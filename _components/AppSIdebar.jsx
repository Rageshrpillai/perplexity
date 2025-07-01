"use client";
import React from "react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Compass, GalleryHorizontalEnd, LogIn, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const MenuOptions = [
  {
    title: "Home",
    icon: Search,
    path: "/",
  },
  {
    title: "Discover",
    icon: Compass,
    path: "/discover",
  },
  {
    title: "Library",
    icon: GalleryHorizontalEnd,
    path: "/library",
  },
  {
    title: "Sign in",
    icon: LogIn,
    path: "/sign-in",
  },
];

const AppSIdebar = () => {
  const { user } = useUser();
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center py-5 bg-[#eff0eb]">
        <Image src={"/logo.png"} width={180} height={100} alt="logo" />
      </SidebarHeader>

      <SidebarContent className="bg-[#eff0eb]">
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {/* { mapping */}
              {MenuOptions.map((menu, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={`p-5 py-7 hover:bg-transparent hover:font-bold ${
                      path === menu.path && `font-black`
                    }
                    }`}
                  >
                    <a className="flex col-auto" href={menu.path}>
                      <menu.icon className="h-8 w-8" />
                      <span className="text-lg">{menu.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            {!user ? (
              <SignUpButton mode="modal">
                <Button className={`rounded-full mx-4 mt-4`}>Sign UP</Button>
              </SignUpButton>
            ) : (
              <SignOutButton>
                <Button className={`rounded-full mx-4 mt-4`}>Logout</Button>
              </SignOutButton>
            )}
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={` bg-[#eff0eb]`}>
        <div className="p-3 flex flex-col">
          <h2 className="text-gray-500">Try Now</h2>
          <p className="text-gray-400">
            Upgrade for image upload , smarter Ai & more copilot{" "}
          </p>
          <Button
            className={` mb-4 bg-[#ffffff] text-gray-400`}
            variant={"ghost"}
          >
            Learn More
          </Button>

          <UserButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSIdebar;
