const USER_KEY_NAME = 'ozj32uqurm',
  ACQUIRED_KEY_NAME = 'u3fm32k6rul3nk4',
  HASHTAGS = {
    c1: '超級行動派柯林斯',
    c2: '號召力一流的強尼教練',
    c3: '星際領航員豆子',
    c4: '理財金頭腦錢喵喵',
    c5: '精打細算的鷹主管',
    c6: '優雅夢想家狐老大',
    c7: '心靈療癒師蒲公英',
    c8: '正能量滿滿的向日葵',
    c9: '知性園丁黃金葛',
    c10: '玩心探險家勾勾狸',
    c11: '理性計畫通勾勾狸',
    c12: '勇敢無懼的勾勾狸',
  },
  SNAP_SCALE = 3
function getRandomInt(e) {
  return Math.floor(Math.random() * e)
}
function getCaptureImage(e, t, o) {
  let n = document.createElement('canvas')
  if (((n.width = t), (n.height = o), t > o))
    n.getContext('2d').drawImage(e, 0, 0, t, o)
  else {
    let c = o / e.height,
      r = e.height * c,
      d = (e.width * c) / 1.5,
      a = (t - d) / 2
    n.getContext('2d').drawImage(e, a, 0, d, r)
  }
  return n.toDataURL()
}
function getCaptureImageFromVideo(e, t, o) {
  let n = document.createElement('canvas')
  return (
    (n.width = t),
    (n.height = o),
    n.getContext('2d').drawImage(e, 0, 0, t, o),
    n.toDataURL()
  )
}
function getCharString() {
  const e = JSON.parse(localStorage.getItem(USER_KEY_NAME))
  return e ? e.character : 'c1'
}
function getHashtagText(e) {
  return '#fourdesire #我是 ' + HASHTAGS[e] + ' #生活遊樂場'
}
function getHashtagHTML(e) {
  return '#fourdesire<br/>#我是 ' + HASHTAGS[e] + '<br/>#生活遊樂場'
}
function setAcquired() {
  localStorage.setItem(ACQUIRED_KEY_NAME, !0)
}
function load3DModel() {
  let e = document.querySelector('#loader'),
    t = document.querySelector('#bowser-model'),
    o = ''
  t.addEventListener('model-loaded', function () {
    console.log('model-loaded'),
      setTimeout(() => {
        e.classList.add('hide')
      }, 1e3)
  }),
    t.addEventListener('model-error', function () {
      console.log('model-loaded'),
        (e.textContent = '錯誤'),
        e.classList.remove('hide')
    }),
    (o = 'ar/model/card/' + window.character + '.glb'),
    console.log(o),
    t.setAttribute('gltf-model', o)
}
function loadTestModel() {
  let e = document.querySelector('#loader'),
    t = document.querySelector('#bowser-model'),
    o = ''
  t.addEventListener('model-loaded', function () {
    console.log('model-loaded'),
      setTimeout(() => {
        e.classList.add('hide')
      }, 1e3)
  }),
    t.addEventListener('model-error', function () {
      console.log('model-loaded'),
        (e.textContent = '錯誤'),
        e.classList.remove('hide')
    }),
    (o = 'ar/model/test/0824_near.glb'),
    console.log('ar/model/test/0824_near.glb'),
    t.setAttribute('gltf-model', 'ar/model/test/0824_near.glb')
}
function flash() {
  const e = document.querySelector('#snap-flash')
  e.classList.add('show'),
    setTimeout(() => {
      e.classList.remove('show')
    }, 100)
}
function showResultModel() {
  const e = document.querySelector('#snap-modal')
  ;(e.scrollTop = 0),
    e.classList.add('show'),
    document.querySelector('.result-block').classList.remove('hide')
}
function capture() {
  const e = document
      .querySelector('a-scene')
      .components.screenshot.getCanvas('perspective'),
    t = document.querySelector('#arjs-video')
  console.log(t.videoWidth, t.videoHeight)
  const o = getCaptureImageFromVideo(
      t,
      t.videoWidth * SNAP_SCALE,
      t.videoHeight * SNAP_SCALE
    ),
    n = getCaptureImage(
      e,
      t.videoWidth * SNAP_SCALE,
      t.videoHeight * SNAP_SCALE
    )
  mergeImages([o, n]).then((e) => {
    ;(document.querySelector('#snap-modal .result').src = e),
      document.querySelector('.result-block').classList.add('hide')
  })
}
window.addEventListener('load', function () {
  ;(window.character = getCharString()),
    load3DModel(),
    document.querySelector('#snap-btn').addEventListener('click', function () {
      flash(),
        showResultModel(),
        setTimeout(() => {
          capture()
        }, 360)
    }),
    (document.querySelector('.hashtags p').innerHTML = getHashtagHTML(
      window.character
    ))
}),
  document.addEventListener('DOMContentLoaded', function (e) {
    const t = document.querySelector('#snap-btn'),
      o = document.querySelector('#markerA'),
      n = document.querySelector('.marker-hint')
    o.addEventListener('markerFound', function () {
      ;(n.style.animation = 'none'),
        setTimeout(() => {
          t.classList.remove('hide'), n.classList.add('hide')
        }, 100),
        setAcquired()
    })
    const c = document.querySelector('.info-btn'),
      r = document.querySelector('.info-modal'),
      d = r.querySelector('.close-btn')
    c.addEventListener('click', function () {
      r.classList.add('show')
    }),
      d.addEventListener('click', function () {
        r.classList.remove('show')
      }),
      document
        .querySelector('#snap-modal .again')
        .addEventListener('click', function () {
          document.querySelector('#snap-modal').classList.remove('show'),
            setTimeout(() => {
              ;(document.querySelector('#snap-modal .result').src = ''),
                document.querySelector('.result-block').classList.add('hide')
            }, 400)
        }),
      document.querySelectorAll('.js-back-home').forEach(function (e) {
        e.addEventListener('click', function () {
          window.location.href = window.location.origin
        })
      }),
      document
        .querySelector('.copy-btn')
        .addEventListener('click', function () {
          const e = document.querySelector('.copy-hint'),
            t = getHashtagText(window.character)
          navigator.clipboard
            .writeText(t)
            .then(function () {
              e.classList.add('show'),
                setTimeout(() => {
                  e.classList.remove('show')
                }, 1e3)
            })
            .catch(function (e) {
              console.log(e)
            })
        })
  })
