import { Open_Sans } from 'next/font/google';
import ContentWrapper, { ShopItems } from '../../components/content';
import Image from 'next/image';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
export default async function Shop() {
  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <div className="flex flex-row flex-nowrap gap-6">
          <div className="">
            <h2 className="pb-6 text-white">About Us</h2>
            <div className="text-white max-w-[80ch]">
              Precision Keys is a boutique mechanical keyboard company founded
              in 2023. We specialize in building small form factor boards, such
              as 60% and 65%, but also offer keyboards of the more traditional
              tenkeyless and full-size varieties. All of our parts are sourced
              from Industry leaders, such as Novelkeys and KBDFans, and are hand
              built by us here at Precision Keys.
            </div>
            <div className="text-white">
              <h3 className="font-bold text-xl pt-4">About the company</h3>
              <p>
                Location: 7234 W North Ave - Cameo Towers-Bldg 1, Elmwood Park
              </p>
              <p>Hours: Monday - Saturday, 9am-5pm</p>
              <p>Phone: 1-234-567-8900</p>
              <p>Social Media: @PrecisionKeys</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.2483019586166!2d-87.81047672340301!3d41.90902066347683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcb2579909e5b%3A0x20a6669876f09ec0!2sCameo%20Towers%20Condominium!5e0!3m2!1sen!2sus!4v1683136644610!5m2!1sen!2sus"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <h2 className="pb-6">Meet the Staff</h2>
        <div className="staff-container w-full">
          <Image
            priority
            src="/IMG_1562.jpg"
            height={256}
            width={256}
            alt="Precision Keys Logo"
          />
          <div className="staff-name text-center">Jordan Schultz, Founder</div>
        </div>
      </ContentWrapper>
    </main>
  );
}
