import Navigation, {
  Header,
  Logo,
  NavLink,
  Profile,
} from '../../components/nav';
import './globals.scss';

export const metadata = {
  title: 'Precision Keys',
  description: 'Precision Keys | Boutique mechanical keyboard company',
};

// TODO: Create Pages

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header>
          <Logo />
          <Navigation>
            <NavLink link="" title="Home" />
            <NavLink link="shop" title="Shop" />
          </Navigation>
          <Profile name="Jordan" avatar="./avatar.png" />
        </Header>
        <div className="body-wrapper">{children}</div>
        <footer>
          <div className="flex flex-col justify-between items-start">
            <h3>Sitemap</h3>
            <a>Shop</a>
            <a>Home</a>
            <a>Account</a>
          </div>
          <div className="info">
            <Logo />
            <p className="flex justify-end">&copy; 2023 Jordan Schultz.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
