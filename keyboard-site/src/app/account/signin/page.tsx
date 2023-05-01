import { SignIn } from '@clerk/nextjs/app-beta';

export default function Page() {
  return <SignIn signUpUrl="/account/signup" />;
}
