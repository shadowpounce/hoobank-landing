export interface IStatistic {
  title: string
  value: string
}

export interface IFeature {
  title: string
  description: string
  icon: string
}

export interface ITestimonial {
  author: {
    name: string
    position: string
    photo: string
  }
  text: string
}
