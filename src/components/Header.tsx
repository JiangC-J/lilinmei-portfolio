import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const links = [
  { to: '/', label: '首页' },
  { to: '/works', label: '作品' },
  { to: '/about', label: '关于' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">LM</span>
        <span>LiLinMei</span>
      </NavLink>
      <button
        className="nav-toggle"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? '关闭导航' : '打开导航'}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={clsx('site-nav', open && 'is-open')} aria-label="主导航">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          联系
        </a>
      </nav>
    </header>
  )
}
