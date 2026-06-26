import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  compact?: boolean
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <motion.article className="project-card" whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Link to={`/works/${project.slug}`} aria-label={`查看 ${project.title}`}>
        <img src={project.cover} alt={`${project.title} 项目封面`} loading="lazy" />
        <div className="project-card-body">
          <div>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
          </div>
          {!compact && <p>{project.description}</p>}
          <div className="tag-row">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <span className="text-link">
            查看项目
            <ArrowUpRight size={17} />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
