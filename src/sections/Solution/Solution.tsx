import styles from './Solution.module.scss'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import { ButtonType } from '../../components/Button/ButtonType.enum'
import frame1 from '/images/card-1.png'
import frame2 from '/images/card-2.png'
import frame3 from '/images/card-3.png'
import clsx from 'clsx'
import Section from '../../components/Section/Section'

const Solution = () => {
  return (
    <Section id={'solution'} className={styles.solution}>
      <div className="container">
        <div className={styles.info}>
          <div className="reveal left">
            <Title lvl="2">Find a better card deal in few easy steps.</Title>
          </div>
          <p className="reveal left">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <div className="reveal left">
            <Button type={ButtonType.Primary}>Get Started</Button>
          </div>
        </div>
        <div className={styles.frames}>
          <img
            src={frame1}
            alt=""
            className={clsx(styles.frame, 'reveal left')}
          />
          <img
            src={frame2}
            alt=""
            className={clsx(styles.frame, 'reveal right')}
          />
          <img
            src={frame3}
            alt=""
            className={clsx(styles.frame, 'reveal bottom')}
          />
          <div className={styles.ellipse}>
            <svg
              width="382"
              height="382"
              viewBox="0 0 382 382"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="reveal"
                id="circle-1"
                data-delay="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M190.504 371.883C290.192 371.883 371.004 291.07 371.004 191.383C371.004 91.6952 290.192 10.8826 190.504 10.8826C90.8168 10.8826 10.0042 91.6952 10.0042 191.383C10.0042 291.07 90.8168 371.883 190.504 371.883ZM190.504 381.883C295.714 381.883 381.004 296.593 381.004 191.383C381.004 86.1723 295.714 0.882568 190.504 0.882568C85.294 0.882568 0.00421143 86.1723 0.00421143 191.383C0.00421143 296.593 85.294 381.883 190.504 381.883Z"
                fill="url(#paint0_linear_0_1)"
                fillOpacity="0.3"
              />
              <path
                className="reveal"
                id="circle-2"
                data-delay="0.25"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M112.311 98.1955C60.8453 141.38 54.1324 218.11 97.3173 269.576C140.502 321.042 217.232 327.754 268.698 284.57C320.163 241.385 326.876 164.655 283.691 113.189C240.506 61.7235 163.777 55.0106 112.311 98.1955ZM109.097 94.3653C55.516 139.325 48.5271 219.209 93.487 272.79C138.447 326.371 218.33 333.36 271.911 288.4C325.493 243.44 332.481 163.557 287.522 109.975C242.562 56.3942 162.678 49.4053 109.097 94.3653Z"
                fill="url(#paint1_linear_0_1)"
                fillOpacity="0.3"
              />
              <path
                className="reveal"
                id="circle-3"
                data-delay="0"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M153.663 147.476C129.414 167.823 126.251 203.975 146.598 228.224C166.945 252.473 203.097 255.636 227.346 235.289C251.595 214.942 254.758 178.789 234.411 154.54C214.064 130.292 177.911 127.129 153.663 147.476ZM150.449 143.646C124.084 165.768 120.646 205.074 142.768 231.438C164.89 257.802 204.196 261.241 230.56 239.119C256.924 216.997 260.363 177.691 238.241 151.327C216.119 124.962 176.813 121.523 150.449 143.646Z"
                fill="url(#paint2_linear_0_1)"
                fillOpacity="0.3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="254.568"
                  y1="-341.422"
                  x2="507.315"
                  y2="278.31"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00887753" stopColor="#DEF9FA" />
                  <stop offset="0.1723" stopColor="#BEF3F5" />
                  <stop offset="0.4204" stopColor="#9DEDF0" />
                  <stop offset="0.5512" stopColor="#7DE7EB" />
                  <stop offset="0.7154" stopColor="#5CE1E6" />
                  <stop offset="1" stopColor="#33BBCF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="385.564"
                  y1="490.104"
                  x2="-7.98746"
                  y2="282.496"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00887753" stopColor="#DEF9FA" />
                  <stop offset="0.1723" stopColor="#BEF3F5" />
                  <stop offset="0.4204" stopColor="#9DEDF0" />
                  <stop offset="0.5512" stopColor="#7DE7EB" />
                  <stop offset="0.7154" stopColor="#5CE1E6" />
                  <stop offset="1" stopColor="#33BBCF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_1"
                  x1="286.482"
                  y1="338.366"
                  x2="92.8379"
                  y2="236.214"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00887753" stopColor="#DEF9FA" />
                  <stop offset="0.1723" stopColor="#BEF3F5" />
                  <stop offset="0.4204" stopColor="#9DEDF0" />
                  <stop offset="0.5512" stopColor="#7DE7EB" />
                  <stop offset="0.7154" stopColor="#5CE1E6" />
                  <stop offset="1" stopColor="#33BBCF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Solution
