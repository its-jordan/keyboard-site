import { Open_Sans } from 'next/font/google';
import ContentWrapper, { ShopItems } from '../../components/content';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
export default async function Shop() {
  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <h1 className="text-white text-3xl font-bold">Under Construction</h1>
      </ContentWrapper>
    </main>
  );
}
