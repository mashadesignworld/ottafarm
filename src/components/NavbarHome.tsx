import Image from "next/image";
import Link from "next/link";

const NavbarHome = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo on the Left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // Assuming logo.png is directly in your public directory.
                               // Adjust if your file is .pg or .jpg, or in a subdirectory.
            alt="Otta Farm Logo"
            width={50} // Adjust size as needed
            height={50} // Adjust size as needed
            className="mr-2 rounded-md shadow-sm" // Subtle shadow on the logo itself
            priority // For better LCP on initial load
          />
          <span className="hidden md:block font-bold text-xl text-green-600">Otta Farm</span>
        </Link>

        {/* Navigation Buttons on the Right */}
        <div className="flex items-center space-x-4">
          <Link href="/contact" className="text-gray-700 hover:text-green-500 transition duration-300">
            Contact
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-500 transition duration-300">
            About Us
          </Link>
          <Link href="/dashboard/admin" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300 shadow-sm">
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
};
export default NavbarHome;