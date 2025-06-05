
const ComplianceSection = () => {
  const certifications = [
    { name: 'RoHS', description: 'Restriction of Hazardous Substances' },
    { name: 'REACH', description: 'Registration, Evaluation, Authorisation and Restriction of Chemicals' },
    { name: 'UV Stabilized', description: 'Protected against UV degradation' },
    { name: 'Flame Retardant', description: 'Available on request' },
    { name: 'Operating Temp', description: '-25°C to +75°C' },
    { name: 'Environmentally Friendly', description: 'Sustainable materials and processes' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#090D2F] mb-4">
            Compliance & Certifications
          </h2>
          <p className="text-lg text-gray-600">
            Our products meet the highest industry standards for safety and environmental responsibility
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <div key={cert.name} className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#F5821F]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-[#F5821F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#090D2F] text-sm mb-1">{cert.name}</h4>
              <p className="text-xs text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
