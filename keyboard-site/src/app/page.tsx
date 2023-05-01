import { Open_Sans } from 'next/font/google';
import ContentWrapper, { KeySwitches, ShopItems } from '../components/content';
import Keyboards from '../data/Keyboards.json';

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
      <ContentWrapper>
        <div className="flex flex-row flex-nowrap gap-10 items-center py-16">
          <img src="fullsize.jpg" className="h-40 rounded-md"></img>
          <div className="home-info">
            <h2>Title</h2>
            <p className="max-w-[60ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              repudiandae quisquam recusandae veritatis voluptates atque
              consectetur soluta. Iusto praesentium nesciunt laudantium iure
              vero, aut quisquam doloremque itaque voluptate illo similique?
            </p>
          </div>
        </div>
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
    </main>
  );
}
