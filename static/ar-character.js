const USER_KEY_NAME = 'ozj32uqurm';
const ACQUIRED_KEY_NAME = 'u3fm32k6rul3nk4';
const HASHTAGS = {
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
};
const SNAP_SCALE = 3;
// 隨機生成 0 到 (max-1) 的整數
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getCaptureImage(origCanvas, width, height) {
  let resizedCanvas = document.createElement('canvas');

  resizedCanvas.width = width;
  resizedCanvas.height = height;

  if (width > height) {
    // Landscape
    // originCanvas: 4096 x 2048
    // video: 640 x 480
    // 這邊 originCanvas 原圖高度比例有被自動被壓縮了 1.5 倍，很奇怪。
    // 因此 originCanvas -> 畫到 640 x 480 時，反而剛好把比例調整回來
    resizedCanvas.getContext('2d').drawImage(origCanvas, 0, 0, width, height);
  } else {
    // Portrait
    // originCanvas: 4096 x 2048
    // video: 480 x 640
    // console.log('origin', origCanvas.width, origCanvas.height);
    // console.log('target', width, height);
    let scale = height / origCanvas.height; // 將 originCanvas 縮小至與 video 等高
    // console.log('scale: ', scale);
    let scaledHeight = origCanvas.height * scale;
    let scaledWidth = (origCanvas.width * scale) / 1.5; // 寬度也必須再壓縮 1.5 倍才會看起來是正確比例。
    let marginLeft = (width - scaledWidth) / 2;
    // console.log(scaledWidth, scaledHeight);
    resizedCanvas
      .getContext('2d')
      .drawImage(origCanvas, marginLeft, 0, scaledWidth, scaledHeight);
  }

  return resizedCanvas.toDataURL();
}

function getCaptureImageFromVideo(video, width, height) {
  let tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  tempCanvas.getContext('2d').drawImage(video, 0, 0, width, height);

  return tempCanvas.toDataURL();
}

// 角色編號
function getCharString() {
  const user = JSON.parse(localStorage.getItem(USER_KEY_NAME));
  if (user) {
    return user.character;
  }
  return 'c1';
}

// hashtag 文字
function getHashtagText(character) {
  return (
    '#FourdesirePlayground2021 #我是' + HASHTAGS[character] + ' #生活遊樂場'
  );
}
function getHashtagHTML(character) {
  return (
    '#FourdesirePlayground2021<br/>#我是' +
    HASHTAGS[character] +
    '<br/>#生活遊樂場'
  );
}

// 儲存已取得角色
function setAcquired() {
  localStorage.setItem(ACQUIRED_KEY_NAME, true);
}

// 載入模型
function load3DModel() {
  let loader = document.querySelector('#loader');
  let model = document.querySelector('#bowser-model');
  let modelPath = '';

  // 模型載入事件
  model.addEventListener('model-loaded', function () {
    console.log('model-loaded');
    setTimeout(() => {
      loader.classList.add('hide');
    }, 1000);
  });
  model.addEventListener('model-error', function () {
    console.log('model-loaded');
    loader.textContent = '錯誤';
    loader.classList.remove('hide');
  });

  // 載入模型
  modelPath = 'ar/model/card/' + window.character + '.glb';
  console.log(modelPath);
  model.setAttribute('gltf-model', modelPath);
}

// 測試用模型
function loadTestModel() {
  let loader = document.querySelector('#loader');
  let model = document.querySelector('#bowser-model');
  let modelPath = '';

  // 模型載入事件
  model.addEventListener('model-loaded', function () {
    console.log('model-loaded');
    setTimeout(() => {
      loader.classList.add('hide');
    }, 1000);
  });
  model.addEventListener('model-error', function () {
    console.log('model-loaded');
    loader.textContent = '錯誤';
    loader.classList.remove('hide');
  });

  // 載入模型
  modelPath = 'ar/model/test/0824_near.glb';
  console.log(modelPath);
  model.setAttribute('gltf-model', modelPath);
}

