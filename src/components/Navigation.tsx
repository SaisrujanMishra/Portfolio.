import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Home } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 dark:bg-charcoal/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold hover:text-muted transition-colors"
            aria-label="Home"
          >
            <Home className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-8">        
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-muted transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-muted transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-sm font-medium hover:text-muted transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('resume')} className="text-sm font-medium hover:text-muted transition-colors">
              Resume
            </button>
            
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-offwhite-card dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 hover:scale-110 transition-transform"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}