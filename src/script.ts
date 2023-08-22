// import { it } from 'node:test';
import './style.scss'

(function () {
  const audio = document.querySelectorAll<HTMLAudioElement>('.sounds-items audio');
  const items = document.querySelectorAll<HTMLDivElement>('.sounds-items');
  const backgroundSW = document.querySelector<HTMLDivElement>('.background-main');
  const changeShadow = document.querySelector<HTMLDivElement>('.text-center');
  const volumeS = document.querySelector<HTMLInputElement>('.range');
  const shadowText:object = {
    'rainy-bg': '3px 2px 2px rgb(255, 255, 255)',
    'summer-bg': '3px 2px 2px #5a5a5a',
    'winter-bg': '3px 2px 2px #000000'
  }

  const playSound = (item:HTMLDivElement) => {
    pauseSounds();
    switchButton();
    item.classList.add('play');
    item.querySelector('audio')!.play();
    item.querySelector('audio')!.dataset.play = 'true';
  }

  const switchButton = () => {
    items.forEach((item) => item.classList.remove('play'));
  }

  const pauseSounds = ():void => {
    audio.forEach((item) => 
      item.pause());
  }

  const pauseSound = (item:HTMLDivElement) => {
    item.classList.remove('play');
    item.querySelector('audio')!.pause();
    item.querySelector('audio')!.dataset.play = 'false';
  }

  const switchBG = (item:HTMLDivElement) => {
    backgroundSW!.style.backgroundImage = `url(./assets/${item.dataset.bg}.jpg)`
    console.log(item.dataset.bg)
    console.log(shadowText[`${item.dataset.bg}`])
    changeShadow!.style["text-shadow"] = (shadowText[`${item.dataset.bg}`])
  }

  items.forEach((item:HTMLDivElement) => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('play')) {
        playSound(item);
      } else {
        pauseSound(item);
      }
      switchBG(item);
    })
  });

  const changeVolume = ():void => {
    audio.forEach((item) => {
      item.volume = +volumeS!.value;
    });
  }
  changeVolume();
  volumeS!.addEventListener('input', changeVolume)
})();
