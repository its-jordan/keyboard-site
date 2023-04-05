interface NavProps {
  children?: React.ReactNode;
  title?: string;
  link?: string;
}

export function NavLink({ title, link }: NavProps) {
  return <a href={`/${link}`}>{title}</a>;
}

export default function Navigation({ children }: NavProps) {
  return <nav>{children}</nav>;
}

export function Header({ children }: NavProps) {
  return <div>{children}</div>;
}

export function Logo() {
  return (
    <div>
      <a href="/">
        <img src="logo.png"></img>
        {/* TODO: Precision Keys fallback text */}
      </a>
    </div>
  );
}
