
const CoatingsSection = () => {
  const materialProperties = [
    { property: 'Density', method: 'EN 1183-1:2004', value: '1.15 – 1.2 g/cm³' },
    { property: 'Shore Hardness', method: 'EN 868', value: '66 Shore A' },
    { property: 'Tensile Strength', method: 'ISO EN 527-3', value: '14 MPa' },
    { property: 'Tensile Strength at Break', method: 'ISO EN 527-3', value: '350%' },
    { property: 'Abrasion Resistance', method: 'EN 5470-1', value: '11–12 mg after 1000 cycles' },
    { property: 'Operating Temperature', method: '–', value: '-25°C to +75°C' },
    { property: 'Tear Strength', method: 'ISO 34 Method B', value: '60 mm/min' },
    { property: 'Cleaning Method', method: '–', value: 'Odorless solvent' },
  ];

  return (
    <section id="coatings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soft PVC Coating and Dipping Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Soft PVC coating is ideal for tool handles, grips, bus bars, and other metal objects. 
            Offers durable, UV-stabilized, flexible coverage to prevent damage, corrosion, or slippage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Applications */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Grips for tools or fixtures</h4>
                  <p className="text-gray-600">Enhanced grip and comfort for extended use</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tool dipping for custom shapes</h4>
                  <p className="text-gray-600">Versatile coating solution for any geometry</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cap with pull-tab for easy disassembly</h4>
                  <p className="text-gray-600">Removable protection when needed</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Bus bar coating for electrical insulation</h4>
                  <p className="text-gray-600">Safety and insulation for electrical components</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Special insulated end caps</h4>
                  <p className="text-gray-600">Custom protection solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Features</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">Very flexible and durable</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">UV-stabilized and flame retardant (available on request)</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">Environmentally friendly</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">Custom shapes, thicknesses, and colors (RAL scale)</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">Cost-effective for custom production with low tooling costs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Material Properties Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-bold text-gray-900">Material Properties</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method/Test</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {materialProperties.map((item, index) => (
                  <tr key={item.property} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.property}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.method}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoatingsSection;
