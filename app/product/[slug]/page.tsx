import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getProduct(slug: string) {
  const res = await fetch(
    `http://localhost:3000/api/products/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-5 py-24 text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="container px-5 py-14 mx-auto flex flex-wrap">
        <img
          src={product.img}
          className="lg:w-1/2 w-full object-cover rounded"
        />

        <div className="lg:w-1/2 lg:pl-10">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="mt-4">{product.desc}</p>
          <p className="mt-4 text-2xl font-bold">₹{product.price}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
