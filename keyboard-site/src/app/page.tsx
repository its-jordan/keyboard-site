import { Open_Sans } from 'next/font/google';
import ContentWrapper from '../../components/content';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <div className="bg-black/20 text-black">
          <img src="avatar.png" className="h-40 rounded-md"></img>
          <div>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              repudiandae quisquam recusandae veritatis voluptates atque
              consectetur soluta. Iusto praesentium nesciunt laudantium iure
              vero, aut quisquam doloremque itaque voluptate illo similique?
            </p>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
