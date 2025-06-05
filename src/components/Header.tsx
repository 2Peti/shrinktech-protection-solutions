
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-black text-[#090D2F]">
              ShrinkTech<span className="text-[#F5821F]">®</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'STEC-F Flex Caps', 'PVC Coatings', 'Contact'].map((item, index) => {
              const href = index === 0 ? '#home' : index === 1 ? '#flex-caps' : index === 2 ? '#coatings' : '#contact';
              return (
                <a 
                  key={item}
                  href={href} 
                  className="relative text-gray-700 hover:text-[#F5821F] font-medium transition-colors py-2 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F5821F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#F5821F] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 rounded-b-2xl shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {[
                { title: 'Home', href: '#home' },
                { title: 'STEC-F Flex Caps', href: '#flex-caps' },
                { title: 'PVC Coatings', href: '#coatings' },
                { title: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-[#F5821F] hover:bg-[#F5821F]/5 font-medium rounded-xl transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
