import clsx from 'clsx'
import Label from '../../components/Label/Label'
import Title from '../../components/Title/Title'
import styles from './Hero.module.scss'
import discountIcon from '/images/discount-ico.svg'
import Button from '../../components/Button/Button'
import { ButtonType } from '../../components/Button/ButtonType.enum'
import heroHandImg from '/images/hero-hand.png'
import circleBtnArrow from '/images/circle-btn-arrow.svg'
import graphicCard1 from '/images/hero-card-1.png'
import graphicCard2 from '/images/hero-card-2.png'
import graphicCard3 from '/images/hero-card-3.png'
import Section from '../../components/Section/Section'

const Hero = () => {
  return (
    <Section id={'hero'} className={styles.hero}>
      <div className={styles.graphic}>
        <div
          data-start="100%"
          className={clsx(styles.circle, 'reveal')}
          id="circle-1"
        ></div>
        <div
          data-start="100%"
          className={clsx(styles.circle, 'reveal')}
          id="circle-2"
        ></div>
        <div
          data-start="100%"
          className={clsx(styles.circle, 'reveal')}
          id="circle-3"
        ></div>
        <img className={styles.graphicHand} src={heroHandImg} alt="" />
        <div id="hero-card-1" className={styles.graphicCard}>
          <img data-delay="0.5" className="reveal" src={graphicCard1} alt="" />
        </div>
        <div id="hero-card-2" className={styles.graphicCard}>
          <img data-delay="0.25" className="reveal" src={graphicCard2} alt="" />
        </div>
        <div id="hero-card-3" className={styles.graphicCard}>
          <img className="reveal" src={graphicCard3} alt="" />
        </div>
      </div>
      <div className={'container'}>
        <div className={styles.info}>
          <Label className={clsx(styles.discount, 'reveal left')}>
            <img className={styles.discountIcon} src={discountIcon} alt="" />
            <small className={styles.discountText}>
              20% <span>discount for</span> 1 month <span>account</span>
            </small>
          </Label>
          <div className={styles.title}>
            <div className="reveal left">
              <Title lvl="1">The next</Title>
            </div>
            <div className="reveal left">
              <Title lvl="1">
                <div className="text-gradient">Generation</div>
              </Title>
            </div>
            <div className="reveal left">
              <Title lvl="1">Payment Method.</Title>
            </div>
          </div>
          <p className="reveal left" data-start="100%" data-paused="false">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          <div className={clsx(styles.button, 'reveal')}>
            <Button type={ButtonType.Circle}>
              <div className="flex items-center text-gradient">
                Get <img src={circleBtnArrow} alt="" />
              </div>
              <div className="text-gradient">Started</div>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
