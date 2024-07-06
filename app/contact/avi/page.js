import logo2d from '@/public/logo2D.svg'
import Image from 'next/image';
import { Phone, Link, Mail, Download } from 'lucide-react';
export default function Avi() {
  return (
    <div className=" max-w-screen-lg m-auto mt-8 h-3/4 flex flex-col gap-5">
      <div className="text-center p-2 flex flex-col gap-4">
        <div className='m-auto p-3'>
          <Image alt="logo image" src={logo2d} width={100} height={60} />
        </div>
        <h1 className="text-bungee text-toa-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Avi
        </h1>
        <p className="text-inter text-gray-500 text-base sm:text-xl/relaxed md:text-xl/relaxed lg:text-xl/relaxed dark:text-gray-400">
          COO
        </p>
      </div>

      <div className="max-w-screen-md px-4">
        <div className="flex items-center justify-between w-full p-5 rounded-xl border border-gray-200 text-left shadow-sm">
          <span className="text-inter text-toa-5 font-medium flex">
            <Phone className='mr-5' />(818) 988-8888
          </span>
        </div>
      </div>

      <div className="max-w-screen-md px-4">
        <div className="flex items-center justify-between w-full p-5 rounded-xl border border-gray-200 text-left shadow-sm">
          <span className="text-inter text-toa-5 font-medium flex">
            <Link className='mr-5' />theonlyadvisors.com
          </span>
        </div>
      </div>

      <div className="max-w-screen-md px-4">
        <div className="flex items-center justify-between w-full p-5 rounded-xl border border-gray-200 text-left shadow-sm">
          <span className="text-inter text-toa-5 font-medium flex">
            <Mail className='mr-5' />info@theonlyadvisors.com
          </span>
        </div>
      </div>

      <a
        href="/Avi.vcf"
        download="Avi.vcf"
        className="text-bungee min-h-8 p-6 bg-toa-4 text-toa-5 font-medium flex items-center justify-center text-[#FDFBED] h-full w-full"
      >
          <Download className='mr-5' /> SAVE TO CONTACTS

      </a>


    </div>
  );
}
