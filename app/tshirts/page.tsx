import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { headers } from "next/headers";

async function getProducts() {
  const host = headers();
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = fetch(`https://localhost:3000/api/products`, {
    cache: "no-store",
  });

  //return res.json();
}

export default async function Tshirts() {
  const products = await getProducts();

  const tshirts = products.filter(
    (p: any) => p.category === "tshirts"
  );

  return (
    <>
      <Navbar />

      <section className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {tshirts.map((p: any) => (
            <Link
              key={p._id}
              href={`/product/${p.slug}`}
              className="lg:w-1/4 md:w-1/2 p-4"
            >
              <div className="border rounded-lg p-4 cursor-pointer">
                <img
                  src={p.img}
                  className="h-[300px] mx-auto object-contain"
                />
                <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
                <p>₹{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
