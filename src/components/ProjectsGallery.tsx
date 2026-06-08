import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, MonitorSmartphone, MessageSquare, Layout, Brain, Plane, Link as LinkIcon, FileText, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  features?: string[];
  iconType: 'layout' | 'monitor' | 'message' | 'brain' | 'plane' | 'link' | 'file' | 'cart'; 
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Crop Recommendation ML',
    description: 'Machine learning model utilizing Random Forest algorithms to recommend optimal crops based on soil metrics and environmental factors.',
    image: '/CropRecomendation.webp',
    technologies: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas', 'Flask'],
    liveUrl: 'https://github.com/SaisrujanMishra/AI-Corp-Recomendation/tree/main',
    githubUrl: 'https://github.com/SaisrujanMishra/AI-Corp-Recomendation/tree/main',
    features: ['Random Forest Classifier', 'REST API via Flask', 'Predictive Modeling', 'Data Preprocessing'],
    iconType: 'brain'
  },
  {
    id: '2',
    title: 'Task Manager System',
    description: 'Minimalist task management application with AI-powered task suggestions and interactive dashboard.',
    image: '/TaskManager.webp',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Supabase'],
    liveUrl: 'https://taskmanager-ai.netlify.app',
    githubUrl: 'https://github.com/SaisrujanMishra/Task-manager',
    features: ['AI-powered task suggestions', 'Modular frontend', 'Real-time database updates'],
    iconType: 'monitor'
  },
  {
    id: '3',
    title: 'Real-Time Flight Tracking',
    description: 'Aviation backend ingesting live flight telemetry data with high-throughput WebSockets and Redis caching.',
    image: '',
    technologies: ['Node.js', 'WebSockets', 'Redis', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://github.com/SaisrujanMishra',
    githubUrl: 'https://github.com/SaisrujanMishra',
    features: ['Live telemetry ingestion', 'WebSocket push updates', 'Redis caching', 'Dockerized deployment'],
    iconType: 'plane'
  },
  {
    id: '4',
    title: 'URL Shortener Service',
    description: 'Spring Boot REST service supporting custom aliases, link expiration, JWT auth, and per-user click analytics.',
    image: '',
    technologies: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://github.com/SaisrujanMishra',
    githubUrl: 'https://github.com/SaisrujanMishra',
    features: ['Token-bucket rate limiting', 'CI via GitHub Actions', 'JMeter load-tested'],
    iconType: 'link'
  },
  {
    id: '5',
    title: 'Resume-to-JD Matcher (RAG)',
    description: 'Retrieval-augmented generation tool comparing resumes against job descriptions to produce structured gap analyses.',
    image: '',
    technologies: ['Python', 'FastAPI', 'Next.js', 'Gemini API', 'PostgreSQL'],
    liveUrl: 'https://github.com/SaisrujanMishra',
    githubUrl: 'https://github.com/SaisrujanMishra',
    features: ['Cosine similarity search', 'Gemini API explanations', 'Full-stack deployment'],
    iconType: 'file'
  },
  {
    id: '6',
    title: 'E-Commerce REST API',
    description: 'Production-style e-commerce backend supporting catalog, cart, order, and Stripe payment workflows.',
    image: '',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    liveUrl: 'https://github.com/SaisrujanMishra',
    githubUrl: 'https://github.com/SaisrujanMishra',
    features: ['Role-based access control', 'Stripe integration', 'OpenAPI/Swagger docs'],
    iconType: 'cart'
  },
  {
    id: '7',
    title: 'Chat Application',
    description: 'Real-time chat application with user authentication and online status tracking.',
    image: '/VibeChat.webp',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Zustand', 'JWT'],
    liveUrl: 'https://mychat-x58s.onrender.com/login',
    githubUrl: 'https://github.com/SaisrujanMishra',
    features: ['JWT Authentication', 'Socket.io real-time messaging', 'Online status indicators'],
    iconType: 'message'
  },
  {
    id: '8',
    title: 'Portfolio Website',
    description: 'Personal website using React and Tailwind CSS to showcase projects, skills, and technical background.',
    image: '/Portfolio.webp',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    liveUrl: 'https://saisrujan.netlify.app',
    githubUrl: 'https://github.com/SaisrujanMishra/PortFolio',
    iconType: 'layout'
  }
];

export default function ProjectsGallery() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const ProjectIcon = ({ type }: { type: Project['iconType'] }) => {
    switch(type) {
      case 'layout': return <Layout className="w-5 h-5" />;
      case 'monitor': return <MonitorSmartphone className="w-5 h-5" />;
      case 'message': return <MessageSquare className="w-5 h-5" />;
      case 'brain': return <Brain className="w-5 h-5" />;
      case 'plane': return <Plane className="w-5 h-5" />;
      case 'link': return <LinkIcon className="w-5 h-5" />;
      case 'file': return <FileText className="w-5 h-5" />;
      case 'cart': return <ShoppingCart className="w-5 h-5" />;
      default: return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-charcoal dark:text-offwhite">Projects.</h2>
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-charcoal hover:bg-gray-100 dark:hover:bg-charcoal-card transition-colors text-charcoal dark:text-offwhite shadow-sm"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-charcoal hover:bg-gray-100 dark:hover:bg-charcoal-card transition-colors text-charcoal dark:text-offwhite shadow-sm"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map(project => (
          <motion.a
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="snap-start shrink-0 w-[290px] sm:w-[320px] md:w-[350px] bg-white dark:bg-[#151516] rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer border border-gray-200 dark:border-gray-800 flex flex-col h-[420px] shadow-sm"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-40 overflow-hidden bg-gray-50 dark:bg-charcoal border-b border-gray-200 dark:border-gray-800 shrink-0">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-[#0C0C0D] dark:to-[#1e1e1f] text-muted p-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#151516] border border-gray-100 dark:border-gray-800 shadow-sm mb-2 text-charcoal dark:text-offwhite">
                    <ProjectIcon type={project.iconType} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted opacity-75">
                    System Architecture
                  </span>
                </div>
              )}
              {hoveredProject === project.id && project.features && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#0C0C0D]/95 flex items-center justify-center p-6 backdrop-blur-sm z-10"
                >
                  <ul className="text-xs text-offwhite list-disc ml-4 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <ProjectIcon type={project.iconType} />
                <h3 className="text-base font-bold leading-tight text-charcoal dark:text-offwhite">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-muted mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="px-2 py-1 bg-offwhite-card dark:bg-[#0C0C0D] border border-gray-200 dark:border-gray-800 rounded-md text-[10px] uppercase tracking-wider font-semibold">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && <span className="text-[10px] text-muted flex items-center font-semibold uppercase tracking-wider">+{project.technologies.length - 3}</span>}
              </div>
              {project.githubUrl && (
                <div className="flex items-center gap-2 text-muted hover:text-charcoal dark:hover:text-offwhite transition-colors text-sm pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Github className="w-4 h-4" />
                  View Code
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}