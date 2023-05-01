'use client';
import Image from 'next/image';
import { SignInButton, UserButton, useAuth, useUser } from '@clerk/nextjs';
import PocketBase from 'pocketbase';

interface NavProps {
  children?: React.ReactNode;
  title?: string;
  link?: string;
}

export function NavLink({ title, link }: NavProps) {
  return (
    <a className="navbar-link" href={`/${link}`}>
      {title}
    </a>
  );
}

export default function Navigation({ children }: NavProps) {
  return <nav className="navbar-nav">{children}</nav>;
}

export function Header({ children }: NavProps) {
  return <div className="navbar-wrapper">{children}</div>;
}

export function Logo() {
  return (
    <div>
      <a className="navbar-logo" href="/">
        <div>
          <Image
            priority
            src="/pkeyslogo.svg"
            height={256}
            width={256}
            alt="Precision Keys Logo"
          />
        </div>
      </a>
    </div>
  );
}

export function Profile() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return (
      <a className="profile-container signed-out" href={`/account/signin`}>
        Sign In
      </a>
    );
  }

  return (
    <div className="profile-container">
      <a href={`/account/${user.username}`}>Orders</a>
      <UserButton></UserButton>
    </div>
  );
}
