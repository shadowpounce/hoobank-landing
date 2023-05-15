export const useAnchor = (href: string) => {
  const target = document.querySelector(href) as HTMLElement
  const targetY = target.offsetTop

  window.scroll({
    left: 0,
    top: targetY,
    behavior: 'smooth',
  })
}
