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
          <Profile name="its_jordan" avatar="avatar.png" />
        </Header>
        <div className='body-wrapper'>{children}</div>
      </body>
    </html>
  );
}
