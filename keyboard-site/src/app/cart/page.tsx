import { Open_Sans } from 'next/font/google';
import ContentWrapper, { ShopItems } from '../../components/content';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
export default async function Shop() {
  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <h2 className="pb-6">About Us</h2>
        <div className="text-white">
          Precision Keys is a boutique mechanical keyboard company founded in
          2023. We specialize in building small form factor boards, such as 60%
          and 65%, but also offer keyboards of the more traditional tenkeyless
          and full-size varieties. All of our parts are sourced from Industry
          leaders, such as Novelkeys and KBDFans, and are hand built by us here
          at Precision Keys.
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <h2 className="pb-6">Meet the Staff</h2>
        <div className="shop-grid"></div>
      </ContentWrapper>
    </main>
  );
}
