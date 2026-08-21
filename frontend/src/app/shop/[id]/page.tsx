import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProduct } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id).catch(() => null);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="aspect-square bg-[#1F2E24]/5">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[#1F2E24]/30">
                <span className="font-[family-name:var(--font-display)]">
                  Auréva
                </span>
              </div>
            )}
          </div>

          <div>
            <h1 className="font-[family-name:var(--font-display)] text-3xl text-[#1B1B1B]">
              {product.name}
            </h1>
            <p className="mt-3 text-xl text-[#B08D57]">₹{product.price}</p>
            <p className="mt-6 leading-relaxed text-[#1B1B1B]/70">
              {product.description}
            </p>

            <button className="mt-8 bg-[#1F2E24] px-8 py-3 text-sm uppercase tracking-[0.1em] text-[#F7F3EA] transition hover:bg-[#1F2E24]/90">
              Add to Cart
            </button>

            <p className="mt-4 text-sm text-[#1B1B1B]/50">
              {product.stock > 0
                ? `${product.stock} in stock`
                : "Currently out of stock"}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}