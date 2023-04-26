import { Open_Sans } from 'next/font/google';
import ContentWrapper, { ShopItems } from '../../components/content';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

async function getItems() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/products/records?page=1&perPage=30',
    { cache: 'no-store' }
  );
  const data = await res.json();

  return data?.items as any[];
}

export default async function Home() {
  const items = await getItems();

  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <div className="flex flex-row flex-nowrap gap-10 items-center py-16">
          <img
            src="tangerine_530x_2x_0UnjvbSDHV.jpg"
            className="h-40 rounded-md"></img>
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
                image={`http://127.0.0.1:8090/api/files/ij181xiqwd5pfx6/${item.id}/${item.product_images[0]}`}
                price="100"
                link={`/shop/product/${item.id}`}>
                {item.short_description}
              </ShopItems>
            );
          })}
        </div>
      </ContentWrapper>
    </main>
  );
}
