import * as SimpleIcons from 'simple-icons';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'language' | 'tool' | 'cloud';
}

const skills: Skill[] = [
  { name: 'Express', icon: 'siExpress', category: 'backend' },
  { name: 'MongoDB', icon: 'siMongodb', category: 'database' },
  { name: 'C++', icon: 'siCplusplus', category: 'language' },
  { name: 'JavaScript', icon: 'siJavascript', category: 'language' },
  { name: 'Git', icon: 'siGit', category: 'tool' },
  { name: 'GitHub', icon: 'siGithub', category: 'tool' },
  { name: 'PostgreSQL', icon: 'siPostgresql', category: 'database' },
  { name: 'React', icon: 'siReact', category: 'frontend' },
  { name: 'Node.js', icon: 'siNodedotjs', category: 'backend' },
  { name: 'TypeScript', icon: 'siTypescript', category: 'language' },
  { name: 'Go', icon: 'siGo', category: 'language' },
  { name: 'Solidity', icon: 'siSolidity', category: 'language' },
  { name: 'HTML', icon: 'siHtml5', category: 'frontend' },
  { name: 'CSS', icon: 'siCss3', category: 'frontend' },
  { name: 'Next.js', icon: 'siNextdotjs', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'siTailwindcss', category: 'frontend' },
  { name: 'NestJS', icon: 'siNestjs', category: 'backend' },
  { name: 'MySQL', icon: 'siMysql', category: 'database' },
  { name: 'AWS', icon: 'siAmazonaws', category: 'cloud' },
  { name: 'Azure', icon: 'siMicrosoftazure', category: 'cloud' },
  { name: 'Vercel', icon: 'siVercel', category: 'cloud' },
  { name: 'Netlify', icon: 'siNetlify', category: 'cloud' },
  { name: 'Docker', icon: 'siDocker', category: 'tool' }
];

const renderSkillIcon = (skill: Skill) => {
  const IconComponent = (SimpleIcons as any)[skill.icon];
  if (!IconComponent) return null;

  return (
    <svg role="img" viewBox="0 0 24 24" className="w-8 h-8" fill={`#${IconComponent.hex}`}>
      <path d={IconComponent.path} />
    </svg>
  );
};

export default function SkillsMarquee() {
  const duplicatedSkills = [...skills, ...skills];

  return (
    // Removed the dark blue background! It now blends seamlessly.
    <div className="py-4 overflow-hidden w-full" id="skillsMarquee">
      <div className="relative w-full group">
        <div className="flex gap-6 whitespace-nowrap w-max animate-scroll group-hover:[animation-play-state:paused] will-change-transform">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              // Updated to crisp, minimalist borders that match the theme
              className="flex flex-col items-center justify-center p-4 w-32 rounded-xl bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-800 hover:border-muted transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-offwhite-card dark:bg-charcoal-card rounded-lg p-3 mb-3 border border-gray-100 dark:border-gray-800">
                {renderSkillIcon(skill)}
              </div>
              <span className="text-sm font-medium text-charcoal dark:text-offwhite">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}