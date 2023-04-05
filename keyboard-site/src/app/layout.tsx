import Navigation, { Header, Logo, NavLink } from '../../components/nav';
import './globals.css';

export const metadata = {
  title: 'Precision Keys',
  description: 'Precision Keys | Boutique mechanical keyboard company',
};

// TODO: Create Logo
//       Create Pages

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header>
          <Logo />
          <Navigation>
            <NavLink link="/" title="Home" />
          </Navigation>
        </Header>
        {children}
      </body>
    </html>
  );
}
