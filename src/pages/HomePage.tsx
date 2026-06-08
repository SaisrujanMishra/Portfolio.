import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Code, Cpu, Coins, Cloud } from 'lucide-react';
import About from '../components/About';
import Experience from '../components/Experience';
import SkillsMarquee from '../components/SkillsMarquee';
import ProjectsGallery from '../components/ProjectsGallery';
import Resume from '../components/Resume';

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function TiltWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map normalized mouse positions to degrees (-12 to 12 degrees for premium feel)
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const titles = ["Web Developer.", "Web3 Builder.", "Cloud Architect."];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full pt-20"> {/* pt-20 pushes content down so it's not hidden under the fixed navbar */}
      
      {/* Hero Section */}
      <section id="home" className="min-h-[85vh] flex items-center">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-12">
          
          {/* Text Content */}
          <div className="max-w-3xl flex-1">
            <h1 className="text-base md:text-lg font-bold mb-4 uppercase tracking-widest text-muted">
              Saisrujan Mishra
            </h1>
            
            {/* Height-constrained container to prevent layout shifting on transitions */}
            <div className="h-[48px] sm:h-[60px] md:h-[90px] mb-6 flex items-center overflow-hidden">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-charcoal dark:text-offwhite">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    {titles[index]}
                  </motion.span>
                </AnimatePresence>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl mb-8 text-charcoal dark:text-muted max-w-xl leading-relaxed font-normal">
              Full-stack engineer focused on web applications, Machine Learning pipelines, and cloud architecture.
            </p>
            
            {/* Sober Technical Grid Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl">
              <div className="p-4 rounded-xl bg-white dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 shadow-sm flex items-start gap-3 transition-shadow hover:shadow-md">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-offwhite shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-charcoal dark:text-offwhite">Software Engineering</h3>
                  <p className="text-xs text-muted mt-0.5">Full-stack web applications and scalable system architectures.</p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-white dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 shadow-sm flex items-start gap-3 transition-shadow hover:shadow-md">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-offwhite shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-charcoal dark:text-offwhite">Machine Learning</h3>
                  <p className="text-xs text-muted mt-0.5">Neural network implementation, model training, and API integrations.</p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-white dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 shadow-sm flex items-start gap-3 transition-shadow hover:shadow-md">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-offwhite shrink-0">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-charcoal dark:text-offwhite">Web3 Systems</h3>
                  <p className="text-xs text-muted mt-0.5">Smart contracts and decentralized protocols.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 shadow-sm flex items-start gap-3 transition-shadow hover:shadow-md">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-offwhite shrink-0">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-charcoal dark:text-offwhite">Cloud Infrastructure</h3>
                  <p className="text-xs text-muted mt-0.5">Docker containerization, CI/CD pipelines, and AWS provisioning.</p>
                </div>
              </div>
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
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 justify-center">
            
            {/* Left Picture (Square) */}
            <TiltWrapper className="relative group w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-offwhite-card dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 transition-transform duration-500 hover:scale-[1.02] shadow-sm hover:shadow-md shrink-0">
              <img 
                src="/Sai_logo.webp" 
                alt="Saisrujan Mishra Logo" 
                className="w-full h-full object-cover"
              />
            </TiltWrapper>

            {/* Right Picture (Portrait 9:16) */}
            <TiltWrapper className="relative group w-32 h-[227px] sm:w-48 sm:h-[341px] md:w-64 md:h-[430px] rounded-2xl overflow-hidden bg-offwhite-card dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 transition-transform duration-500 hover:scale-[1.02] shadow-sm hover:shadow-md shrink-0">
              <img 
                src="/Me.png" 
                alt="Saisrujan Mishra Profile" 
                className="w-full h-full object-cover"
              />
            </TiltWrapper>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ScrollReveal>
        <section id="projects" className="py-24 bg-offwhite-card dark:bg-charcoal-card border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <ProjectsGallery />
        </section>
      </ScrollReveal>

      {/* Experience Section */}
      <ScrollReveal>
        <section id="experience" className="py-24 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <Experience />
        </section>
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal>
        <section id="about" className="py-24 bg-offwhite-card dark:bg-charcoal-card border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 tracking-tight">About Me.</h2>
            <About />
          </div>
        </section>
      </ScrollReveal>

      {/* Skills Section */}
      <ScrollReveal>
        <section id="skills" className="py-24 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 tracking-tight">Skills.</h2>
            <SkillsMarquee />
          </div>
        </section>
      </ScrollReveal>

      {/* Resume Section */}
      <ScrollReveal>
        <section id="resume" className="py-24 bg-offwhite-card dark:bg-charcoal-card border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <Resume />
        </section>
      </ScrollReveal>

    </div>
  );
}