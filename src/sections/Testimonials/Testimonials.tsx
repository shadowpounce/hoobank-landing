import clsx from 'clsx'
import Title from '../../components/Title/Title'
import styles from './Testimonials.module.scss'
import quouteIcon from '/images/quote-icon.svg'
import gradient from '/images/testimonials-gradient.png'
import Section from '../../components/Section/Section'
import { testimonials } from '../../data'
import { ITestimonial } from '../../data/data.interface'

const Testimonials = () => {
  return (
    <Section id={'testimonials'} className={styles.testimonials}>
      <div className="container">
        <div className="gradient">
          <img src={gradient} alt="" />
        </div>
        <div className={styles.row}>
          <Title lvl="2">
            <div className="reveal left">What people are saying about us</div>
          </Title>
          <p className="reveal right">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className={styles.row}>
          {testimonials.length > 0 &&
            testimonials.map((testimonial: ITestimonial, idx) => (
              <div
                data-delay={`0,${idx}`}
                key={testimonial.author.name}
                className={clsx(styles.testimonial, 'reveal left')}
              >
                <img src={quouteIcon} alt="" className={styles.icon} />
                <p className={styles.text}>{testimonial.text}</p>
                <div className={styles.author}>
                  <div className={styles.photo}>
                    <img src={testimonial.author.photo} alt="" />
                  </div>
                  <div className={styles.info}>
                    <span className={styles.name}>
                      {testimonial.author.name}
                    </span>
                    <span className={styles.position}>
                      {testimonial.author.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
