import Navbar from "@/components/Navbar";
import Link from "next/link";
import { products } from "@/app/data/products";
import Footer from "@/components/Footer";

export default function Hoodies() {
  const hoodies = Object.values(products).filter(
    (p) => p.category === "hoodies"
  );

  return (
    <>
      <Navbar />

      <section className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {hoodies.map((p) => (
            <Link
              key={p.slug}
              href={`/product/${p.slug}`}
              className="lg:w-1/4 md:w-1/2 p-4"
            >
              <div className="border rounded-lg p-4 cursor-pointer">
                <img
                  src={p.image}
                  className="h-[300px] mx-auto object-contain"
                />
                <h3 className="mt-4 text-lg font-medium">{p.name}</h3>
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
