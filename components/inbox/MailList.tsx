"use client";

import { useMails } from "@/lib/query-hooks/inbox";

export default function MailList() {
  const { data } = useMails();

  console.log(data);
  return <div className="h-full w-[320px] bg-surface px-7 py-5"></div>;
}
