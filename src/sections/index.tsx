import Features from './Features/Features'
import Hero from './Hero/Hero'
import Stats from './Stats/Stats'
import Product from './Product/Product'
import Solution from './Solution/Solution'
import Testimonials from './Testimonials/Testimonials'
import Partners from './Partners/Partners'
import FooterBanner from './FooterBanner/FooterBanner'
import Footer from '../components/Footer/Footer'

export const screens = [
  {
    name: 'hero',
    element: <Hero />,
  },
  {
    name: 'stats',
    element: <Stats />,
  },
  {
    name: 'features',
    element: <Features />,
  },
  {
    name: 'product',
    element: <Product />,
  },
  {
    name: 'solution',
    element: <Solution />,
  },
  {
    name: 'testimonials',
    element: <Testimonials />,
  },
  {
    name: 'partners',
    element: <Partners />,
  },
  {
    name: 'footer-banner',
    element: <FooterBanner />,
  },
  {
    name: 'footer',
    element: <Footer />,
  },
]
