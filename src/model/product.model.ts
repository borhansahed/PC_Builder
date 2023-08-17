import { IProduct } from "@/types/product.interface";
import mongoose, { Schema, model } from "mongoose";

const productSchema: Schema<IProduct> = new Schema({
  image: String,
  productName: String,
  category: String,
  price: String,
  status: String,
  rating: String,
});

const ProductModel =
  mongoose.models.Product || model<IProduct>("Product", productSchema);

export default ProductModel;
