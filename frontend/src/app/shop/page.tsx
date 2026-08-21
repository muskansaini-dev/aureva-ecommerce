import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-[#1B1B1B]">
          Shop All
        </h1>
        <p className="mt-2 text-[#1B1B1B]/60">
          {products.length} {products.length === 1 ? "piece" : "pieces"}
        </p>

        {products.length === 0 ? (
          <p className="mt-10 text-[#1B1B1B]/60">
            New pieces are on their way. Check back soon.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3">
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