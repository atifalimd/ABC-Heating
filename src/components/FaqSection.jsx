import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you charge a call-out fee for emergency boiler repairs?",
      answer:
        "We believe in honest, transparent pricing with no hidden overheads. Call us directly to discuss your heating issue, and we will give you a clear breakdown before any work begins.",
    },
    {
      question: "How quickly can you attend a boiler breakdown in Leicester?",
      answer:
        "We offer 24/7 emergency help and are based right here in Evington, Leicester, allowing us to respond quickly to urgent heating and hot water emergencies.",
    },
    {
      question: "Are your engineers Gas Safe registered?",
      answer:
        "Yes, all our engineers are fully qualified Gas Safe registered professionals, ensuring your repairs and installations comply with all safety regulations.",
    },
    {
      question: "Why should I service my boiler annually?",
      answer:
        "An annual boiler service keeps your system running efficiently, helps prevent unexpected breakdowns, and is typically required to keep manufacturer warranties valid.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find clear answers about our local heating and boiler services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm md:text-base border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
