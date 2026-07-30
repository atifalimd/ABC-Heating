import React from "react";
import { MapPin, ShieldCheck, Users } from "lucide-react";

const TrustBar = () => {
  return (
    <section className="bg-white text-gray-900 py-12 px-4 md:px-8 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Trust Item 1 */}
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
            <div className="bg-orange-100 p-3 rounded-lg text-orange-600 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Local Roots</h3>
              <p className="text-sm text-gray-600">
                Based right here in Evington, Leicester.
              </p>
            </div>
          </div>

          {/* Trust Item 2 */}
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
            <div className="bg-orange-100 p-3 rounded-lg text-orange-600 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Fully Certified</h3>
              <p className="text-sm text-gray-600">
                Fully qualified Gas Safe heating engineers.
              </p>
            </div>
          </div>

          {/* Trust Item 3 */}
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
            <div className="bg-orange-100 p-3 rounded-lg text-orange-600 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Trusted Local Service
              </h3>
              <p className="text-sm text-gray-600">
                Hundreds of local residential customers helped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
