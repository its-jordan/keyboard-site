import { Logo } from './nav';
import Keyswitches from '../data/Keyswitches.json';
import Link from 'next/link';

interface ContentProps {
  children?: React.ReactNode;
  title?: string;
  image?: string;
  link?: string;
  price?: string;
}

export default function ContentWrapper({ children }: ContentProps) {
  return (
    <div className="content-wrapper">
      <div className="content-background text-black">
        <div className="content-container">{children}</div>
      </div>
    </div>
  );
}

export function ShopItems({
  title,
  image,
  link,
  price,
  children,
}: ContentProps) {
  return (
    <a href={link} className="shop-item">
      <img src={image} className="shop-item-image"></img>
      <div className="shop-content-container">
        <h2 className="shop-item-name">{title}</h2>
        <p className="shop-item-description">{children}</p>
        <div className="shop-item-price">
          <span className="price-before">Starting at </span>
          <span className="price-number">{price}</span>
        </div>
      </div>
    </a>
  );
}

interface AccountProps {
  user: string;
}

export function Footer({ user }: AccountProps) {
  return (
    <footer>
      <div className="footer-links">
        <h3>Sitemap</h3>
        <Link href="/shop">Shop</Link>
        <Link href={`/account/${user}`}>Account</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="info">
        <Logo />
        <p className="flex justify-end">&copy; 2023 Jordan Schultz.</p>
      </div>
    </footer>
  );
}

interface DropdownProps {
  selected?: string;
}

export function KeySwitches({ selected }: DropdownProps) {
  var keySwitch = Keyswitches;
  // Object.keys(keySwitch).forEach(function (key) {
  //   var value = keySwitch[key];
  // });
  return (
    <div>
      {Keyswitches.map((item, i) => (
        <div
          key={i}
          className="component-container"
          data-name={`${item.brand} ${item.name}`}>
          <h3>
            {item.brand} {item.name}
          </h3>
          <p>{item.description}</p>
          <h4>About the switch</h4>
          <p>
            <ol>
              <li>{item.information['li-1']}</li>
              <li>{item.information['li-2']}</li>
              <li>{item.information['li-3']}</li>
              <li>{item.information['li-4']}</li>
              <li>{item.information['li-5']}</li>
            </ol>
          </p>
        </div>
      ))}
    </div>
  );
}
