import { Open_Sans } from 'next/font/google';
import ContentWrapper from '../../../../../components/content';
import DropdownList from '../../../../../components/dropdown';
import { Dropdown } from '@nextui-org/react';
import React from 'react';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

async function getItem(itemID: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/products/records/${itemID}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();

  return data;
}

export default async function ItemPage({ params }: any) {
  const item = await getItem(params.id);

  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <div className="bg-black/20 text-black">
          <img
            src={`http://127.0.0.1:8090/api/files/ij181xiqwd5pfx6/${item.id}/${item.product_images[0]}`}
            className="h-40 rounded-md"></img>
          <h2>{item.product_name}</h2>
          <div>
            <DropdownList name="Size" item="keys"></DropdownList>
            <DropdownList
              name="Material + Profile"
              item="keycapstyle"></DropdownList>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
