import gsap from 'gsap'

export default function revealLogin({
  bg,
  logoLoader,
  playerLoader,
  loginLogo,
  loginInputGroup,
  loginInput,
}) {
  gsap
    .timeline({
      delay: 1,
      onComplete: function () {
        loginInput.focus() // focus input
        logoLoader.remove() // 移除載入 logo
      },
    })
    .fromTo(
      logoLoader,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
      }
    )
    .to(
      logoLoader,
      {
        autoAlpha: 0,
        duration: 0.5,
      },
      '+=0.6'
    )
    .fromTo(
      playerLoader,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.6,
      },
      '+=0.6'
    )
    .to(
      playerLoader,
      {
        autoAlpha: 0,
        duration: 0.6,
      },
      '+=0.7'
    )
    .fromTo(
      loginLogo,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      },
      '+=0.3'
    )
    .fromTo(
      bg,
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        duration: 1,
        ease: 'Power4.easeOut',
      },
      '<'
    )
    .fromTo(
      '.ball',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.2,
      }
    )
    .fromTo(
      loginInputGroup,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
      }
    )
}
