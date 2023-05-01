import { Open_Sans } from 'next/font/google';
import ContentWrapper, { ShopItems } from '../../components/content';
import Keyboards from '../../data/Keyboards.json';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Shop() {
  const items = Keyboards;

  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <h2 className="pb-6">Keyboards</h2>
        <div className="shop-grid">
          {items?.map((item) => {
            return (
              <ShopItems
                key={item.id}
                title={item.product_name}
                image={item.product_images}
                price="100"
                link={`/shop/product/${item.type}`}>
                {item.short_description}
              </ShopItems>
            );
          })}
        </div>
      </ContentWrapper>
    </main>
  );
}
