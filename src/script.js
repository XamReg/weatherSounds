import './style.scss'

(function () {
  const audio = document.querySelectorAll('.sounds-items audio');
  const items = document.querySelectorAll('.sounds-items');
  const backgroundSW = document.querySelector('.background-main');
  const changeShadow = document.querySelector('.text-center');
  const volumeS = document.querySelector('.range');
  const shadowText = {
    'rainy-bg': '3px 2px 2px rgb(255, 255, 255)',
    'summer-bg': '3px 2px 2px #5a5a5a',
    'winter-bg': '3px 2px 2px #000000'
  }

  const playSound = (item) => {
    pauseSounds();
    switchButton();
    item.classList.add('play');
    item.querySelector('audio').play();
    item.querySelector('audio').dataset.play = 'true';
  }

  const switchButton = () => {
    items.forEach((item) => item.classList.remove('play'));
  }

  const pauseSounds = () => {
    audio.forEach((item) => item.pause());
  }

  const pauseSound = (item) => {
    item.classList.remove('play');
    item.querySelector('audio').pause();
    item.querySelector('audio').dataset.play = 'false';
  }

  const switchBG = (item) => {
    backgroundSW.style.backgroundImage = `url(./assets/${item.dataset.bg}.jpg)`
    console.log(item.dataset.bg)
    console.log(shadowText[`${item.dataset.bg}`])
    changeShadow.style["text-shadow"] = (shadowText[`${item.dataset.bg}`])
  }

  items.forEach((item) => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('play')) {
        playSound(item);
      } else {
        pauseSound(item);
      }
      switchBG(item);
    })
  });

  const changeVolume = () => {
    audio.forEach((item) => {
      item.volumeS = +volumeS.value;
    });
  }
  changeVolume();
  volumeS.addEventListener('input', changeVolume)
})();
