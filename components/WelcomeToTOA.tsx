import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import LegacyIcon from "@/public/legacy-icon.png";
import EngagementIcon from "@/public/fan-engagement-icon.png";
import CreativtyIcon from "@/public/creativity-innovation-icon.png";
import GrowthIcon from "@/public/strategic-growth-icon.png";
export default function WelcomeToTOA() {
  return (
    <div className="w-screen bg-toa-4 my-5">
      <div className="flex flex-wrap p-9 bg-transparent gap-8 max-w-screen-md m-auto justify-center">
        <h1 className="text-bungee text-toa-1 text-2xl font-bold max-w-[300px]">
          Welcome to The Only Advisors
        </h1>
        <p className="leading-5 font-semibold text-toa-1 max-w-xs">
          The forefront of AI innovation. At TOA, we transcend traditional social
          media management, pioneering a transformative approach for OnlyFans
          creators to amplify their reach. Our core mission? To empower creators
          with unparalleled support. Join us on this journey and unlock the full
          potential of your OnlyFans account with TOA at your side.
        </p>
      </div>
    </div>
  );
}
