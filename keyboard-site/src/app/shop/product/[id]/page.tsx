'use client';

import { Open_Sans } from 'next/font/google';
import ContentWrapper, { KeySwitches } from '../../../../../components/content';
import React from 'react';
import { Dropdown } from '@nextui-org/react';
import { KeyboardCase, KeycapList, KeyswitchList } from '../../../../../components/dropdown';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

async function getItem(itemID: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/products/records/${itemID}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();

  return data;
}

// TODO: Add the changing images (keyboard renders) based on selections

export default async function ItemPage({ params }: any) {
  var keyswitches = [
    ['None', 'None', '', '0.00'],
    ['Cherry MX Red', 'Cherry MX', 'Red', '5.00'],
    ['Cherry MX Blue', 'Cherry MX', 'Blue', '5.00'],
    ['Cherry MX Brown', 'Cherry MX', 'Brown', '5.00'],
    ['Cherry MX Sp', 'Cherry MX', 'Speed Silver', '5.00'],
  ];
  const item = await getItem(params.id);
  let selected: any;
  let setSelected: any;
  [selected, setSelected] = React.useState(new Set('Key Switches'));
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  );

  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <div className="product-wrapper">
          <h2>{item.product_name} Keyboard</h2>
          <div className="product-info">
            <img
              src={`http://127.0.0.1:8090/api/files/ij181xiqwd5pfx6/${item.id}/${item.product_images[0]}`}
              className="h-40 w-40 rounded-md"></img>
          </div>
          <div className="product-components">
            <Dropdown>
              <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                disabledKeys="Key Switch"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}>
                {keyswitches.map(([key, brand, color, price]) => (
                  <Dropdown.Item key={key}>
                    {brand} {color} : {price}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <KeyswitchList name="Keyswitch"></KeyswitchList>
            <KeycapList name="Keycaps"></KeycapList>
            <KeyboardCase name="Case" item={item.type}></KeyboardCase>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className="product-wrapper">
          <h2 className="product-components-info">About The Components</h2>
          <KeySwitches selected={selected} />
          <div className="component-container" data-name="GMK Analog Dreams">
            <h3>GMK Analog Dreams</h3>
            <p>
              The beige base evokes the aesthetic of vintage computers. Add a splash of soft
              pastels, complimented by a pop of bright purple accent, and the result is a unique
              keyset that stands apart. Its sister colorway, Digital Nightmares, is a dive into the
              world of synthwave. The deep purple base provides a vibrant backdrop to the Analog
              Dreams pastels which serve as an elegant thread connecting the two sets. GMK produces
              double shot cherry profile MX compatible keycaps made from ABS.
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
              Tofu60 was born in 2017 and has sold more than 40,000 units. It's a lot of people's
              first entry-level custom mechanical keyboard. Tofu60 2.0 is a new beginning, the new
              changes will bring a new typing experience, and the new surface coating process can
              also bring more color possibilities.
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
