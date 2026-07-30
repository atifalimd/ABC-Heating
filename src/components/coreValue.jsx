import { CheckCircle2 } from "lucide-react";

const CoreValues = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white text-gray-900 min-h-[calc(100vh-5rem)]">
      <div className="max-w-7xl mx-auto md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Overlapping Images Layout */}
          <div className="relative pb-12 lg:pb-30">
            <div className="relative w-4/5 rounded-xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="Engineer working on pipes"
                className="w-full h-[280px] sm:h-[340px] object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
                alt="Engineer consultation"
                className="w-full h-[200px] sm:h-[240px] object-cover"
              />
            </div>
          </div>

          {/* Right Side: Short Heading, Bullet Points & Action Buttons */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Our Core Values
            </h2>

            {/* Bullet Points replacing long paragraphs */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">
                  Independent and fair local service tailored to your
                  convenience.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">
                  Transparent management with zero hidden corporate overheads.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">
                  Excellence, efficiency, and full regulatory compliance
                  adherence.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">
                  Trusted expertise dedicated to long-term residential customer
                  care.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#services"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-md text-center transition-colors shadow-sm"
              >
                Discover More
              </a>
              <a
                href="#contact"
                className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 text-gray-700 font-semibold px-6 py-3.5 rounded-md text-center transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
