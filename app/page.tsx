import Image from "next/image";
import Palette from '@/public/vercel.svg'
import { Flex, Text, Button } from '@radix-ui/themes';
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-screen-lg m-auto">
      <NavBar />
      <h1 className="text-bungee text-5xl text-toa-3 m-5">
        An Agency By Women
      </h1>
      <h1 className="text-bungee text-5xl text-toa-4 w-screen mr-[2.25rem] flex flex-row-reverse ">
        For Woman
      </h1>
    </main>
  );
}
