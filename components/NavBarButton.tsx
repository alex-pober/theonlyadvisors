'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function NavBarButton({children, href}: {children: any, href: string}){
 const route = usePathname()
 console.log(route)
 return (
  <Link href={href} className={`text-bungee w-[115px] justify-center flex ${href === route ? 'text-toa-5/25' : "text-toa-5"}`}>
    {children}
  </Link>
 )
}
