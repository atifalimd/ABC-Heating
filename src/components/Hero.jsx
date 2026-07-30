import { Phone, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#0f172a] text-white py-12 md:py-20 px-4 md:px-8 min-h-[calc(100vh-5rem)] flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
        {/* Main Hero Grid: On mobile flex-col puts image first, on lg screens lg:grid-cols-2 puts text left / image right */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile Image First / Desktop Right Column */}
          <div className="w-full lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <img
                src="/Hero.JPG"
                alt="Heating engineer working on boiler"
                className="w-full h-[280px] sm:h-[350px] lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent opacity-60"></div>
            </div>
          </div>

          {/* Mobile Text Second / Desktop Left Column */}
          <div className="space-y-6 w-full lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              No hot water or heating?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Call your local independent Leicester engineer for fast and fair
              repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="tel:07930525858"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-md flex items-center justify-center space-x-2 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call 07930 525858</span>
              </a>
              <a
                href="#services"
                className="border border-gray-600 hover:border-orange-500 text-white font-semibold px-6 py-3.5 rounded-md flex items-center justify-center transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* USPs at the Bottom (Left to Right) */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-900/50 p-3 sm:p-4 rounded-lg border border-gray-800">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
              <span className="font-medium text-gray-200 text-s sm:text-sm lg:text-base">
                No corporate overhead
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-900/50 p-3 sm:p-4 rounded-lg border border-gray-800">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
              <span className="font-medium text-gray-200 text-s sm:text-sm lg:text-base">
                Honest fixed prices
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-900/50 p-3 sm:p-4 rounded-lg border border-gray-800">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
              <span className="font-medium text-gray-200 text-s sm:text-sm lg:text-base">
                24/7 emergency help
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-900/50 p-3 sm:p-4 rounded-lg border border-gray-800">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
              <span className="font-medium text-gray-200 text-s sm:text-sm lg:text-base">
                Gas Safe certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
