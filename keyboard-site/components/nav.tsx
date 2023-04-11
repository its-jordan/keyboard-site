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
        <img src="logo.png"></img>
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
        <img src={avatar}></img>
      </div>
    </a>
  );
}
