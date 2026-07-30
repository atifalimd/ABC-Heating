import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      <nav className="bg-white border-b border-gray-200 py-4 px-4 md:px-8 flex justify-between items-center shadow-sm relative">
        <div className="flex items-center space-x-2">
          <a
            href="#home"
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src="/abc_heating.png"
              alt="ABC Heating Services Logo"
              className="h-20 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <a
            href="#home"
            className="hover:text-orange-500 transition-colors text-orange-500"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-orange-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#reviews"
            className="hover:text-orange-500 transition-colors"
          >
            Reviews
          </a>
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="tel:07930525858"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2.5 rounded-md flex items-center space-x-2 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>07930 525858</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-3">
          <a
            href="tel:07930525858"
            className="bg-orange-500 text-white p-2 rounded-md"
          >
            <Phone className="w-6 h-6" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-orange-500 focus:outline-none"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-3 shadow-lg">
          <a href="#home" className="block text-orange-500 font-medium py-1">
            Home
          </a>
          <a href="#services" className="block text-gray-700 font-medium py-1">
            Services
          </a>
          <a href="#areas" className="block text-gray-700 font-medium py-1">
            Areas Covered
          </a>
          <a href="#reviews" className="block text-gray-700 font-medium py-1">
            Reviews
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
