import Navbar from "@/components/Navbar";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function Covers(): JSX.Element {
  const covers = Object.values(products).filter(
    (p) => p.category === "covers"
  );

  return (
    <div>
      <Navbar />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {covers.map((p) => (
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
                  <h3 className="text-xs text-gray-500 mb-1">Covers</h3>
                  <h2 className="text-lg font-medium text-gray-900">
                    {p.name}
                  </h2>
                  <p className="mt-1">₹{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
