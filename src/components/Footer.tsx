
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              ShrinkTech<span className="text-red-400">®</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Leading manufacturer of soft PVC protection and insulation solutions for industrial applications.
            </p>
            <p className="text-sm text-gray-400">
              Reliable, customizable solutions for electronics, automotive, and industrial sectors.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#flex-caps" className="hover:text-white transition-colors">STEC-F Flex Caps</a></li>
              <li><a href="#coatings" className="hover:text-white transition-colors">PVC Coatings</a></li>
              <li><span className="text-gray-400">Custom Solutions</span></li>
              <li><span className="text-gray-400">Tool Dipping</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="text-gray-400">Email:</span><br />
                <a href="mailto:sales@shrinktech.com" className="hover:text-white transition-colors">
                  sales@shrinktech.com
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Temperature Range: -25°C to +75°C<br />
                Compliance: RoHS, REACH, UV Stabilized
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ShrinkTech®. All rights reserved. | Environmentally friendly PVC solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
