import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Atom,
  AudioLines,
  Cpu,
  Globe,
  Mic,
  Paperclip,
  SearchCheck,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Aimodels } from "@/Services/Shared.jsx";

const ChatinputBox = () => {
  console.log(Aimodels);
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full">
      <Image src={`/logo.png`} alt="logo" width={250} height={250} />
      <div className="max-w-2xl border rounded-2xl mt-10 w-full p-2">
        <div className="flex  justify-between items-end">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsContent value="Search">
              <input
                type="text"
                placeholder="Ask anything"
                className="w-full p-4 outline-none"
              />
            </TabsContent>
            <TabsContent value="Research">
              <input
                type="text"
                placeholder="Research  Anything"
                className="w-full p-4 outline-none"
              />
            </TabsContent>

            <TabsList>
              <TabsTrigger className={"text-primary"} value="Search">
                <SearchCheck /> Search
              </TabsTrigger>
              <TabsTrigger className={"text-primary"} value="Research">
                <Atom />
                Research
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex gap-4 items-center ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"ghost"}>
                  <Cpu className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}

                {Aimodels.map((model, index) => (
                  <DropdownMenuItem key={index}>
                    <div>
                      <h2>{model.name}</h2>
                      <p className="text-sm text-gray-400">{model.desc}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant={"ghost"}>
              <Globe className="h-4 w-4 text-gray-500" />
            </Button>
            <Button variant={"ghost"}>
              <Paperclip className="h-4 w-4 text-gray-500" />
            </Button>
            <Button variant={"ghost"}>
              <Mic className="h-4 w-4 text-gray-500" />
            </Button>
            <Button>
              <AudioLines className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatinputBox;
