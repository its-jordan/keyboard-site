import { SignIn } from '@clerk/nextjs/app-beta';

export default function Page() {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <SignIn signUpUrl="/account/signup" />
    </div>
  );
}
