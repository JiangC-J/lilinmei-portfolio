import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { assetPath } from '../data/projects'

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="eyebrow">
          <Sparkles size={17} />
          李林美 视觉传达作品集
        </p>
        <h1>李林美 Portfolio</h1>
        <p className="hero-subtitle">品牌视觉 / 平面设计 / 交互设计 / UI 设计</p>
        <p className="hero-intro">用温暖的图形、品牌与交互，把想法做成可感知的视觉体验。</p>
        <div className="hero-actions">
          <Link className="button primary" to="/works">
            查看作品
            <ArrowRight size={18} />
          </Link>
          <Link className="button secondary" to="/about">
            关于我
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="hero-board image-board"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
      >
        <img src={assetPath('assets/profile/portfolio-title.jpg')} alt="Portfolio 作品集手写标题" />
      </motion.div>
    </section>
  )
}
