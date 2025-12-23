import Link from "next/link";

export default function Header() {
  return (
    //sticky la page tala scroll garda pani header haraudina
    <header className="sticky top-0 z-50 flex justify-between items-center p-6 bg-white shadow">
      <h1 className="text-2xl font-bold">
        Better<span className="text-brand-blue">Montessori</span>
      </h1>
      <nav className="space-x-6">
        <Link href="#Feature">Features</Link>
        <Link href="#About">About Us</Link>
        <Link href="#Contact">Contact Us</Link>
        <Link href="#Testimonials">Testimonials</Link>
      </nav>
      <button className="ml-4 px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-500 transition-colors">
        Log In
      </button>
    </header>
  );
}
