import './index.scss';

/* viewport width */
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

/* dom */
let htmlDom = document.getElementsByTagName('html')[0];

/* html fontsize */
htmlDom.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize', (e) => {
  htmlDom.style.fontSize = htmlWidth / 10 + 'px';
});