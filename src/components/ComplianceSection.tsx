
const ComplianceSection = () => {
  const certifications = [
    { 
      name: 'RoHS', 
      description: 'Restriction of Hazardous Substances',
      icon: (
        <svg className="w-8 h-8 text-[#F5821F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12h8"/>
          <path d="M12 8v8"/>
        </svg>
      )
    },
    { 
      name: 'REACH', 
      description: 'Registration, Evaluation, Authorisation and Restriction of Chemicals',
      icon: (
        <svg className="w-8 h-8 text-[#F5821F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    { 
      name: 'UV Stabilized', 
      description: 'Protected against UV degradation',
      icon: (
        <svg className="w-8 h-8 text-[#F5821F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      )
    },
    { 
      name: 'Flame Retardant', 
      description: 'Available on request',
      icon: (
        <svg className="w-8 h-8 text-[#F5821F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
        </svg>
      )
    },
    { 
      name: 'Operating Temp', 
      description: '-25°C to +75°C',
      icon: (
        <svg className="w-8 h-8 text-[#F5821F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
        </svg>
      )
    },
    { 
      name: 'Environmentally Friendly', 
      description: 'Sustainable materials and processes',
      icon: (
        <svg className="w-8 h-8 text-[#F5821F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 20h10"/>
          <path d="M10 20c5.5-2.5.8-6.4 3-10"/>
          <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
          <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.7 4.3-1.4 1-1.1 1.6-2.7 1.7-4.6-2.7.1-4 1-4.9 2z"/>
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F5821F] to-[#090D2F]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#090D2F]/10 rounded-full text-[#090D2F] text-sm font-medium mb-6">
            🛡️ Quality Assurance
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#090D2F] mb-6">
            Compliance & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Our products meet the highest industry standards for safety and environmental responsibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.name} 
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#F5821F]/30 hover:shadow-xl hover:shadow-[#F5821F]/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5821F]/5 to-[#090D2F]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F5821F]/10 to-[#F5821F]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h4 className="font-bold text-[#090D2F] text-xl mb-3">{cert.name}</h4>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
