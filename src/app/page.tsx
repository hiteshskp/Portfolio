'use client'

import { motion } from 'framer-motion'
import SpaceBackground from '@/components/SpaceBackground'
import Navigation from '@/components/Navigation'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project',
    image: '/project1.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://project1.com'
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project',
    image: '/project2.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    link: 'https://project2.com'
  },
  {
    title: 'Project 3',
    description: 'A brief description of your third project',
    image: '/project3.jpg',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    link: 'https://project3.com'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpaceBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-space-highlight to-space-nebula bg-clip-text text-transparent">
            Welcome to My Space
          </h1>
          <p className="text-xl text-gray-300">
            Exploring the digital universe
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-space-primary/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <h2 className="text-4xl font-bold mb-6 text-space-highlight">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              [Your introduction here]
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-space-highlight">Space Missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-space-primary/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <h2 className="text-4xl font-bold mb-6 text-space-highlight">Contact</h2>
            <p className="text-gray-300">
              Ready to collaborate? Let's connect!
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 