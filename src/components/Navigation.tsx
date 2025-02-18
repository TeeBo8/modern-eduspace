
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/"
            className="flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors"
          >
            <GraduationCap className="h-8 w-8" />
            <span className="font-display font-bold text-xl">EduSpace</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === '/' ? 'text-accent' : 'text-gray-600'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/poo-tutorial"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === '/poo-tutorial' ? 'text-accent' : 'text-gray-600'
              }`}
            >
              Tutoriel POO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
