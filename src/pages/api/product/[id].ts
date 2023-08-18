import connectMongo from "@/middleware/dbconnection";
import ProductModel from "@/model/product.model";
import { IProduct } from "@/types/product.interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: IProduct;
};

export default async function dynamicProductId(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await connectMongo();
    console.log(req.query.id);
    const result = await ProductModel.findById(req.query.id);
    res.status(200).json({ data: result });
  } catch (err) {
    res.status(500).send(err as any);
  }
}
