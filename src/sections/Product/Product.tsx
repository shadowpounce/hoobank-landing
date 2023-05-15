import styles from './Product.module.scss'
import frame1 from '/images/product-1.png'
import frame2 from '/images/product-2.png'
import checkIco from '/images/check.svg'
import Title from '../../components/Title/Title'
import appstoreIco from '/images/appstore.svg'
import googleplayIco from '/images/googleplay.svg'
import gradient from '/images/card-gradient.png'
import clsx from 'clsx'
import Section from '../../components/Section/Section'

const Product = () => {
  return (
    <Section className={styles.product}>
      <div className="container">
        <div className="gradient">
          <img src={gradient} alt="" />
        </div>
        <div className={styles.frames}>
          <div className={clsx(styles.frame, 'reveal right')}>
            <img src={frame1} alt="" />
          </div>
          <div className={clsx(styles.frame, 'reveal left')}>
            <img src={frame2} alt="" />
          </div>
          <div className={clsx(styles.frame, 'reveal right')}>
            <img className={styles.checkIcon} src={checkIco} alt="" />
            <p>Great! Your Payment is succesfully.</p>
          </div>
        </div>
        <div className={styles.info}>
          <div className="reveal right">
            <Title lvl="2">Easily control your billing & invoicing.</Title>
          </div>
          <p className="reveal right">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div>
            <div className="reveal left">
              <img src={appstoreIco} alt="" />
            </div>
            <div className="reveal right">
              <img src={googleplayIco} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Product
