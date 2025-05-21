'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

const ProjectCard = ({ title, description, image, technologies, link }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-space-primary/50 backdrop-blur-sm rounded-lg overflow-hidden border border-space-accent/30"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-space-highlight">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-space-accent/30 rounded-full text-space-highlight"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-space-highlight text-white rounded-lg hover:bg-space-highlight/80 transition-colors"
        >
          View Project
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard 