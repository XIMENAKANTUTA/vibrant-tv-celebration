
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center items-center h-16 space-x-8">
          <li>
            <Link to="/" className="nav-link">
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/videos" className="nav-link">
              VIDEOS
            </Link>
          </li>
          <li>
            <Link to="/music" className="nav-link">
              MUSICA
            </Link>
          </li>
          <li>
            <Link to="/for-you" className="nav-link">
              PARA TI
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
