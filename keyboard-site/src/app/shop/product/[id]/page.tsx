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
        <div className="product-wrapper">
          <h2>{item.product_name}</h2>
          <div className="product-info">
            <img
              src={`http://127.0.0.1:8090/api/files/ij181xiqwd5pfx6/${item.id}/${item.product_images[0]}`}
              className="h-40 w-40 rounded-md"></img>
          </div>
          <div className="product-components">
            <KeyswitchList name="Keyswitch"></KeyswitchList>
            <KeycapList name="Keycaps"></KeycapList>
            <KeyboardCase name="Case" item={item.type}></KeyboardCase>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className="product-wrapper">
          <h2 className="product-components-info">About The Components</h2>
          <div
            className="component-container"
            data-name="Cherry MX Speed Silver">
            <h3>Cherry MX Speed</h3>
            <p>
              The CHERRY MX Speed Silver is the fastest model of the CHERRY MX
              switch family in full height. Due to the linear switching
              characteristics combined with the low spring resistance, the
              silver switch triggers directly. When milliseconds decide whether
              you win or lose, the CHERRY MX Speed Silver is your guarantee for
              a successful gaming session.
            </p>
            <h4>About the switch</h4>
            <p>
              <ol>
                <li>Linear switching characteristics</li>
                <li>45 cN operating force</li>
                <li>1.2 mm pre travel</li>
                <li>3.4 mm total travel</li>
                <li>No click</li>
              </ol>
            </p>
          </div>
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
              Tofu60 was born in 2017 and has sold more than 40,000 units. It's
              a lot of people's first entry-level custom mechanical keyboard.
              Tofu60 2.0 is a new beginning, the new changes will bring a new
              typing experience, and the new surface coating process can also
              bring more color possibilities.
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
