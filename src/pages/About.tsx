import { Award, BriefcaseBusiness, Mail, MapPin, Palette, Phone, Wallet, Wrench } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { assetPath } from '../data/projects'

const sections = [
  {
    icon: Palette,
    title: '视觉方向',
    text: '熟悉品牌视觉、平面排版、海报设计、包装设计及基础 UI 设计，作品集中包含品牌、交互、icon、包装与 IP 设计。',
  },
  {
    icon: Wrench,
    title: '工具能力',
    text: '能够使用 Photoshop、Illustrator、After Effects、Figma、Rhino 等软件完成基础视觉设计工作，并具备一定版绘与图形绘制能力。',
  },
  {
    icon: Award,
    title: 'AIGC 辅助设计',
    text: '关注 AIGC 与设计结合，能够运用 GPT、Codex 等工具辅助创意发散、方案整理和页面实现。',
  },
]

const jobInfo = [
  { icon: BriefcaseBusiness, label: '求职方向', value: '视觉 / 交互设计' },
  { icon: Wallet, label: '期望薪资', value: '3k-5k' },
  { icon: MapPin, label: '期望城市', value: '厦门' },
  { icon: Award, label: '到岗时间', value: '7月可实习' },
]

export default function About() {
  return (
    <section className="page-section page-top about-page">
      <Reveal>
        <SectionTitle kicker="关于我" title="李林美 LiLinMei" description="莆田学院 / 视觉传达 / 大三" />
      </Reveal>

      <Reveal className="profile-panel">
        <img src={assetPath('assets/profile/photo.jpg')} alt="李林美个人照片" loading="lazy" />
        <div className="profile-copy">
          <div className="tag-row">
            <span>品牌视觉</span>
            <span>平面设计</span>
            <span>交互设计</span>
            <span>UI 设计</span>
          </div>
          <h2>个人简介</h2>
          <p>
            视觉传达设计专业大三学生，熟悉品牌视觉、平面排版、海报设计、包装设计及基础 UI 设计。能够使用 Photoshop、Illustrator、After Effects、Figma、Rhino 等软件完成基础视觉设计工作，并具备一定版绘与图形绘制能力。关注 AIGC 与设计结合，能够运用 GPT、Codex 等工具辅助创意发散与方案整理。审美敏感度较好，学习能力和执行力较强，希望在实习中积累真实项目经验，持续提升商业设计能力。
          </p>
        </div>
      </Reveal>

      <div className="job-grid">
        {jobInfo.map((item) => (
          <Reveal className="job-card" key={item.label}>
            <item.icon size={22} />
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </Reveal>
        ))}
      </div>

      <div className="about-grid">
        {sections.map((section) => (
          <Reveal className="info-card" key={section.title}>
            <section.icon size={28} />
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="contact-panel">
        <h2>联系我</h2>
        <div className="contact-panel-list">
          <a href="tel:18020683282">
            <Phone size={18} />
            18020683282
          </a>
          <a href="mailto:1344531545@qq.com">
            <Mail size={18} />
            1344531545@qq.com
          </a>
          <p>微信：hayasmi</p>
        </div>
      </Reveal>
    </section>
  )
}
