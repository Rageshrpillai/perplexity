"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import supabase from "@/Services/supabase";

const Provider = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    //if new user exist ?

    let { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", user?.primaryEmailAddress.emailAddress);

    console.log(users);
    if (users.length == 0) {
      const { data, error } = await supabase
        .from("users")
        .insert([
          {
            name: user?.fullName,
            email: user?.primaryEmailAddress.emailAddress,
          },
        ])
        .select();
      console.log(data);
    }
  };
  return <div className="w-full">{children}</div>;
};

export default Provider;
