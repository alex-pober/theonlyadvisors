import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import LegacyIcon from "@/public/legacy-icon.png";
import EngagementIcon from "@/public/fan-engagement-icon.png";
import CreativtyIcon from "@/public/creativity-innovation-icon.png";
import GrowthIcon from "@/public/strategic-growth-icon.png";
export default function FourPillars() {
  return (
    <div className="flex flex-wrap items-center justify-around p-4 bg-transparent gap-8 max-w-screen-lg">
      <div className="max-w-sm">
        <Image
          src={EngagementIcon}
          width={100}
          height={100}
          alt="Engangemnt Icon"
          className="mb-5"
        />
        <h1 className="text-bungee text-toa-5 text-xl font-bold">
          Fan Engagement
        </h1>
        <p className="leading-6 font-semibold">
          Cultivating deep connections with your audience is crucial. TOA
          streamlines your DMs to boost engagement, tips, and the average fan
          contribution via our FlirtFirst method, ensuring every interaction
          strengthens your fanbase and enhances earnings
        </p>
      </div>

      <div className="max-w-sm">
        <Image
          src={CreativtyIcon}
          width={100}
          height={100}
          alt="Creativty Icon"
          className="mb-5"
        />
        <h1 className="text-bungee text-toa-5 text-xl font-bold">
          Creativity & Innovation
        </h1>
        <p className="leading-6 font-semibold">
          We provide the space for your creativity to flourish, handling all the
          rest. Our commitment ensures your content achieves maximum impact and
          revenue, freeing you to focus on what you do best.{" "}
        </p>
      </div>

      <div className="max-w-sm">
        <Image src={GrowthIcon} width={100} height={100} alt="Growth Icon" className="mb-5"/>
        <h1 className="text-bungee text-toa-5 text-xl font-bold">
          Strategic Growth
        </h1>
        <p className="leading-6 font-semibold">
          We guide you in cultivating and maintaining a lucrative fan base by
          selecting the optimal tools and channels tailored for you, while
          dynamically refining strategies to escalate your accounts growth.{" "}
        </p>{" "}
      </div>

      <div className="max-w-sm">
        <Image src={LegacyIcon} width={100} height={100} alt="Legacy Icon" className="mb-5" />

        <h1 className="text-bungee text-toa-5 text-xl font-bold">Legacy</h1>
        <p className="leading-6 font-semibold">
          We ensure seamless implementation, named Operation Momentum, focusing
          on precise execution and strategic advancement. Our approach
          guarantees not only the growth of your fan base but also the
          optimization of your accounts profitability and impact.
        </p>
      </div>
    </div>
  );
}
