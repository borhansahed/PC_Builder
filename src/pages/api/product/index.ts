// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/middleware/dbconnection";
import ProductModel from "@/model/product.model";
import { IProduct } from "@/types/product.interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: IProduct[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await connectMongo();

    if (req.method === "GET") {
      const result = await ProductModel.find(req.query);
      res.status(200).json({ data: result });
    }
  } catch (err) {
    res.status(500).send(err as any);
  }
}
