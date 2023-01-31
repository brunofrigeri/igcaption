import { createCompletion } from "@/lib/openai";
import type { NextApiRequest, NextApiResponse } from "next";
import { CreateCompletionResponse } from "openai";

type Error = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateCompletionResponse | Error>
) {
  const { prompt } = JSON.parse(req.body);

  if (!prompt) {
    return res.status(400).json({ message: "No prompt found in the request" });
  }

  const response = await createCompletion(prompt);

  return res.status(200).json(response);
}
