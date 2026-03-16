//import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center justify-center
        p-2 rounded-lg transition-all duration-300
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-indigo-900/50 to-violet-900/50 text-cream hover:from-indigo-800/60 hover:to-violet-800/60' 
          : 'bg-gradient-to-br from-blue-400/30 to-cyan-400/30 text-blackboard hover:from-blue-400/40 hover:to-cyan-400/40'}
        backdrop-blur-sm hover:scale-105
      `}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="w-8 h-8 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </div>
    </button>
  );
}