import Section from '../../components/Section/Section'
import airbnb from '/images/airbnb.png'
import binance from '/images/binance.png'
import coinbase from '/images/coinbase.png'
import dropbox from '/images/dropbox.png'

import styles from './Partners.module.scss'

const Partners = () => {
  return (
    <Section className={styles.partners}>
      <div className="container">
        <div className="reveal top">
          <img src={airbnb} alt="" />
        </div>
        <div className="reveal bottom">
          <img src={binance} alt="" />
        </div>
        <div className="reveal top">
          <img src={coinbase} alt="" />
        </div>
        <div className="reveal bottom">
          <img src={dropbox} alt="" />
        </div>
      </div>
    </Section>
  )
}

export default Partners
