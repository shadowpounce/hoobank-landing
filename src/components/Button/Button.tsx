import clsx from 'clsx'
import styles from './Button.module.scss'
import { IButtonProps } from './Button.interface'

const Button: React.FC<IButtonProps> = ({ children, type }) => {
  return (
    <button className={clsx(styles.button, styles[type])}>
      <div className={styles.content}>{children}</div>
    </button>
  )
}

export default Button
