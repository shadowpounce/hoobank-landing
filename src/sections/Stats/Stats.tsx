import clsx from 'clsx'
import { stats } from '../../data'
import Section from '../../components/Section/Section'
import styles from './Stats.module.scss'
import { IStatistic } from '../../data/data.interface'

const Stats = () => {
  return (
    <Section className={styles.stats}>
      <div className={clsx('container', styles.container)}>
        {stats.length > 0 &&
          stats.map((statistic: IStatistic, idx) => (
            <div
              key={statistic.value}
              className={clsx(
                styles.statistic,
                `reveal ${(idx + 1) % 2 === 0 ? 'bottom' : 'top'}`
              )}
            >
              <span className={styles.num}>{statistic.value}</span>
              <span className={clsx(styles.value, 'text-gradient')}>
                {statistic.title}
              </span>
            </div>
          ))}
      </div>
    </Section>
  )
}

export default Stats
