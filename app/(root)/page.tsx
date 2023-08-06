"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const { user } = useUser();
  console.log(user?.publicMetadata);

  return (
    <main className="">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
