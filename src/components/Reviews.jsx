import React from "react";
import { Star, CheckCircle } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      text: "Fixed our broken boiler on the same day",
      author: "Local Resident",
      date: "Recent Review",
    },
    {
      text: "Fair price and didn't try to sell parts we did not need",
      author: "Local Homeowner",
      date: "Recent Review",
    },
    {
      text: "Friendly, tidy, and got the heating back on fast",
      author: "Leicester Customer",
      date: "Recent Review",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 px-4 md:px-8 bg-white text-gray-900 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-1 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Google Verified Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Trusted By Local Customers
          </h2>
          <p className="text-gray-600 text-lg">
            See what people across Leicester are saying about our heating
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex space-x-1 mb-4 text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 text-base md:text-lg italic mb-6">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {review.author}
                  </h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center space-x-1 text-green-600 text-xs font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
