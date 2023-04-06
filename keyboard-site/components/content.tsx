interface ContentProps {
  children?: React.ReactNode;
  title?: string;
  image?: string;
}

export default function ContentWrapper({ children }: ContentProps) {
  return <div className="content-wrapper">{children}</div>;
}
