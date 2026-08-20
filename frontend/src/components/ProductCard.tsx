import Link from "next/link";
import type { Product } from "@/lib/api";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <div className="aspect-square overflow-hidden bg-[#1F2E24]/5">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#1F2E24]/30">
            <span className="font-[family-name:var(--font-display)] text-sm">
              Auréva
            </span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="font-[family-name:var(--font-display)] text-lg text-[#1B1B1B]">
          {product.name}
        </p>
        <p className="mt-1 text-sm text-[#B08D57]">₹{product.price}</p>
      </div>
    </Link>
  );
}