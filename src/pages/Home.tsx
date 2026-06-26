import { Link } from 'react-router-dom'
import { ArrowRight, Brush, HeartHandshake, Layers, PenTool, Sparkle } from 'lucide-react'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Workflow from '../components/Workflow'
import { projects, selectedProjects } from '../data/projects'

const aboutCards = [
  { icon: Brush, title: '设计方向', text: '品牌视觉 / 平面设计 / 交互设计 / UI 设计' },
  { icon: PenTool, title: '工具能力', text: 'Photoshop / Illustrator / After Effects / Figma / Rhino / GPT / Codex' },
  { icon: HeartHandshake, title: '个人特点', text: '审美敏感度较好 / 学习能力强 / 执行力较强 / AIGC 辅助创意发散' },
]

const tools = ['Photoshop', 'Illustrator', 'Figma', 'After Effects', 'Rhino', 'GPT', 'Codex']

export default function Home() {
  return (
    <>
      <Hero />
      <section className="preview-strip" aria-label="作品预览">
        <div className="preview-track">
          {[...projects, ...projects].map((project, index) => (
            <Link to={`/works/${project.slug}`} key={`${project.slug}-${index}`}>
              <img src={project.cover} alt={`${project.title} 作品预览`} loading="lazy" />
              <span>{project.title}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="page-section">
        <Reveal>
          <SectionTitle
            kicker="关于我"
            title="李林美，视觉传达设计专业大三学生。"
            description="熟悉品牌视觉、平面排版、海报设计、包装设计及基础 UI 设计，希望在实习中积累真实项目经验，持续提升商业设计能力。"
          />
        </Reveal>
        <div className="about-grid">
          {aboutCards.map((card) => (
            <Reveal className="info-card" key={card.title}>
              <card.icon size={28} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="page-section">
        <Reveal>
          <div className="section-heading-row">
            <SectionTitle kicker="精选作品" title="重点项目" description="品牌、交互、包装、icon 与 IP 设计的综合展示。" />
            <Link className="inline-button" to="/works">
              全部作品
              <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
        <div className="project-grid selected">
          {selectedProjects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="page-section workflow-section">
        <Reveal>
          <SectionTitle kicker="设计流程" title="从观察到落地的设计流程" />
        </Reveal>
        <Workflow />
      </section>
      <section className="page-section tools-section">
        <Reveal>
          <SectionTitle kicker="工具能力" title="常用工具" />
        </Reveal>
        <div className="tool-cloud">
          {tools.map((tool) => (
            <span key={tool}>
              <Layers size={16} />
              {tool}
            </span>
          ))}
        </div>
        <Sparkle className="section-doodle" size={42} aria-hidden="true" />
      </section>
    </>
  )
}
