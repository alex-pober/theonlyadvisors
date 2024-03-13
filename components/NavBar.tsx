import Logo from "@/public/logo.png"
import Image from "next/image"
import Link from "next/link"
export default function NavBar() {
  return (
    <div className="flex min-w-full items-center justify-around p-4 bg-transparent gap-12">
      <Link href="#" className="text-bungee w-[110px] justify-center flex text-toa-5">
        Why us
      </Link>
      <Link href="#">
        <Image alt="logo image" src={Logo} width={100} height={60} />
      </Link>
      <Link href="#" className="text-bungee w-[110px] text-toa-5">
        Contact us
      </Link>
    </div>
  )
}
