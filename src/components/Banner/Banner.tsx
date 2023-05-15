import { IBannerProps } from './Banner.interface'
import styles from './Banner.module.scss'

const Banner: React.FC<IBannerProps> = ({ children }) => {
  return <div className={styles.banner}>{children}</div>
}

export default Banner
