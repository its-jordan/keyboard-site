import { Open_Sans } from 'next/font/google';
import ContentWrapper, { KeySwitches, ShopItems } from '../components/content';
import Keyboards from '../data/keyboards.json';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

// TODO: Add carousel in place of Header Section

export default function Home() {
  const items = Keyboards;

  return (
    <main className={openSans.className}>
      <div className="home-page">
        <ContentWrapper>
          <div className="flex flex-row flex-nowrap gap-10 items-center py-16">
            <img src="fullsize.jpg" className="h-40 rounded-md"></img>
            <div className="home-info">
              <h2>Welcome to Precision Keys!</h2>
              <p className="max-w-[60ch]">
                Interested in keyboards? Well, you've come to the right place!
              </p>
            </div>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h2>Featured Items</h2>
          <div className="shop-grid__home">
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
      </div>
    </main>
  );
}
