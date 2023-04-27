import { Footer } from '../../components/content';
import Navigation, { Header, Logo, NavLink, Profile } from '../../components/nav';
import './globals.scss';

export const metadata = {
  title: 'Precision Keys',
  description: 'Precision Keys | Boutique mechanical keyboard company',
};

// TODO: Create Pages
// TODO: Update links in footer

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let user = 'its_jordan';
  return (
    <html lang="en">
      <body>
        <Header>
          <Logo />
          <Navigation>
            <NavLink link="" title="Home" />
            <NavLink link="shop" title="Shop" />
          </Navigation>
          <Profile name={user} avatar="avatar.png" />
        </Header>
        <div className="body-wrapper">{children}</div>
        <Footer user={user}></Footer>
      </body>
    </html>
  );
}
