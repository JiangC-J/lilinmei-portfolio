import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn, ZoomOut } from 'lucide-react'
import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'

const zoomLevels = [1, 1.5, 2, 3]
const navItems = [
  ['项目概览', 'info'],
  ['项目背景', 'background'],
  ['视觉关键词', 'keywords'],
  ['设计系统', 'system'],
  ['设计过程', 'process'],
  ['作品展示', 'display'],
  ['项目总结', 'summary'],
] as const

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [zoomIndex, setZoomIndex] = useState(0)

  useEffect(() => {
    setZoomIndex(0)
  }, [activeImage])

  useEffect(() => {
    if (activeImage === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null)
      if (event.key === 'ArrowLeft') {
        setActiveImage((current) => (current === null ? current : Math.max(0, current - 1)))
      }
      if (event.key === 'ArrowRight' && project) {
        setActiveImage((current) =>
          current === null ? current : Math.min(project.gallery.length - 1, current + 1),
        )
      }
      if (event.key === '+' || event.key === '=') {
        setZoomIndex((current) => Math.min(zoomLevels.length - 1, current + 1))
      }
      if (event.key === '-') {
        setZoomIndex((current) => Math.max(0, current - 1))
      }
    }

    document.body.classList.add('is-lightbox-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('is-lightbox-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeImage, project])

  if (!project) {
    return <Navigate to="/works" replace />
  }

  const showPrevious = () => setActiveImage((current) => (current === null ? current : Math.max(0, current - 1)))
  const showNext = () =>
    setActiveImage((current) => (current === null ? current : Math.min(project.gallery.length - 1, current + 1)))
  const zoomIn = () => setZoomIndex((current) => Math.min(zoomLevels.length - 1, current + 1))
  const zoomOut = () => setZoomIndex((current) => Math.max(0, current - 1))
  const zoom = zoomLevels[zoomIndex]

  return (
    <article className="project-detail page-top">
      <Link className="back-link" to="/works">
        <ArrowLeft size={17} />
        返回作品
      </Link>
      <section className="project-hero" style={{ '--project-tone': project.heroTone } as CSSProperties}>
        <Reveal className="project-hero-copy">
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </Reveal>
        <Reveal className="project-hero-image">
          <img src={project.cover} alt={`${project.title} 项目大封面`} loading="lazy" />
        </Reveal>
      </section>

      <nav className="case-nav" aria-label="项目详情目录">
        {navItems.map(([label, id]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>

      <section className="case-section info-strip" id="info">
        <div>
          <span>项目类型</span>
          <strong>{project.type}</strong>
        </div>
        <div>
          <span>时间</span>
          <strong>{project.year}</strong>
        </div>
        <div>
          <span>工具</span>
          <strong>{project.tools.join(' / ')}</strong>
        </div>
        <div>
          <span>负责内容</span>
          <strong>{project.role}</strong>
        </div>
      </section>

      <CaseText id="background" title="项目背景" content={project.background} />

      <section className="case-section" id="keywords">
        <SectionTitle kicker="关键词" title="视觉关键词" />
        <div className="keyword-grid">
          {project.keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </section>

      <CaseList id="system" title="设计系统" items={project.designSystem} />
      <CaseList id="process" title="设计过程" items={project.process} />

      <section className="case-section display-section" id="display">
        <SectionTitle
          kicker="作品图片"
          title="项目完整展示"
          description="点击任意图片可放大查看细节，放大后可继续缩放。"
        />
        <div className="display-grid gallery-grid">
          {project.gallery.map((image, index) => (
            <button
              className="display-placeholder gallery-button"
              key={image}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`放大查看 ${project.title} 作品图 ${index + 1}`}
            >
              <img src={image} alt={`${project.title} 作品图 ${index + 1}`} loading="lazy" />
              <span>
                <ZoomIn size={18} />
                放大查看
              </span>
            </button>
          ))}
        </div>
        <ul className="case-list compact">
          {project.finalDisplay.map((item) => (
            <li key={item}>
              <ExternalLink size={16} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CaseText id="summary" title="项目总结" content={project.summary} />

      {activeImage !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} 图片放大查看`}>
          <button className="lightbox-backdrop" type="button" onClick={() => setActiveImage(null)} aria-label="关闭图片预览" />
          <div className="lightbox-content">
            <button className="lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="关闭">
              <X size={24} />
            </button>
            <div className="lightbox-toolbar">
              <button type="button" onClick={zoomOut} disabled={zoomIndex === 0} aria-label="缩小">
                <ZoomOut size={19} />
              </button>
              <strong>{Math.round(zoom * 100)}%</strong>
              <button type="button" onClick={zoomIn} disabled={zoomIndex === zoomLevels.length - 1} aria-label="放大">
                <ZoomIn size={19} />
              </button>
            </div>
            <button
              className="lightbox-nav lightbox-prev"
              type="button"
              onClick={showPrevious}
              disabled={activeImage === 0}
              aria-label="上一张"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="lightbox-viewport">
              <img
                src={project.gallery[activeImage]}
                alt={`${project.title} 放大图 ${activeImage + 1}`}
                style={
                  zoom === 1
                    ? { maxWidth: '100%', maxHeight: '100%' }
                    : { width: `${zoom * 100}%`, maxWidth: 'none', maxHeight: 'none' }
                }
              />
            </div>
            <button
              className="lightbox-nav lightbox-next"
              type="button"
              onClick={showNext}
              disabled={activeImage === project.gallery.length - 1}
              aria-label="下一张"
            >
              <ChevronRight size={28} />
            </button>
            <p>
              {activeImage + 1} / {project.gallery.length}
            </p>
          </div>
        </div>
      )}
    </article>
  )
}

function CaseText({ id, title, content }: { id: string; title: string; content: string }) {
  return (
    <section className="case-section case-text" id={id}>
      <SectionTitle kicker={title} title={title} />
      <p>{content}</p>
    </section>
  )
}

function CaseList({ id, title, items }: { id: string; title: string; items: string[] }) {
  return (
    <section className="case-section" id={id}>
      <SectionTitle kicker={title} title={title} />
      <ul className="case-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
