import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaPython, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiSqlite, SiFastapi, SiPostman, SiVercel } from 'react-icons/si';

const skillCategories = [
  {
    category: 'Frontend',
    icon: <FaHtml5 className="w-6 h-6 text-orange-500" />,
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 w-6 h-6" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600 w-6 h-6" /> },
      { name: 'React.js', icon: <FaReact className="text-blue-400 w-6 h-6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 w-6 h-6" /> }
    ]
  },
  {
    category: 'Backend',
    icon: <FaNodeJs className="w-6 h-6 text-green-500" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
      { name: 'Express.js', icon: <FaNodeJs className="text-gray-800 w-6 h-6" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500 w-6 h-6" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-blue-400 w-6 h-6" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-teal-500 w-6 h-6" /> }
    ]
  },
  {
    category: 'Programming Languages',
    icon: <FaPython className="w-6 h-6 text-blue-500" />,
    skills: [
      { name: 'Python', icon: <FaPython className="text-blue-500 w-6 h-6" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 w-6 h-6" /> }
    ]
  },
  {
    category: 'Tools',
    icon: <FaGithub className="w-6 h-6 text-gray-800" />,
    skills: [
      { name: 'GitHub', icon: <FaGithub className="text-gray-800 w-6 h-6" /> },
      { name: 'VS Code', icon: <FaGitAlt className="text-blue-500 w-6 h-6" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-400 w-6 h-6" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black w-6 h-6" /> }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills</h2>
        <div className="grid gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span>{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.category}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-600 hover:bg-indigo-50 dark:hover:bg-gray-500 transition-colors"
                  >
                    <span>{skill.icon}</span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium mt-2">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
