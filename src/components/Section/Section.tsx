import clsx from 'clsx'
import { ISectionProps } from './Section.interface'
import styles from './Section.module.scss'

const Section: React.FC<ISectionProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={clsx(styles.section, className)}>
      {children}
    </section>
  )
}

export default Section