// 閃光效果
function flash() {
  const snapFlash = document.querySelector('#snap-flash');
  snapFlash.classList.add('show');
  setTimeout(() => {
    snapFlash.classList.remove('show');
  }, 100);
}

function showResultModel() {
  const modal = document.querySelector('#snap-modal');
  modal.scrollTop = 0;
  modal.classList.add('show');
  document.querySelector('.result-block').classList.remove('hide');
}

// 截圖
function capture() {
  // 1. Get from canvas
  const sceneEl = document.querySelector('a-scene');
  const sceneCanvas = sceneEl.components.screenshot.getCanvas('perspective');
  // 2. Get from stream video
  const video = document.querySelector('#arjs-video');
  console.log(video.videoWidth, video.videoHeight);
  const videoImageUrl = getCaptureImageFromVideo(
    video,
    video.videoWidth * SNAP_SCALE,
    video.videoHeight * SNAP_SCALE
  );
  const sceneImageUrl = getCaptureImage(
    sceneCanvas,
    video.videoWidth * SNAP_SCALE, // same size with stream video
    video.videoHeight * SNAP_SCALE
  );
  // 3. merge sceneImageUrl + videoImageUrl
  mergeImages([videoImageUrl, sceneImageUrl]).then((b64) => {
    document.querySelector('#snap-modal .result').src = b64;
    document.querySelector('.result-block').classList.add('hide');
  });
}

window.addEventListener('load', function () {
  // 0. 讀取使用者資訊
  window.character = getCharString();
  // 1. 載入模型
  load3DModel();
  // 2. 拍照功能
  document.querySelector('#snap-btn').addEventListener('click', function () {
    flash();
    showResultModel();
    setTimeout(() => {
      capture();
    }, 360);
  });
  // 3. 寫入角色名稱
  document.querySelector('.hashtags p').innerHTML = getHashtagHTML(
    window.character
  );
});

document.addEventListener('DOMContentLoaded', function (evt) {
  // 1. 偵測 marker 處理
  const snapBtn = document.querySelector('#snap-btn');
  const marker = document.querySelector('#markerA');
  const markerHint = document.querySelector('.marker-hint');
  marker.addEventListener('markerFound', function () {
    // 偵測到 marker，隱藏提示、顯示拍照鈕
    markerHint.style.animation = 'none';
    setTimeout(() => {
      snapBtn.classList.remove('hide');
      markerHint.classList.add('hide');
    }, 100);
    // 儲存已取得角色
    setAcquired();
  });

  // 2. 資訊開關
  const infoBtn = document.querySelector('.info-btn');
  const infoModal = document.querySelector('.info-modal');
  const infoCloseBtn = infoModal.querySelector('.close-btn');

  infoBtn.addEventListener('click', function () {
    infoModal.classList.add('show');
  });
  infoCloseBtn.addEventListener('click', function () {
    infoModal.classList.remove('show');
  });

  // 3. 關閉結果 modal
  const closeBtn = document.querySelector('#snap-modal .again');
  closeBtn.addEventListener('click', function () {
    document.querySelector('#snap-modal').classList.remove('show');
    setTimeout(() => {
      document.querySelector('#snap-modal .result').src = '';
      document.querySelector('.result-block').classList.remove('hide');
    }, 400);
  });

  // 4. 返回首頁
  document.querySelectorAll('.js-back-home').forEach(function (el) {
    el.addEventListener('click', function () {
      window.location.href = window.location.origin + '/fdpg/';
    });
  });

  // 5. 複製 hashtags
  document.querySelector('.copy-btn').addEventListener('click', function () {
    const hint = document.querySelector('.copy-hint');
    const copyText = getHashtagText(window.character);
    navigator.clipboard
      .writeText(copyText)
      .then(function () {
        hint.classList.add('show');
        setTimeout(() => {
          hint.classList.remove('show');
        }, 1000);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
});
