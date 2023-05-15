import clsx from 'clsx'
import { ILabelProps } from './Label.interface'
import styles from './Label.module.scss'

const Label: React.FC<ILabelProps> = ({ children, className }) => {
  return (
    <div className={clsx(styles.label, className && className)}>{children}</div>
  )
}

export default Label
