interface ContentProps {
  children?: React.ReactNode;
  title?: string;
  image?: string;
  link?: string;
  price?: string;
}

export default function ContentWrapper({ children }: ContentProps) {
  return <div className="content-wrapper">{children}</div>;
}

export function ShopItems({ title, image, link, price, children }: ContentProps) {
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
