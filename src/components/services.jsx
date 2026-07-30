import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Boiler Repair",
      desc: "Fast fixes for breakdowns and no heat",
      image: "/BoilerRepair.PNG",
    },
    {
      title: "Boiler Service",
      desc: "Annual checks to keep your warranty valid",
      image: "/BoilerService.PNG",
    },
    {
      title: "Boiler Installation",
      desc: "Efficient new units fitted cleanly",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-16 px-4 md:px-8 bg-gray-50 text-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 text-lg">
            Professional solutions tailored for your home heating needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="h-112 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-4/5 h-full object-cover mx-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{service.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <a
                  href="tel:07930525858"
                  className="bg-[#0f172a] hover:bg-orange-500 text-white font-medium px-4 py-3 rounded-md flex items-center justify-center space-x-2 transition-colors w-full text-sm"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
