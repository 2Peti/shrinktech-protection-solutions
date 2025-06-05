
const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Durable Soft PVC Protection and{' '}
            <span className="text-red-600">Insulation Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Reliable, customizable caps and coatings for electronics, tools, connectors, 
            and industrial applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#flex-caps"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold text-lg rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Flex Caps
            </a>
            <a
              href="#coatings"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discover Coatings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
