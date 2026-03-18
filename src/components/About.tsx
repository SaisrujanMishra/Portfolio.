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
      {/* Increased the gap and ensured items stretch properly across the max width */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-7xl mx-auto items-start w-full">
        
        {/* Text Section - Pushed to the Left */}
        <motion.div variants={itemVariants} className="space-y-6 pr-0 md:pr-8">
          <p className="text-lg text-muted leading-relaxed">
            I am a Computer Science graduate from Vellore Institute of Technology (VIT), specializing in full-stack web development, cloud infrastructure, and AI integration.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            My recent experience includes working as an academic machine learning intern, where I built predictive models for agricultural data, and developing AI-driven backend systems during an iteration at the Skill India Platform. 
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Alongside my cloud certifications, I have hands-on experience architecting RESTful APIs and scalable MERN stack applications through intensive cohort projects. Whether I am provisioning AWS servers or writing smart contracts, my focus is on building clean, practical, and efficient solutions.
          </p>
        </motion.div>
        
        {/* Icon Grid Section - Pushed to the Right */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 w-full justify-self-end max-w-lg">
          <div className="p-6 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all shadow-sm">
            <Code className="w-8 h-8 text-charcoal dark:text-offwhite mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-charcoal dark:text-offwhite">Developer</h3>
            <p className="text-sm text-muted">Coding</p>
          </div>
          <div className="p-6 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all shadow-sm">
            <Gamepad2 className="w-8 h-8 text-charcoal dark:text-offwhite mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-charcoal dark:text-offwhite">Gamer</h3>
            <p className="text-sm text-muted">Problem-solving</p>
          </div>
          <div className="p-6 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all shadow-sm">
            <Coffee className="w-8 h-8 text-charcoal dark:text-offwhite mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-charcoal dark:text-offwhite">Coffee</h3>
            <p className="text-sm text-muted">Fueling creativity</p>
          </div>
          <div className="p-6 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all shadow-sm">
            <Brain className="w-8 h-8 text-charcoal dark:text-offwhite mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-charcoal dark:text-offwhite">Learner</h3>
            <p className="text-sm text-muted">Always exploring</p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}