import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Home, Menu, X } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">        
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-muted transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-sm font-medium hover:text-muted transition-colors">
              Experience
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

          {/* Mobile Actions (Menu Toggle & Theme Switcher) */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-offwhite-card dark:bg-charcoal-card border border-gray-200 dark:border-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-offwhite-card dark:hover:bg-charcoal-card transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-offwhite/95 dark:bg-charcoal/95 backdrop-blur-md transition-all duration-300">
          <div className="flex flex-col space-y-4 px-6 py-6">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-left text-base font-medium py-2 hover:text-muted transition-colors border-b border-gray-100 dark:border-gray-900"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-left text-base font-medium py-2 hover:text-muted transition-colors border-b border-gray-100 dark:border-gray-900"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left text-base font-medium py-2 hover:text-muted transition-colors border-b border-gray-100 dark:border-gray-900"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-left text-base font-medium py-2 hover:text-muted transition-colors border-b border-gray-100 dark:border-gray-900"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('resume')} 
              className="text-left text-base font-medium py-2 hover:text-muted transition-colors"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}