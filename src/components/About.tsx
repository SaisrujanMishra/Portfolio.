import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Gamepad2, Coffee, Brain } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-lg text-muted leading-relaxed">
            As a full-stack developer with a passion for innovative technology, I bring a blend of technical 
            expertise and creative problem-solving to every project. I consistently enhance my skills to master 
            emerging technologies and develop efficient, scalable solutions.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            My approach to development combines analytical thinking with a dedication to clean, maintainable code. 
            I thrive on translating complex requirements into intuitive user experiences while ensuring robust 
            backend architecture.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-800 rounded-lg hover:border-muted transition-all">
            <Code className="w-8 h-8 text-charcoal dark:text-offwhite mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developer</h3>
            <p className="text-sm text-muted">Crafting clean code</p>
          </div>
          <div className="p-6 bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-800 rounded-lg hover:border-muted transition-all">
            <Gamepad2 className="w-8 h-8 text-charcoal dark:text-offwhite mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gamer</h3>
            <p className="text-sm text-muted">Problem-solving perspective</p>
          </div>
          <div className="p-6 bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-800 rounded-lg hover:border-muted transition-all">
            <Coffee className="w-8 h-8 text-charcoal dark:text-offwhite mb-4" />
            <h3 className="text-xl font-semibold mb-2">Coffee</h3>
            <p className="text-sm text-muted">Fueling code</p>
          </div>
          <div className="p-6 bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-800 rounded-lg hover:border-muted transition-all">
            <Brain className="w-8 h-8 text-charcoal dark:text-offwhite mb-4" />
            <h3 className="text-xl font-semibold mb-2">Learner</h3>
            <p className="text-sm text-muted">Always exploring</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}