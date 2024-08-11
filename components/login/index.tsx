import Image from "next/image";
import Link from "next/link";
import { FRONTEND_URL } from "@/lib/config";
import AuthVerify from "./auth-verify";

const GOOGLE_AUTH_URL = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${FRONTEND_URL}`;

export default function Login() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <AuthVerify />

      <div className="w-[min(99vw,460px)] rounded-[17px] border border-border-1 from-[#111214] to-[#121212] p-10 pt-6 text-center dark:bg-gradient-to-br">
        <h3 className="mb-6 font-semibold text-foreground xl:text-xl 2xl:text-2xl">
          Create a new account
        </h3>

        <Link
          href={GOOGLE_AUTH_URL}
          className="mb-8 flex w-full items-center justify-center gap-2 rounded border border-border bg-transparent px-4 py-2 transition-all hover:bg-border/40"
        >
          <Image src="/icons/google.png" height={20} width={20} alt="goolge" />
          Sign up with Google
        </Link>

        <Link
          href={GOOGLE_AUTH_URL}
          className="mx-auto mb-6 block w-fit rounded bg-gradient-to-br from-[#4B63DD] to-[#0524BF] px-9 py-4 font-semibold text-white"
        >
          Create an account
        </Link>

        <div className="flex justify-center gap-1">
          <p className="text-[#909296]">Already have an account?</p>
          <Link href={GOOGLE_AUTH_URL} className="text-[#C1C2C5]">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
