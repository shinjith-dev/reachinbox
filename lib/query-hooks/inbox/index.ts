import { useQuery } from "@tanstack/react-query";
import { allMails } from "./queries";

export const useMails = () =>
  useQuery({
    queryKey: ["all-mails"],
    queryFn: allMails,
  });
