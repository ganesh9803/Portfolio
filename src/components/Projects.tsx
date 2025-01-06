
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://i.imgur.com/ZU9KiNd.png',
    github: 'https://github.com/ganesh9803/exploreourstore-e-commerce-website.git',
    demo: 'https://exploreourstore-e-commerce-website-frontend.vercel.app/',
  },
  {
    title: 'Mini Loan Management System',
    description: 'The Mini Loan Application is a web-based platform designed to facilitate loan management for both admins and customers.',
    image: 'https://i.imgur.com/i0fiXRB.png',
    github: 'https://github.com/ganesh9803/mini_loan_application.git',
    demo: 'https://mini-loan-application-frontend.vercel.app/',
  },
  {
    title: 'Contact Management System',
    description: 'The contact Management System is a full-stack web application that allows users to manage their contacts with featuring such a adding, updating, deleting and searching contacts.',
    image: 'https://i.imgur.com/z5IkEpQ.png',
    github: 'https://github.com/ganesh9803/contact-management-system.git',
    demo: 'https://contact-management-app-orpin.vercel.app/',
  },
  {
    title: 'Personal Notes Manager',
    description: 'I built a Personal Notes Manager using the MERN stack to help users organize and manage their personal notes effectively.',
    image: 'https://i.imgur.com/RRkuzkp.png',
    github: 'https://github.com/ganesh9803/Personal-notes.git',
    demo: 'https://personal-notes-frontend.vercel.app/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}