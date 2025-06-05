
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Modern background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,#F5821F_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,#090D2F_0%,transparent_50%)]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#F5821F]/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#090D2F]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#F5821F]/10 rounded-full text-[#F5821F] text-sm font-medium border border-[#F5821F]/20">
                ✨ Industry Leading PVC Solutions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-[#090D2F] leading-tight tracking-tight">
                Durable Soft PVC
                <span className="block text-[#F5821F] bg-gradient-to-r from-[#F5821F] to-[#E5741C] bg-clip-text text-transparent">
                  Protection
                </span>
                & Insulation
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Reliable, customizable caps and coatings for electronics, tools, connectors, 
                and industrial applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#flex-caps"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#F5821F] text-white font-semibold text-lg rounded-2xl hover:bg-[#E5741C] transition-all duration-300 shadow-lg shadow-[#F5821F]/25 hover:shadow-xl hover:shadow-[#F5821F]/40 hover:-translate-y-1"
              >
                Explore Flex Caps
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#coatings"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#090D2F] font-semibold text-lg rounded-2xl border-2 border-gray-200 hover:border-[#090D2F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Discover Coatings
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F5821F]/20 to-[#090D2F]/20 rounded-3xl blur-xl"></div>
            <img 
              src="/lovable-uploads/8b9ed14b-e1cb-4f85-9c4a-7c7ae1f35e90.png" 
              alt="ShrinkTech PVC Products" 
              className="relative w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
