import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* The root background colors are established here */}
        <div className="min-h-screen bg-offwhite dark:bg-charcoal text-charcoal dark:text-offwhite transition-colors duration-300 font-sans">
          <Navigation />
          <HomePage />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;