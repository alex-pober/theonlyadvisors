import Logo from "@/public/logo.png"
import Image from "next/image"
import Link from "next/link"
import NavBarButton from "./NavBarButton"
export default function NavBar() {

  return (
    <div className="flex min-w-full items-center justify-around p-3 bg-transparent gap-12 h-16">
      <NavBarButton href="/why-us">
        Why us
      </NavBarButton>
      <Link href="/">
        <Image alt="logo image" src={Logo} width={100} height={60} />
      </Link>
      <NavBarButton href="/contact-us">
        Contact us
      </NavBarButton>
    </div>
  )
}
