import gsap from 'gsap'

export default function ({ floatingBg }) {
  gsap.timeline().to(floatingBg, {
    x: 'random(-150, 150)',
    y: 'random(-100, 200)',
    duration: 5,
    ease: 'power1.inOut',
    repeat: -1,
    repeatRefresh: true, // gets a new random x and y value on each repeat
  })
}
