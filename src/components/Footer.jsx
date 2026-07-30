import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-12 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Col 1: Logo & About */}
        <div className="space-y-4">
          <img
            src="/abc_heating.png"
            alt="ABC Heating Services Logo"
            className="h-24 w-auto object-contain"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            ABC Heating Services, 18 New Way Road, Leicester, LE5 5UA
          </p>
          <div className="flex items-center space-x-2 text-xs text-orange-400 font-medium pt-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Fully insured local heating experts</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-base uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-orange-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-orange-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#areas"
                className="hover:text-orange-400 transition-colors"
              >
                Areas Covered
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="hover:text-orange-400 transition-colors"
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Details */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-base uppercase tracking-wider">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <span>18 New Way Road, Leicester, LE5 5UA</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <a
                href="tel:07930525858"
                className="hover:text-orange-400 transition-colors font-semibold"
              >
                07930 525858
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Working Hours */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-base uppercase tracking-wider">
            Availability
          </h4>
          <div className="flex items-start space-x-3 text-sm">
            <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <span>Available 24 hours a day, 7 days a week</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} ABC Heating Services. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
