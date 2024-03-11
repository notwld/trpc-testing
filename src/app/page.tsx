"use client";
import Image from "next/image";
import { trpc } from "@/server/trpc/client"

export default function Home() {
  const{data, isLoading, isError, } = trpc.tasks.getTasks.useQuery({name: "test", description: "test"})
  return (
   <div className="padding-4">
      {data?.name}
   </div>
  );
}
