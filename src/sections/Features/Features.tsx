import clsx from 'clsx'
import Button from '../../components/Button/Button'
import { ButtonType } from '../../components/Button/ButtonType.enum'
import Title from '../../components/Title/Title'
import styles from './Features.module.scss'
import Section from '../../components/Section/Section'
import { features } from '../../data'
import { IFeature } from '../../data/data.interface'

const Features = () => {
  return (
    <Section id={'features'} className={styles.features}>
      <div className="container">
        <div className={styles.info}>
          <div className="reveal left">
            <Title lvl="2">You do the business, we’ll handle the money.</Title>
          </div>
          <p className="reveal left">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <div className="reveal left">
            <Button type={ButtonType.Primary}>Get Started</Button>
          </div>
        </div>
        <div className={styles.list}>
          {features.length > 0 &&
            features.map((feature: IFeature) => (
              <div
                key={feature.title}
                className={clsx(styles.feature, 'reveal right')}
              >
                <div className={styles.icon}>
                  <img src={feature.icon} alt="" />
                </div>
                <div className={styles.content}>
                  <span>{feature.title}</span>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Section>
  )
}

export default Features
