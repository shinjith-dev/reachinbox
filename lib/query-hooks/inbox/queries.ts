import axios from "@/lib/axios";

export const allMails = async () =>
  axios.get("/onebox/list").then((res) => res.data);
