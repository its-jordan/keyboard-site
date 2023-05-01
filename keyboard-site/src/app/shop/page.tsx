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

export default async function Shop() {
  const items = await getItems();

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
                image={`http://127.0.0.1:8090/api/files/ij181xiqwd5pfx6/${item.id}/${item.product_images[0]}`}
                price="100"
                link={`/shop/product/${item.id}`}>
                {item.short_description}
              </ShopItems>
            );
          })}
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <h2 className="pb-6">Keyboards</h2>
        <div className="shop-grid">
          {items?.map((item) => {
            return (
              <ShopItems
                key={item.id}
                title={item.product_name}
                image={`http://127.0.0.1:8090/api/files/ij181xiqwd5pfx6/${item.id}/${item.product_images[0]}`}
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
