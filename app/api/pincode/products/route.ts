import { NextResponse } from "next/server";
import { connectDB } from "@/middleware/mongoose";
import Product from "@/models/Product";

/* GET: fetch all products */
export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

/* POST: add new product */
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const product = await Product.create(body);
  return NextResponse.json(product, { status: 201 });
}

/* PUT: update product by slug */
export async function PUT(req: Request) {
  await connectDB();
  const body = await req.json();

  const product = await Product.findOneAndUpdate(
    { slug: body.slug },
    body,
    { new: true }
  );

  return NextResponse.json(product);
}
