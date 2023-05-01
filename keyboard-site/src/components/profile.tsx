interface ProfileProps {
  user: string | null;
  children?: React.ReactNode;
}

export default function OrderHistory({ user, children }: ProfileProps) {
  return (
    <div>
      <div>
        Not {user}? <a href="logout">Logout</a>
      </div>
      <h2>Order History</h2>
      <div>{children}</div>
    </div>
  );
}
