import gsap from 'gsap'

export default function revealLogin({
  bg,
  logoLoader,
  playerLoader,
  loginLogo,
  loginInputGroup,
  loginInput,
  rights,
  pc30,
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
      // logo
      logoLoader,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
      }
    )
    .fromTo(
      // 版權
      rights,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
      },
      '<'
    )
    .to(
      // logo 消失
      logoLoader,
      {
        autoAlpha: 0,
        duration: 0.5,
      },
      '+=0.6'
    )
    .fromTo(
      // 30週年
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
      // 30消起
      playerLoader,
      {
        autoAlpha: 0,
        duration: 0.6,
      },
      '+=0.7'
    )
    .fromTo(
      // 白色logo
      loginLogo,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      },
      '+=0.3'
    )
    .to(
      // 白色版權
      rights,
      {
        color: () => {
          // 桌機隱藏
          return window.innerWidth > 1024 ? 'transparent' : '#fff'
        },
      },
      '<'
    )
    .fromTo(
      // 深色背景
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
      // 小球
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
      // 桌機小球
      '.pc-ball',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.2,
      },
      '<'
    )
    .fromTo(
      // 桌機30
      pc30,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
      },
      '<1'
    )
    .fromTo(
      // 登入欄位
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
