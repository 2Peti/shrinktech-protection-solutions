
import { Shield, ShieldCheck } from 'lucide-react';

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
      icon: <ShieldCheck className="w-8 h-8 text-[#F5821F]" />
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
          <path d="M12 2L22 7l-10 5L2 7z"/>
          <path d="M2 17h20"/>
          <path d="M12 22V12"/>
        </svg>
      )
    },
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
                {cert.icon}
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
