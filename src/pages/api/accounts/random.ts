import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getAuthOpts } from "utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { headers } = getAuthOpts();

    const params = {
      limit: 200,
    };

    const { data } = await axios.get("/accounts", {
      baseURL: process.env.NEXT_PUBLIC_ARGYLE_BASE_URL,
      headers,
      params,
    });

    const connected = data?.results?.filter(
      (account) => account.was_connected && account.status !== "error"
    );

    const last = connected.pop();

    res.status(200).json(last);
  } catch (error) {
    res.status(400).json(error);
  }
}
