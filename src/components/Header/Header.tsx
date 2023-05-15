import clsx from 'clsx'
import { headerLinks } from './constants'
import Logo from '../Logo/Logo'
import styles from './Header.module.scss'
import { useState } from 'react'
import { useAnchor } from '../../hooks/useAnchor'

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('Home')

  const anchorLink = (e: React.MouseEvent, title: string) => {
    setActiveLink(title)
  }

  return (
    <div className={styles.header}>
      <div className="container flex items-center justify-between">
        <div className={clsx(styles.logo, 'reveal right')}>
          <Logo />
        </div>
        <ul className={styles.links}>
          {headerLinks.map((link) => (
            <li key={link.href}>
              <a
                onClick={(e: React.MouseEvent) => {
                  anchorLink(e, link.title)
                  useAnchor(link.href)
                }}
                className={clsx(
                  styles.link,
                  activeLink === link.title && styles.active,
                  'reveal left'
                )}
                href={link.href}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
