
const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/lovable-uploads/57aefb15-e8e8-4b80-af6f-5c6db25f1b7e.png" 
          alt="PVC components background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#090D2F] mb-6">
              Durable Soft PVC Protection and{' '}
              <span className="text-[#F5821F]">Insulation Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Reliable, customizable caps and coatings for electronics, tools, connectors, 
              and industrial applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#flex-caps"
                className="inline-flex items-center px-8 py-4 bg-[#F5821F] text-white font-semibold text-lg rounded-lg hover:bg-[#E5741C] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Flex Caps
              </a>
              <a
                href="#coatings"
                className="inline-flex items-center px-8 py-4 bg-[#090D2F] text-white font-semibold text-lg rounded-lg hover:bg-[#0F1340] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Discover Coatings
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/be55e7df-b4e6-4fef-ac9e-a3ef7e3e82e5.png" 
              alt="ShrinkTech PVC Products" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
