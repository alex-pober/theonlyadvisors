import logo2d from '@/public/logo2D.svg'
import Image from 'next/image';

export default function Avi() {
  return (
    <div className=" max-w-screen-lg m-auto mt-8">
      <div className="text-center p-2 flex flex-col gap-6">
        <div className='m-auto p-3'>
          <Image alt="logo image" src={logo2d} width={100} height={60} />
        </div>
        <h1 className="text-bungee text-toa-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Avi
        </h1>
        <p className="text-inter text-gray-500 text-base sm:text-xl/relaxed md:text-xl/relaxed lg:text-xl/relaxed dark:text-gray-400">
          CEO
        </p>
      </div>

      <div className="max-w-screen-md m-auto p-6">
        <div className="flex items-center justify-between w-full p-2 rounded-xl border border-gray-200 text-left shadow-sm">
          <span className="text-bungee text-toa-5 font-medium">
            Phone - (818) 988-8888
          </span>
        </div>
      </div>

      <div className="max-w-screen-md m-auto p-6">
        <div className="flex items-center justify-between w-full p-2 rounded-xl border border-gray-200 text-left shadow-sm">
          <span className="text-bungee text-toa-5 font-medium">
            Website - theonlyadvisors.com
          </span>
        </div>
      </div>

      <div className="max-w-screen-md m-auto p-6">
        <div className="flex items-center justify-between w-full p-2 rounded-xl border border-gray-200 text-left shadow-sm">
          <span className="text-bungee text-toa-5 font-medium">
            Email - info@theonlyadvisors.com
          </span>
        </div>
      </div>

      <div className="max-w-screen-md m-auto p-6 bg-white">
        <div className="flex items-center justify-between w-full p-2 text-center">
          <a
            href="/Avi.vcf"
            download="Avi.vcf"
            className="text-bungee text-toa-5 font-medium"
          >
            SAVE TO CONTACTS
          </a>
        </div>
      </div>


    </div>
  );
}
