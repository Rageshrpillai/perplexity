import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center h-screen w-full justify-center">
      <SignUp />
    </div>
  );
}
