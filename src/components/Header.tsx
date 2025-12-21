import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow">
      <h1 className="text-2xl font-bold">
        Better<span className="text-[#38BAE0]">Montessori</span>
      </h1>
      <nav className="space-x-6">
        <Link href="#features">Features</Link>
        <Link href="#about">About Us</Link>
        <Link href="#contact">Contact Us</Link>
        <Link href="#testimonials">Testimonials</Link>
      </nav>
      <button className="ml-4 px-4 py-2 bg-[#38BAE0] text-white rounded-lg">
        Log In
      </button>
    </header>
  );
}
