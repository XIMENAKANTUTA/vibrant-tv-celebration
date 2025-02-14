
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Tv } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <Tv className="text-neonPink" size={24} />
          </div>

          <div className="hidden md:block absolute right-4">
            <Tv className="text-neonPink" size={24} />
          </div>
          
          <ul className={`md:flex md:items-center md:space-x-8 ${isMenuOpen ? 'mobile-menu' : 'hidden md:flex'}`}>
            <li className="py-2 md:py-0">
              <Link to="/" className="nav-link block text-center" onClick={() => setIsMenuOpen(false)}>
                INICIO
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/videos" className="nav-link block text-center" onClick={() => setIsMenuOpen(false)}>
                VIDEOS
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/music" className="nav-link block text-center" onClick={() => setIsMenuOpen(false)}>
                MUSICA
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/for-you" className="nav-link block text-center" onClick={() => setIsMenuOpen(false)}>
                PARA TI
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
