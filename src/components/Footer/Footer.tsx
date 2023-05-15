import clsx from 'clsx'
import Logo from '../Logo/Logo'
import styles from './Footer.module.scss'
import { footerData } from './constants'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.body}>
          <div className={clsx(styles.col, 'w-3/12')}>
            <div className={clsx(styles.logo, 'reveal left')}>
              <Logo />
            </div>
            <p className="reveal left">{footerData.underLogo}</p>
          </div>
          {footerData.columns.map((col) => (
            <div key={col.title} className={styles.col}>
              <span className={clsx(styles.title, 'reveal left')}>
                {col.title}
              </span>
              <div className={styles.list}>
                {col.links.map((link, idx) => (
                  <li key={idx} className={clsx(styles.link, 'reveal left')}>
                    <a href={link.href}>{link.title}</a>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.down}>
          <span className={clsx(styles.copyright)}>
            © 2023 HooBank. All Rights Reserved.
          </span>
          <ul className={styles.socials}>
            {footerData.socials.map((social) => (
              <a key={social.href} href={social.href}>
                <img className={styles.icon} src={social.icon} alt="" />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
