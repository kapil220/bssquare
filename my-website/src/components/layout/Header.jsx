import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '#',
      hasDropdown: true,
      submenu: [
        { name: 'CAD & BIM', path: '/services/cad-bim' },
        { name: 'Virtual HR Services', path: '/services/hr-services' },
      ]
    },
    { name: 'Career', path: '/career' },
    
    // { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/5 py-3 border-b border-gray-100' 
        : 'bg-white/95 backdrop-blur-xl py-4'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Image Only */}
          <Link to="/" className="flex items-center group relative">
            <div className="relative">
              {/* Logo Image Container */}
              <div className={`transform transition-all duration-500  ${
                scrolled ? 'w-28 h-12' : 'w-28 h-14'
              }`}>
                <img 
                  src="/logo.jpeg" // Replace with your actual logo path
                  alt="B Square Global"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Hover Glow Effect */}
              <div className="absolute  rounded-xl opacity-0 "></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button 
                      className="flex items-center px-6 py-3 font-semibold text-gray-700 hover:text-[#FFBD59] transition-all duration-300 group relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-2 group-hover:rotate-180 transition-transform duration-300" />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFBD59] group-hover:w-full transition-all duration-500"></div>
                    </button>
                    <div 
                      className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform origin-top ${
                        servicesOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-2'
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="p-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.path}
                            className="flex items-center px-4 py-3 text-gray-700 hover:text-[#FFBD59] hover:bg-[#FFBD59]/10 rounded-xl transition-all duration-300 group/item"
                          >
                            <div className="w-2 h-2 bg-[#FFBD59] rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="px-6 py-3 font-semibold text-gray-700 hover:text-[#FFBD59] transition-all duration-300 relative group"
                  >
                    {item.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFBD59] group-hover:w-full transition-all duration-500"></div>
                    <div className="absolute -inset-2 bg-[#FFBD59]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-8 py-3 bg-[#FFBD59] text-gray-900 font-bold rounded-xl relative overflow-hidden group hover:bg-[#FFBD59]/90 transition-all duration-500 shadow-lg shadow-[#FFBD59]/20 hover:shadow-[#FFBD59]/30 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ChevronDown size={16} className="ml-2 group-hover:rotate-180 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-[#FFBD59] transition-all duration-300 relative z-50"
          >
            {isOpen ? (
              <X size={28} className="transform rotate-90 transition-transform duration-300" />
            ) : (
              <Menu size={28} className="hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-white transform transition-all duration-700 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
            {/* Mobile Logo */}
            <div className="mb-8">
              <img
                src="/logo.jpeg" // Replace with your actual logo path
                alt="B Square Global"
                className="w-28 h-20 object-contain mx-auto mb-4"
              />
            </div>

            {navigation.map((item) => (
              <div key={item.name} className="text-center">
                {item.hasDropdown ? (
                  <>
                    <div className="text-2xl font-bold text-gray-700 mb-4">
                      {item.name}
                    </div>
                    <div className="space-y-3">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          className="block text-xl text-gray-600 hover:text-[#FFBD59] transition-all duration-300 py-2 hover:translate-x-4"
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="text-3xl font-bold text-gray-700 hover:text-[#FFBD59] transition-all duration-500 hover:scale-110 block py-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-8 px-12 py-4 bg-[#FFBD59] text-gray-900 rounded-2xl text-xl font-bold shadow-2xl shadow-[#FFBD59]/30 hover:scale-105 transition-transform duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;