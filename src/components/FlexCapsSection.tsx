
import { useState } from 'react';
import { Search } from 'lucide-react';

const FlexCapsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const flexCapsData = [
    { articleNo: 'STEC-F-04', id: '4', wallThickness: '0.75', length: '3.0 – 70.0', moq: '10000' },
    { articleNo: 'STEC-F-05', id: '5', wallThickness: '1.0', length: '3.0 – 70.0', moq: '10000' },
    { articleNo: 'STEC-F-06', id: '6', wallThickness: '1.0', length: '3.0 – 70.0', moq: '10000' },
    { articleNo: 'STEC-F-07', id: '7', wallThickness: '1.0', length: '3.0 – 70.0', moq: '10000' },
    { articleNo: 'STEC-F-08', id: '8', wallThickness: '1.0', length: '3.0 – 70.0', moq: '10000' },
    { articleNo: 'STEC-F-09', id: '9', wallThickness: '1.4', length: '3.0 – 70.0', moq: '5000' },
    { articleNo: 'STEC-F-10', id: '10', wallThickness: '1.4', length: '3.0 – 70.0', moq: '5000' },
    { articleNo: 'STEC-F-12', id: '12', wallThickness: '1.4', length: '3.0 – 70.0', moq: '5000' },
    { articleNo: 'STEC-F-14', id: '14', wallThickness: '1.5', length: '3.0 – 70.0', moq: '5000' },
    { articleNo: 'STEC-F-16', id: '16', wallThickness: '1.5', length: '3.0 – 70.0', moq: '5000' },
    { articleNo: 'STEC-F-18', id: '18', wallThickness: '1.5', length: '3.0 – 70.0', moq: '5000' },
    { articleNo: 'STEC-F-19', id: '19', wallThickness: '1.7', length: '3.0 – 70.0', moq: '3000' },
    { articleNo: 'STEC-F-20', id: '20', wallThickness: '1.7', length: '3.0 – 70.0', moq: '3000' },
    { articleNo: 'STEC-F-25', id: '25', wallThickness: '1.8', length: '3.0 – 70.0', moq: '5000' },
    { articleNo: 'STEC-F-30', id: '30', wallThickness: '1.8', length: '3.0 – 70.0', moq: '2000' },
    { articleNo: 'STEC-F-40', id: '40', wallThickness: '1.8', length: '3.0 – 70.0', moq: '2000' },
    { articleNo: 'STEC-F-50', id: '50', wallThickness: '1.9', length: '3.0 – 70.0', moq: '1000' },
    { articleNo: 'STEC-F-60', id: '60', wallThickness: '1.9', length: '3.0 – 70.0', moq: '1000' },
  ];

  const filteredData = flexCapsData.filter(item =>
    item.articleNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.includes(searchTerm)
  );

  return (
    <section id="flex-caps" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#090D2F] mb-6">
            STEC-F Soft PVC Insulating Flex Caps
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            ShrinkTech® FlexCap end caps provide flexible, durable protection for connectors, 
            critical parts, tubes, and cables. Ideal for automotive, electronics, and tool manufacturing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-[#090D2F] mb-2">Material</h4>
            <p className="text-gray-600">PVC, Shore A 40–90</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-[#090D2F] mb-2">Colors</h4>
            <p className="text-gray-600">Black or grey standard; custom RAL colors available</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-[#090D2F] mb-2">Temperature Range</h4>
            <p className="text-gray-600">-25°C to +75°C</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-[#090D2F] mb-2">Compliance</h4>
            <p className="text-gray-600">UV Stabilized, RoHS, and REACH compliant</p>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-[#F5821F]/10 p-8 rounded-lg mb-12 border border-[#F5821F]/20">
          <h3 className="text-xl font-bold text-[#090D2F] mb-4">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#F5821F] mr-2">•</span>
                Available in nearly every diameter, length, and wall thickness
              </li>
              <li className="flex items-start">
                <span className="text-[#F5821F] mr-2">•</span>
                Custom shapes and tooling available on request
              </li>
              <li className="flex items-start">
                <span className="text-[#F5821F] mr-2">•</span>
                Environmentally friendly
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#F5821F] mr-2">•</span>
                Packaging: Bag format
              </li>
              <li className="flex items-start">
                <span className="text-[#F5821F] mr-2">•</span>
                Flexible and durable protection
              </li>
              <li className="flex items-start">
                <span className="text-[#F5821F] mr-2">•</span>
                Suitable for automotive and electronics
              </li>
            </ul>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-bold text-[#090D2F] mb-4">Dimension Specifications</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by article number or ID..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5821F] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#090D2F]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Article No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID (mm)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Wall Thickness (W ±20%)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Length (mm ±2)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">MOQ (pcs)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item, index) => (
                  <tr key={item.articleNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#090D2F]">{item.articleNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.wallThickness}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.length}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.moq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-gray-50 text-sm text-gray-600">
            <p><strong>Note:</strong> Other diameters, lengths, and wall thicknesses available on request. Tooling costs may apply for special forms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexCapsSection;
