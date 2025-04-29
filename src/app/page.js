// app/page.jsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-6">Click on a product to view details (loading will show!)</p>

      <div className="flex gap-4">
        <Link href="/product/1" className="text-blue-500 underline">Product 1</Link>
        <Link href="/product/2" className="text-blue-500 underline">Product 2</Link>
      </div>
    </div>
  );
}
