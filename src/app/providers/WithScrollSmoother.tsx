import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { IWithScrollSmootherProps } from './WithScrollSmoother.interface'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const WithScrollSmoother: React.FC<IWithScrollSmootherProps> = ({
  children,
}) => {
  useEffect(() => {
    if (ScrollSmoother) {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
      })
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}

export default WithScrollSmoother
