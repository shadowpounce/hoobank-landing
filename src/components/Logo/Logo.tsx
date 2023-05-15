import styles from './Logo.module.scss'
import logoImg from '/images/logo.svg'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoImg} alt="" />
    </div>
  )
}

export default Logo
