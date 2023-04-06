import { Open_Sans } from 'next/font/google';
import ContentWrapper from '../../../../../components/content';
import DropdownList from '../../../../../components/dropdown';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function ItemPage() {
  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <div className="bg-black/20 text-black">
          <img src="avatar.png" className="h-40 rounded-md"></img>
          <div>
            <DropdownList name="Size" item="keys"></DropdownList>
            <DropdownList
              name="Material + Profile"
              item="keycapstyle"></DropdownList>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
