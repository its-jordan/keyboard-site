import { Open_Sans } from 'next/font/google';
import ContentWrapper from '../../../../components/content';
import OrderHistory from '../../../../components/profile';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

async function getUser(userID: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/users/records/${userID}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();

  return data;
}

export default async function Profile({ params }: any) {
  const user = await getUser(params.id);
  user.username = 'its_jordan';
  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <div className="user-profile">
          <h1>
            Welcome back, <span>{user.username}</span>!
          </h1>
          <OrderHistory user={user.username}></OrderHistory>
        </div>
      </ContentWrapper>
    </main>
  );
}
