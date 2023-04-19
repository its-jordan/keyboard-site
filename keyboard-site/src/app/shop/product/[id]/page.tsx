import { Open_Sans } from 'next/font/google';
import ContentWrapper from '../../../../../components/content';
import React from 'react';
import {
  KeyboardCase,
  KeycapList,
  KeyswitchList,
} from '../../../../../components/dropdown';

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
        <div className="bg-black/20 text-black flex flex-col flex-nowrap w-full">
          <div className="flex flex-row items-end w-full flex-grow justify-start">
            <img
              src={`http://127.0.0.1:8090/api/files/ij181xiqwd5pfx6/${item.id}/${item.product_images[0]}`}
              className="h-40 w-40 rounded-md"></img>
            <h2>{item.product_name}</h2>
          </div>
          <div className="flex flex-col gap-2 flex-wrap">
            <KeyswitchList name="Keyswitch"></KeyswitchList>
            <KeycapList name="Keycaps"></KeycapList>
            <KeyboardCase name="Case" item={item.type}></KeyboardCase>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
