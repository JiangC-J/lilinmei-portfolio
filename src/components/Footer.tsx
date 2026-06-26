import { Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <p className="eyebrow">联系我</p>
        <h2>期待把温暖的视觉想法继续做完整。</h2>
      </div>
      <div className="contact-list">
        <a href="mailto:1344531545@qq.com">
          <Mail size={18} />
          1344531545@qq.com
        </a>
        <span>
          <MessageCircle size={18} />
          微信：hayasmi
        </span>
      </div>
    </footer>
  )
}
