import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-[#1F2E24]/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[#1F2E24]"
        >
          Auréva
        </Link>

        <nav className="hidden gap-8 text-sm uppercase tracking-[0.15em] text-[#1B1B1B]/70 md:flex">
          <Link href="/" className="transition hover:text-[#B08D57]">
            Home
          </Link>
          <Link href="/shop" className="transition hover:text-[#B08D57]">
            Shop
          </Link>
          <Link href="/about" className="transition hover:text-[#B08D57]">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-5 text-sm">
          <Link href="/login" className="transition hover:text-[#B08D57]">
            Login
          </Link>
          <Link href="/cart" className="transition hover:text-[#B08D57]">
            Cart (0)
          </Link>
        </div>
      </div>
    </header>
  );
}