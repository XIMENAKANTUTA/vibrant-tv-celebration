
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
