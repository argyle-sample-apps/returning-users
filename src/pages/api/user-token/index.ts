import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getAuthOpts } from "utils/auth";
import { getCookie } from "cookies-next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = getCookie("argyle-x-user-id", { req, res }) as string;

  if (!userId) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const { headers } = getAuthOpts();

    const { data } = await axios.post(
      "/user-tokens",
      {
        user: userId,
      },
      {
        baseURL: process.env.NEXT_PUBLIC_ARGYLE_BASE_URL,
        headers,
      }
    );

    console.log("NEW USER TOKEN CREATED");

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
