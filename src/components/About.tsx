import { GraduationCap, Code2, Server } from 'lucide-react';

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-7xl mx-auto items-start w-full">
      {/* Text Section */}
      <div className="space-y-6 text-base text-muted leading-relaxed">
        <p>
          I am a Computer Science graduate from Vellore Institute of Technology (VIT), specializing in full-stack web systems, cloud infrastructure, and machine learning model integrations.
        </p>
        <p>
          My experience includes developing AI-driven features at the Skill India Platform and engineering predictive data pipelines for agricultural sensor telemetry during research internships.
        </p>
        <p>
          Focused on clean design and low latency, I build services and web backends using TypeScript, Go, Java, and Python, ensuring secure, containerized deployments across modern cloud architectures.
        </p>
      </div>
      
      {/* Professional Resume Highlights */}
      <div className="space-y-6 max-w-lg w-full">
        <div className="flex gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151516] shadow-sm">
          <GraduationCap className="w-6 h-6 text-charcoal dark:text-offwhite shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-charcoal dark:text-offwhite">Education</h3>
            <p className="text-xs text-muted mt-1">B.Tech in Computer Science & Engineering • Vellore Institute of Technology</p>
          </div>
        </div>

        <div className="flex gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151516] shadow-sm">
          <Code2 className="w-6 h-6 text-charcoal dark:text-offwhite shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-charcoal dark:text-offwhite">Core Competencies</h3>
            <p className="text-xs text-muted mt-1">Distributed Architectures, RESTful APIs, Database Design, & Smart Contracts</p>
          </div>
        </div>

        <div className="flex gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151516] shadow-sm">
          <Server className="w-6 h-6 text-charcoal dark:text-offwhite shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-charcoal dark:text-offwhite">Infrastructure Focus</h3>
            <p className="text-xs text-muted mt-1">AWS EC2, Docker Containerization, CI/CD pipelines, and Redis caching</p>
          </div>
        </div>
      </div>
    </div>
  );
}