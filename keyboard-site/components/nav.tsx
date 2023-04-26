import Image from 'next/image';

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

interface ProfileProps {
  name: string;
  avatar: string;
}

export function Profile({ name, avatar }: ProfileProps) {
  return (
    <a className="profile-container" href={`/profile/${name}`}>
      <div className="profile-name">{name}</div>
      <div className="profile-avatar">
        <Image
          priority
          src={`/${avatar}`}
          height={40}
          width={40}
          alt="User Profile Picture"
        />
      </div>
    </a>
  );
}
