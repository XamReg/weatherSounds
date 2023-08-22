"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { it } from 'node:test';
require("./style.scss");
(function () {
    var audio = document.querySelectorAll('.sounds-items audio');
    var items = document.querySelectorAll('.sounds-items');
    var backgroundSW = document.querySelector('.background-main');
    var changeShadow = document.querySelector('.text-center');
    var volumeS = document.querySelector('.range');
    var shadowText = {
        'rainy-bg': '3px 2px 2px rgb(255, 255, 255)',
        'summer-bg': '3px 2px 2px #5a5a5a',
        'winter-bg': '3px 2px 2px #000000'
    };
    var playSound = function (item) {
        pauseSounds();
        switchButton();
        item.classList.add('play');
        item.querySelector('audio').play();
        item.querySelector('audio').dataset.play = 'true';
    };
    var switchButton = function () {
        items.forEach(function (item) { return item.classList.remove('play'); });
    };
    var pauseSounds = function () {
        audio.forEach(function (item) {
            return item.pause();
        });
    };
    var pauseSound = function (item) {
        item.classList.remove('play');
        item.querySelector('audio').pause();
        item.querySelector('audio').dataset.play = 'false';
    };
    var switchBG = function (item) {
        backgroundSW.style.backgroundImage = "url(./assets/".concat(item.dataset.bg, ".jpg)");
        console.log(item.dataset.bg);
        console.log(shadowText["".concat(item.dataset.bg)]);
        changeShadow.style["text-shadow"] = (shadowText["".concat(item.dataset.bg)]);
    };
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            if (!item.classList.contains('play')) {
                playSound(item);
            }
            else {
                pauseSound(item);
            }
            switchBG(item);
        });
    });
    var changeVolume = function () {
        audio.forEach(function (item) {
            item.volume = +volumeS.value;
        });
    };
    changeVolume();
    volumeS.addEventListener('input', changeVolume);
})();
