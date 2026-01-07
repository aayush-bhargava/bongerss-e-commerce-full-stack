import Navbar from "@/components/Navbar";
import Link from "next/link";
import { products } from "@/app/data/products";
import Footer from "@/components/Footer";

export default function Mugs() {
  const mugs = Object.values(products).filter(
    (p) => p.category === "mugs"
  );

  return (
    <>
      <Navbar />

      <section className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mugs.map((p) => (
            <Link
              key={p.slug}
              href={`/product/${p.slug}`}
              className="border rounded-lg overflow-hidden shadow-sm cursor-pointer"
            >
              <div className="h-72 bg-gray-100 flex items-center justify-center">
                <img
                  src={p.image}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-4">
                <h3 className="text-gray-500 text-xs mb-1">Mugs</h3>
                <h2 className="text-gray-900 text-lg font-medium">
                  {p.name}
                </h2>
                <p className="mt-1">₹{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
