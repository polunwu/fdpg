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

window.addEventListener('load', () => {
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

  // 隨機載入模型
  // switch (getRandomInt(3)) {
  switch (2) {
    case 0:
      modelPath = 'ar/model/untitled/Untitled.gltf';
      break;
    case 1:
      modelPath = 'ar/model/water/water.gltf';
      break;
    case 2:
      modelPath = 'ar/model/robot/BrainStem.glb';
      break;
    default:
      break;
  }
  console.log(modelPath);
  model.setAttribute('gltf-model', modelPath);

  // 拍照
  let snapBtn = document.querySelector('#snap-btn');
  snapBtn.addEventListener('click', function () {
    // // 1. Get from canvas
    // const sceneEl = document.querySelector('a-scene');
    // const sceneCanvas = sceneEl.components.screenshot.getCanvas('perspective');
    // // 2. Get from stream video
    // const video = document.querySelector('#arjs-video');
    // const videoImageUrl = getCaptureImageFromVideo(
    //   video,
    //   video.videoWidth,
    //   video.videoHeight
    // );
    // const sceneImageUrl = getCaptureImage(
    //   sceneCanvas,
    //   video.videoWidth, // same size with stream video
    //   video.videoHeight
    // );
    // // 3. merge sceneImageUrl + videoImageUrl
    // mergeImages([videoImageUrl, sceneImageUrl]).then((b64) => {
    //   document.querySelector('#snap-frame .result').src = b64;
    // });
  });
});

const marker = document.querySelector('#markerA');
marker.addEventListener('markerFound', function () {
  alert('markerFound');
});
