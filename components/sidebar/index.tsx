import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Image from "next/image";
import Link from "next/link";
import { links } from "./links";

export default function Sidebar() {
  return (
    <div className="relative h-screen border-r border-border-1 bg-surface px-5 py-7 transition-all">
      <div className="mx-auto">
        <Image
          src="/images/logo.png"
          alt="logo"
          height={30}
          width={30}
          className="rounded object-cover object-center"
        />
      </div>

      <nav className="relative top-[10%]">
        <TooltipProvider>
          <ul className="space-y-8">
            {links.map((l) => (
              <li key={l.label}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      className={`flex h-8 w-8 items-center justify-center rounded p-1.5 transition-all ${l.label === "Inbox" ? "bg-[#E9EAEB] dark:bg-[#2F3030]" : "bg-transparent"}`}
                      href={l.url}
                    >
                      <Image
                        src={`/icons/${l.icon}`}
                        alt={l.label}
                        height={24}
                        width={24}
                        className="object-contain object-center"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{l.label}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </nav>

      <div className="absolute bottom-7 left-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#054F31] text-white">
          SR
        </div>
      </div>
    </div>
  );
}
