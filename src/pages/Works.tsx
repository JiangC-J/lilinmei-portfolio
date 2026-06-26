import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'

const filters = ['全部', '品牌', 'UI', '包装', 'icon', 'IP'] as const

const matchesFilter = (projectType: string, filter: (typeof filters)[number]) => {
  if (filter === '全部') return true
  if (filter === '品牌') return projectType.includes('品牌') || projectType.includes('酒馆')
  if (filter === 'UI') return projectType.includes('UI') || projectType.includes('APP')
  if (filter === '包装') return projectType.includes('包装')
  if (filter === 'icon') return projectType.includes('icon')
  if (filter === 'IP') return projectType.includes('IP')
  return true
}

export default function Works() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('全部')
  const visibleProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project.type, activeFilter)),
    [activeFilter],
  )

  return (
    <section className="page-section page-top">
      <Reveal>
        <div className="section-heading-row">
          <SectionTitle kicker="全部作品" title="视觉作品陈列馆" />
          <div className="filter-tabs" aria-label="作品分类筛选">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? 'is-active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
