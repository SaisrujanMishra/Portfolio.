import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, MonitorSmartphone, MessageSquare, Layout, Brain } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  features?: string[];
  iconType: 'layout' | 'monitor' | 'message' | 'brain'; 
}

// Ordered: Crop ML -> Task Manager -> Chat App -> Portfolio
const projects: Project[] = [
  {
    id: '1',
    title: 'Crop Recommendation ML',
    description: 'Machine learning model utilizing Random Forest algorithms to recommend optimal crops based on soil metrics and environmental factors.',
    image: '/CropRecomendation.webp', // Make sure to add this image to your public folder!
    technologies: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas', 'Random Forest'],
    liveUrl: 'https://github.com/SaisrujanMishra/AI-Corp-Recomendation/tree/main',
    githubUrl: 'https://github.com/SaisrujanMishra/AI-Corp-Recomendation/tree/main',
    features: ['Exploratory Data Analysis (EDA)', 'Random Forest Classifier', 'Predictive Modeling', 'Data Preprocessing'],
    iconType: 'brain'
  },
  {
    id: '2',
    title: 'Task Manager System',
    description: 'Minimalist task management application with AI-powered task suggestions and interactive dashboard.',
    image: '/TaskManager.webp',
    technologies: ['Vite', 'TypeScript', 'React', 'Tailwind CSS', 'OpenAI API', 'Supabase'],
    liveUrl: 'https://taskmanager-ai.netlify.app',
    githubUrl: 'https://github.com/SaisrujanMishra/Task-manager',
    features: ['AI-powered task suggestions', 'Modular frontend', 'Interactive dashboard', 'Real-time updates'],
    iconType: 'monitor'
  },
  {
    id: '3',
    title: 'Chat Application',
    description: 'Real-time chat application with user authentication and online status tracking.',
    image: '/VibeChat.webp',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Zustand', 'JWT'],
    liveUrl: 'https://mychat-x58s.onrender.com/login',
    githubUrl: 'https://github.com/yourusername/chat-app',
    features: ['JWT Authentication', 'Socket.io real-time messaging', 'Status indicators', 'Zustand state'],
    iconType: 'message'
  },
  {
    id: '4',
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

  const ProjectIcon = ({ type }: { type: Project['iconType'] }) => {
    switch(type) {
      case 'layout': return <Layout className="w-5 h-5" />;
      case 'monitor': return <MonitorSmartphone className="w-5 h-5" />;
      case 'message': return <MessageSquare className="w-5 h-5" />;
      case 'brain': return <Brain className="w-5 h-5" />;
      default: return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 tracking-tight">Projects.</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            className="block bg-white dark:bg-charcoal rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer border border-gray-200 dark:border-gray-800 flex flex-col h-full"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-40 overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shrink-0">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
              {hoveredProject === project.id && project.features && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-charcoal/95 flex items-center justify-center p-6 backdrop-blur-sm z-10"
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
                <h3 className="text-base font-bold leading-tight">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-muted mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="px-2 py-1 bg-offwhite-card dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 rounded-md text-[10px] uppercase tracking-wider font-semibold">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && <span className="text-xs text-muted flex items-center">+{project.technologies.length - 3}</span>}
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