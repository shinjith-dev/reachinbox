import axios from "../axios";

export const googleLogin = async () =>
  axios
    .get("/auth/google-login?redirect_to=hire-reachinbox.pages.dev/onebox")
    .then((res) => res.data);
