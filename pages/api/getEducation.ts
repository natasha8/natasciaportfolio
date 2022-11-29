import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Education } from "../../typing";

const query = groq`
  *[_type == "education"] | order(dateEnded desc){
    ...,
    technologies[]->
  }
`;

type Data = {
    educations: Education[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const educations: Education[] = await sanityClient.fetch(query);

    res.status(200).json({ educations });
}
