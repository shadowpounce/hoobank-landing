import testimonialPhoto1 from '/images/t1.png'
import testimonialPhoto2 from '/images/t2.png'
import testimonialPhoto3 from '/images/t3.png'

import f1 from '/images/feature-1.svg'
import f2 from '/images/feature-2.svg'
import f3 from '/images/feature-3.svg'
import { IFeature, IStatistic, ITestimonial } from './data.interface'

export const stats: IStatistic[] = [
  {
    value: '3800+',
    title: 'User Active',
  },
  {
    value: '230+',
    title: 'TRUSTED BY COMPANY',
  },
  {
    value: '$230M+',
    title: 'TRANSACTION',
  },
]

export const features: IFeature[] = [
  {
    title: 'Rewards',
    description:
      'The best credit cards offer some tantalizing combinations of promotions and prizes',
    icon: f1,
  },
  {
    title: '100% Secured',
    description:
      'We take proactive steps make sure your information and transactions are secure.',
    icon: f2,
  },
  {
    title: 'Balance Transfer',
    description:
      'A balance transfer credit card can save you a lot of money in interest charges.',
    icon: f3,
  },
]

export const testimonials: ITestimonial[] = [
  {
    author: {
      name: 'Herman Jensen',
      position: 'Founder & Leader',
      photo: testimonialPhoto1,
    },
    text: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
  },
  {
    author: {
      name: 'Steve Mark',
      position: 'Founder & Leader',
      photo: testimonialPhoto2,
    },
    text: 'Money makes your life easier. If you`re lucky to have it, you`re lucky.',
  },
  {
    author: {
      name: 'Kenn Gallagher',
      position: 'Founder & Leader',
      photo: testimonialPhoto3,
    },
    text: 'It is usually people in the money business, finance, and international trade that are really rich.',
  },
]
