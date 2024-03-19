import AboutUsImage from '@/public/About-us.png'
import Image from 'next/image';
export default function WhyUs() {
  return (
    <main className="w-11/12 m-auto">
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

      <section className="flex flex-wrap justify-center gap-5 bg-toa-5 rounded-3xl p-9">
        <div className='max-w-lg'>
          <h1 className='text-bungee text-toa-1 text-2xl'>Our Mission</h1>
          <p className='text-inter font-semibold text-toa-2'>
            Our mission is twofold: to redefine what it means to be a content
            creator management agency and to ensure that every woman who partners
            with us feels valued, safe, and confident in her journey to success.
            We believe in creating a transparent working environment where trust
            is the foundation of every relationship.
          </p>
        </div>
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
