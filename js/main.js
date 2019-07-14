window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://developer-elmo.github.io/hello-world/sw.js');
  }
}