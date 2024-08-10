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
    <div className="relative h-screen border-r border-[#343A40] bg-[#101113] px-5 py-7">
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
                      className="flex h-8 w-8 items-center justify-center rounded p-1.5"
                      href={l.url}
                      style={{
                        backgroundColor:
                          l.label === "Inbox" ? "#2F3030" : "transparent",
                      }}
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
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#054F31]">
          SR
        </div>
      </div>
    </div>
  );
}
