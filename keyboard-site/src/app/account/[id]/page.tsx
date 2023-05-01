'use client';
import { Open_Sans } from 'next/font/google';
import ContentWrapper from '../../../components/content';
import { SignInButton, useUser } from '@clerk/nextjs';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Profile() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return (
      <main className={openSans.className}>
        <ContentWrapper>
          <SignInButton />
        </ContentWrapper>
      </main>
    );
  }

  return (
    <main className={openSans.className}>
      <ContentWrapper>
        <div className="user-profile">
          <div>
            <div>
              <h1 className="text-xl font-bold">
                Welcome back, <span>{user.username}</span>!
              </h1>
              <div>
                <div>
                  Not {user.username}? <a href="logout">Logout</a>
                </div>
                <h2>Order History</h2>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
