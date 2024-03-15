import Image from "next/image";
import Palette from '@/public/vercel.svg'
import { Flex, Text, Button } from '@radix-ui/themes';
import NavBar from "@/components/NavBar";
import FourPillars from "@/components/FourtPillars";
import WelcomeToTOA from "@/components/WelcomeToTOA";
export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-screen-lg m-auto">
      <NavBar />
      <div className="max-w-screen-md w-full px-3">
        <h1 className="text-bungee text-5xl w-full text-toa-3">
          An Agency By Women
        </h1>
        <h1 className="text-bungee text-5xl text-toa-4 mr-[2.25rem] w-full flex flex-row-reverse ">
          For Woman
        </h1>
      </div>
      <WelcomeToTOA />
      <FourPillars />
    </main>
  );
}
