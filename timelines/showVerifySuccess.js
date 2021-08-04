import gsap from 'gsap'
import { SlowMo } from 'gsap/EasePack'

export default function ({ successBg, verifyLoader, verifySuccess }) {
  gsap
    .timeline()
    .fromTo(
      successBg,
      {
        left: '100%',
      },
      {
        left: '-140%',
        ease: SlowMo.ease.config(0.7, 0.7, false),
        duration: 2,
      }
    )
    .fromTo(
      verifyLoader,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        scale: 0,
        duration: 0.3,
      },
      '0.5'
    )
    .fromTo(
      verifySuccess,
      {
        autoAlpha: 0,
        scale: 0,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
      },
      '0.8'
    )
}
