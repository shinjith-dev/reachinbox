import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-[min(99vw,460px)] rounded-[17px] border border-border-1 bg-gradient-to-br from-[#111214] to-[#121212] p-10 pt-6 text-center">
        <h3 className="mb-6 font-semibold text-foreground xl:text-xl 2xl:text-2xl">
          Create a new account
        </h3>

        <Button
          variant="outline"
          className="mb-8 w-full gap-2 rounded bg-transparent px-4 py-2"
        >
          <Image src="/icons/google.png" height={20} width={20} alt="goolge" />
          Sign up with Google
        </Button>

        <Button className="mb-6 rounded bg-gradient-to-br from-[#4B63DD] to-[#0524BF] px-9 py-4 font-semibold text-white">
          Create an account
        </Button>

        <div className="flex justify-center gap-1">
          <p className="text-[#909296]">Already have an account?</p>
          <Link href="/" className="text-[#C1C2C5]">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
