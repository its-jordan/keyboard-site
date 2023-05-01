import { Open_Sans } from 'next/font/google';
import ContentWrapper, { KeySwitches } from '../../../../components/content';
import React, { useState } from 'react';
import { Dropdown } from '@nextui-org/react';
import {
  KeyboardCase,
  KeycapList,
  KeyswitchList,
} from '../../../../components/dropdown';
import {
  AllCases,
  Cases,
  Keycaps,
  Keyswitches,
  PrismaClient,
} from '@prisma/client';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

async function getItem() {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/products/records/wz5xgzgebq7adhe`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();

  return data;
}

// TODO: Add the changing images (keyboard renders) based on selections

export default async function ItemPage() {
  const item = await getItem();
  const prisma = new PrismaClient();
  const keys: Array<Keyswitches> = await prisma.keyswitches.findMany();
  const keyCaps: Array<Keycaps> = await prisma.keycaps.findMany();
  const keyCase: Array<Cases> = await prisma.cases.findMany({
    where: {
      size: {
        contains: 'sixty',
      },
    },
  });

  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <div className="product-wrapper">
          <h2>{item.product_name} Keyboard</h2>
          <div className="product-info">
            <img
              src={`http://127.0.0.1:8090/api/files/ij181xiqwd5pfx6/${item.id}/${item.product_images[0]}`}
              className="h-40 w-40 rounded-md"
              alt={`Image of ${item.product_name}`}></img>
          </div>
          <div className="product-components">
            <select>
              {keys?.map((key) => (
                <option key={key.id} data-price={key.price} value={key.id}>
                  {key.brand} {key.model}
                </option>
              ))}
            </select>
            <select>
              {keyCaps?.map((key) => (
                <option key={key.id} data-price={key.price} value={key.id}>
                  {key.brand} {key.model}
                </option>
              ))}
            </select>
            <select>
              {keyCase?.map((key) => (
                <option key={key.id} data-price={key.price} value={key.id}>
                  {key.brand} {key.model}
                </option>
              ))}
            </select>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className="product-wrapper">
          <h2 className="product-components-info">About The Components</h2>
          <div className="component-container" data-name="GMK Analog Dreams">
            <h3>GMK Analog Dreams</h3>
            <p>
              The beige base evokes the aesthetic of vintage computers. Add a
              splash of soft pastels, complimented by a pop of bright purple
              accent, and the result is a unique keyset that stands apart. Its
              sister colorway, Digital Nightmares, is a dive into the world of
              synthwave. The deep purple base provides a vibrant backdrop to the
              Analog Dreams pastels which serve as an elegant thread connecting
              the two sets. GMK produces double shot cherry profile MX
              compatible keycaps made from ABS.
            </p>
            <h4>About the keycaps</h4>
            <p>
              PWade3 is back with his take on vaporwave—GMK Analog Dreams.
              <ol>
                <li>ABS Keycaps</li>
                <li>Produced by GMK</li>
                <li>Includes unique extra keys</li>
                <li>Futuristic Vaporwave colorway!</li>
              </ol>
            </p>
          </div>
          <div className="component-container" data-name="KBDFans Tofu 60 v2">
            <h3>KBDFans Tofu v2</h3>
            <p>
              Tofu60 was born in 2017 and has sold more than 40,000 units.
              It&apos;s a lot of people&apos;s first entry-level custom
              mechanical keyboard. Tofu60 2.0 is a new beginning, the new
              changes will bring a new typing experience, and the new surface
              coating process can also bring more color possibilities.
            </p>
            <h4>About the Case</h4>
            <p>
              <ol>
                <li>3 Layouts: HHKB, WKL, WK</li>
                <li>Gasket-mounted</li>
                <li>Programmable with VIA and QMK</li>
                <li>Multi-layout support!</li>
              </ol>
            </p>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
