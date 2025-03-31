
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const useOutlineAnim = () => useGSAP(() => {
  gsap.to('.outline1', { rotation: '+=360', duration: 30, repeat: -1, ease: 'none' })
  gsap.to('.outline2', { rotation: '+=360', duration: 45, repeat: -1, ease: 'none' })
  gsap.to('.outline3', { rotation: '+=360', duration: 60, repeat: -1, ease: 'none' })
})


export const useTextSlide = (elem, shift) => useGSAP(() => {
  gsap.to(elem, { x: ( window.innerWidth / -2 ) + shift, duration: 0.5})
})
