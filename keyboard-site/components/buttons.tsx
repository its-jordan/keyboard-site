interface ButtonProps {
  text: string;
  link: string;
}

export default function Button({ text, link }: ButtonProps) {
  return (
    <a href={link}>
      <button>{text}</button>
    </a>
  );
}
