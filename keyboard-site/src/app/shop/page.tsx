import { Open_Sans } from 'next/font/google';
import ContentWrapper, { ShopItems } from '../../../components/content';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Shop() {
  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <div className="bg-black/20 text-black">
          <div className="shop-grid">
            <ShopItems title="Keyboard" image="avatar.png" price="100" link="">
              Full-Size Keyboard with Custom switches!
            </ShopItems>
            <ShopItems title="60% Keyboard" image="avatar.png" price="80" link="">
              Smaller keyboard for those with limited space
            </ShopItems>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
