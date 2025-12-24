import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="flex items-center justify-between w-full h-[72px] px-4 md:px-[60px]">
        <div className="w-auto md:w-[250px] flex-shrink-0">
          <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">
            Better<span className="text-brand-blue">Montessori</span>
          </h1>
        </div> 
        <nav className="hidden sm:flex flex-1 justify-center items-center px-2">
          <div className="flex items-center gap-4 md:gap-8 text-slate-600 font-medium text-xs md:text-[15px]">
            <Link href="#Feature" className="hover:text-brand-blue transition-all whitespace-nowrap">Features</Link>
            <Link href="#About" className="hover:text-brand-blue transition-all whitespace-nowrap">About Us</Link>
            <Link href="#Contact" className="hover:text-brand-blue transition-all whitespace-nowrap">Contact Us</Link>
            <Link href="#Testimonials" className="hover:text-brand-blue transition-all whitespace-nowrap">Testimonials</Link>
          </div>
        </nav>
        <div className="w-auto md:w-[250px] flex justify-end items-center flex-shrink-0">
          <button className="
            flex items-center justify-center 
            px-4 py-2 md:w-[140px] md:h-[48px]
            bg-brand-blue text-white
            rounded-lg font-bold text-xs md:text-[16px]
            transition-all hover:brightness-105 active:scale-95 shadow-sm">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
}