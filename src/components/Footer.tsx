
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#090D2F] to-[#0F1340] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F5821F] to-[#E5741C]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5821F]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-black">
              ShrinkTech<span className="text-[#F5821F]">®</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Leading manufacturer of soft PVC protection and insulation solutions for industrial applications.
            </p>
            <p className="text-sm text-gray-400">
              Reliable, customizable solutions for electronics, automotive, and industrial sectors.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Products</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#flex-caps" className="hover:text-[#F5821F] transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-[#F5821F] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  STEC-F Flex Caps
                </a>
              </li>
              <li>
                <a href="#coatings" className="hover:text-[#F5821F] transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-[#F5821F] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  PVC Coatings
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                <span className="text-gray-400">Custom Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                <span className="text-gray-400">Tool Dipping</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <p className="text-sm text-gray-300 mb-2">Email:</p>
                <a href="mailto:sales@shrinktech.com" className="text-[#F5821F] hover:text-white transition-colors font-semibold">
                  sales@shrinktech.com
                </a>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <p><span className="text-white font-semibold">Temperature Range:</span> -25°C to +75°C</p>
                <p><span className="text-white font-semibold">Compliance:</span> RoHS, REACH, UV Stabilized</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ShrinkTech®. All rights reserved. | Environmentally friendly PVC solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
