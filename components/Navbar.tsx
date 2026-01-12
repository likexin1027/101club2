
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    const hashPath = path.replace('#', '');
    return location.pathname === (hashPath === '' ? '/' : hashPath);
  };

  const JOIN_LINK = "https://docs.qq.com/form/page/DVU1MRWtEWURtcVhx?nlc=1#/fill";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">101</span>
            </div>
            <div className="flex flex-col">
                <span className={`font-bold text-lg leading-tight tracking-wider ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>101 俱乐部</span>
                <span className="text-[10px] text-blue-600 font-medium uppercase tracking-widest">Tencent Games</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href.replace('#', '')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive(link.href) ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={JOIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-md"
            >
              加入我们
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href.replace('#', '')}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-md ${isActive(link.href) ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={JOIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold"
          >
            加入我们
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
