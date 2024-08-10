import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen flex h-full max-h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex h-screen grow flex-col">
        <Topbar />
        <div className="grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
