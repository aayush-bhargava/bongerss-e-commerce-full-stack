import { NextResponse } from "next/server";
import { connectDB } from "@/middleware/mongoose";
import Product from "@/models/Product";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  await connectDB();

  const product = await Product.findOne({ slug: params.slug });

  if (!product) {
    return NextResponse.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
