import { Github, Linkedin, Mail, User } from 'lucide-react';
import About from '../components/About';
import SkillsMarquee from '../components/SkillsMarquee';
import ProjectsGallery from '../components/ProjectsGallery';
import Resume from '../components/Resume';

export default function HomePage() {
  return (
    <div className="w-full pt-20"> {/* pt-20 pushes content down so it's not hidden under the fixed navbar */}
      
      {/* Hero Section */}
      <section id="home" className="min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-12">
          
          {/* Text Content */}
          <div className="max-w-3xl flex-1">
            <h2 className="text-base md:text-lg font-bold mb-4 text-muted uppercase tracking-widest">
              Saisrujan Mishra
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Developer.
            </h2>
            
            <p className="text-lg md:text-xl mb-6 text-charcoal dark:text-muted max-w-xl leading-relaxed font-medium">
              Crafting digital experiences through code.
            </p>
            
            <div className="text-base md:text-lg mb-8 text-muted max-w-xl leading-relaxed space-y-2">
              <p>• <strong>Web Development:</strong> Full-stack applications and scalable architectures.</p>
              <p>• <strong>Web3 & Blockchain:</strong> Smart contract development and Solidity.</p>
              <p>• <strong>Machine Learning:</strong> AI API integration, local models, and custom dataset training.</p>
              <p>• <strong>Cloud Computing:</strong> CI/CD, Docker, and AWS EC2 provisioning.</p>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/SaisrujanMishra" target="_blank" rel="noopener noreferrer" className="p-2 -ml-2 rounded-full transition-colors hover:bg-offwhite-card dark:hover:bg-charcoal-card">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/saisrujanmishra" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition-colors hover:bg-offwhite-card dark:hover:bg-charcoal-card">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:saisrujanmishra@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition-colors hover:bg-offwhite-card dark:hover:bg-charcoal-card">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Profile Photos Group */}
          <div className="flex items-center gap-4 md:gap-6 justify-center">
            
            {/* Left Picture (Square) */}
            <div className="relative group w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-offwhite-card dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 transition-transform duration-500 hover:scale-[1.02] shadow-sm hover:shadow-md shrink-0">
              <img 
                src="/Sai_logo.webp" 
                alt="Saisrujan Mishra Logo" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Picture (Portrait 9:16) */}
            <div className="relative group w-48 h-[341px] md:w-64 md:h-[430px] rounded-2xl overflow-hidden bg-offwhite-card dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 transition-transform duration-500 hover:scale-[1.02] shadow-sm hover:shadow-md shrink-0">
              <img 
                src="/Me.png" 
                alt="Saisrujan Mishra Profile" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section (Moved Up!) */}
      <section id="projects" className="py-24 bg-offwhite-card dark:bg-charcoal-card border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <ProjectsGallery />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">About Me.</h2>
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-offwhite-card dark:bg-charcoal-card border-y border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Skills.</h2>
          <SkillsMarquee />
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 transition-colors duration-300">
        <Resume />
      </section>

    </div>
  );
}