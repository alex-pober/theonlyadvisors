import Image from 'next/image';
import AboutUsImage from '@/public/About-us.png'
import OutMissionImage from '@/public/Our-mission.png'
export default function WhyUs() {
  return (
    <main className="w-11/12 m-auto flex flex-col gap-3">
      <section className="flex flex-wrap justify-center gap-5 bg-toa-1 rounded-3xl drop-shadow-md p-9">

        <div className='max-w-lg'>
          <h1 className='text-bungee text-toa-2 text-2xl'>About Us</h1>
          <p className='text-inter font-semibold'>
            At The Only Advisors, our journey began with a clear and powerful
            purpose: to create a sanctuary in the digital realm where women
            content creators are empowered, protected, and poised for success.
            Disturbed by the practices of management companies that exploited
            rather than supported talent, we vowed to pave a new path—one marked
            by integrity, transparency, and unwavering support for our clients.
          </p>
        </div>

        <Image
          alt='Group of Empowered woman'
          src={AboutUsImage}
          width={300}
          height={300}
        />
      </section>

      <section className="flex flex-wrap flex-row items-center justify-center bg-toa-5 gap-5 rounded-3xl p-9">
          <p className='text-inter text-center font-semibold text-toa-2 max-w-xs'>
          We reshape the essence of a content creator management agency, pioneering a new standard of excellence and innovation.
          </p>
          <div className='min-w-fit'>
            <Image
              alt='roading and 3 woman'
              src={OutMissionImage}
              width={300}
              height={200}
              className='m-auto'
            />
            <h1 className='text-bungee text-toa-1 text-2xl text-center sm:text-md'>Our mission is twofold</h1>
          </div>
          <p className='text-inter text-center font-semibold text-toa-2 max-w-xs'>
          We empower every woman who joins us, fostering an environment where she feels deeply valued, safe, and emboldened to reach her fullest potential.          </p>
      </section>

      <section className="flex flex-wrap justify-center gap-5 bg-toa-4 rounded-3xl p-9">
        <div className='max-w-lg'>
          <h1 className='text-bungee text-toa-5 text-2xl'>Why Choose Us?</h1>
          <p className='text-inter font-semibold text-toa-1'>
            A Foundation of Empowerment: Founded on the principle of protecting
            women from exploitation, The Only Advisors is more than just an
            agency; we are a movement towards ethical, equitable representation in
            the content creation world.
            <br />
            <br />
            Transparency and Safety: At the heart of
            our operations is a commitment to transparency and safety. We strive
            to be an agency our clients can trust, where open communication and
            mutual respect are paramount.
            <br />
            <br />
            For Women, By Women: Our services are
            designed with women in mind, focusing on empowering female content
            creators to take control of their careers and achieve their full
            potential.
            <br />
            <br />
            Innovative Approach to Success: Leveraging cutting-edge AI
            and data analytics, we delve deep into what makes your content
            resonate with audiences. Our strategic use of technology ensures that
            every piece of content is optimized for maximum engagement and
            profitability.
          </p>
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-5 bg-toa-3 rounded-3xl p-9"></section>

      <section className="flex flex-wrap justify-center gap-5 bg-toa-2 min-h-28 rounded-3xl p-9"></section>
    </main>
  );
}
