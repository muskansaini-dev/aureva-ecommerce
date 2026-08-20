export default function Footer() {
  return (
    <footer className="mt-24 bg-[#1F2E24] text-[#F7F3EA]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xl">
              Auréva
            </p>
            <p className="mt-3 text-sm text-[#F7F3EA]/70">
              Fine artificial jewelry, designed to be worn every day and
              loved for years.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#B08D57]">
              Shop
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#F7F3EA]/80">
              <li>Earrings</li>
              <li>Necklaces</li>
              <li>Rings</li>
              <li>New Arrivals</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#B08D57]">
              Support
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#F7F3EA]/80">
              <li>Shipping & Returns</li>
              <li>Care Guide</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#F7F3EA]/15 pt-6 text-xs text-[#F7F3EA]/50">
          © 2026 Auréva. All rights reserved.
        </div>
      </div>
    </footer>
  );
}