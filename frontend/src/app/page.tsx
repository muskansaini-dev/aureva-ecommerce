import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Navbar />

      <section className="border-b border-[#1F2E24]/10 bg-[#1F2E24]">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57]">
            New Season
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-tight text-[#F7F3EA] md:text-6xl">
            Jewelry that catches
            <br />
            the light, not the eye.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[#F7F3EA]/70">
            Thoughtfully designed pieces, crafted to look and feel like
            heirlooms — without the price tag.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#1B1B1B]">
            Featured Pieces
          </h2>
        </div>

        {products.length === 0 ? (
          <p className="text-[#1B1B1B]/60">
            New pieces are on their way. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}