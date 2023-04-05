import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Home() {
  return <main className={openSans.className}>Content</main>;
}
