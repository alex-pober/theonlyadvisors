'use client'
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavBarButton from "./NavBarButton";
import logo2d from '@/public/logo2D.svg'
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  if (pathname === '/contact/avi' || pathname === '/contact/alex') {
    return null;
  }

  return (
    <div className="flex max-w-screen-md items-center m-auto justify-around p-3 bg-transparent gap-12 h-16">
      <Link href="/">
        <Image alt="logo image" src={logo2d} width={100} height={60} />
      </Link>

      <div className="flex">
        <NavBarButton href="/why-us">Why us</NavBarButton>
        <NavBarButton href="/faq">FAQ</NavBarButton>
        <NavBarButton href="/contact-us">Contact us</NavBarButton>
      </div>
    </div>
  );
}
