'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function NavBarButton({children, href}: {children: any, href: string}){
 const route = usePathname()
 console.log(route)
 return (
  <Link href={href} className={`text-bungee text-nowrap justify-center flex mx-2 ${href === route ? 'text-toa-5/25' : "text-toa-5"}`}>
    {children}
  </Link>
 )
}
