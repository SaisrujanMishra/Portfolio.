import { Download, ExternalLink, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const RESUME_URL = '/SaisrujanResume.pdf'; 
const GOOGLE_DRIVE_URL = 'https://drive.google.com/file/d/1oyGj6ecMIAS7Hxczmc2vZ3KE65H-luZL/view?usp=sharing';

export default function Resume() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 tracking-tight">Resume.</h2>
      
      <div className="max-w-2xl mx-auto bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-sm hover:shadow-md transition-shadow">
        <FileText className="w-16 h-16 mx-auto mb-6 text-muted" />
        <h3 className="text-2xl font-bold mb-4">View My Full Resume</h3>
        <p className="text-muted mb-8 leading-relaxed max-w-md mx-auto">
          Get a detailed look at my experience, education, and technical skills. Available for direct download or viewing via Google Drive.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href={RESUME_URL}
            download="Saisrujan_Mishra_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-charcoal dark:bg-offwhite text-offwhite dark:text-charcoal font-medium rounded-lg hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5" />
            Download PDF
          </motion.a>
          
          <motion.a
            href={GOOGLE_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-offwhite-card dark:bg-charcoal-card border border-gray-200 dark:border-gray-800 text-charcoal dark:text-offwhite font-medium rounded-lg hover:border-muted transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-5 h-5" />
            View on Drive
          </motion.a>
        </div>
      </div>
    </div>
  );
}