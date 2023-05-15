import { gsap } from 'gsap'

export const useFadeIn = (selector: string) => {
  const elements = document.querySelectorAll<HTMLDataElement>(selector)

  Array.from(elements).map((el) => {
    const anim = gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      delay: el.dataset.delay ?? 0,
      duration: 1,
      ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
      paused: true,
    })

    ScrollTrigger.create({
      trigger: el,
      start: `top ${el.dataset.start ?? '75%'}`,
      onEnter: () => anim.play(),
      once: true,
    })
  })
}
