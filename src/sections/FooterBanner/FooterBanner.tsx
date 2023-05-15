import Banner from '../../components/Banner/Banner'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import { ButtonType } from '../../components/Button/ButtonType.enum'
import Section from '../../components/Section/Section'
import styles from './FooterBanner.module.scss'
import clsx from 'clsx'

const FooterBanner = () => {
  return (
    <Section className={styles.footerBanner}>
      <div className="container">
        <Banner>
          <div className={styles.wrapper}>
            <div className={styles.innerWrap}>
              <div className="reveal top">
                <Title lvl="2">Let’s try our service now!</Title>
              </div>
              <p className="w-9/12 reveal bottom">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
            <div className={clsx(styles.bannerButton, 'reveal bottom')}>
              <Button type={ButtonType.Primary}>Get Started</Button>
            </div>
          </div>
        </Banner>
      </div>
    </Section>
  )
}

export default FooterBanner
