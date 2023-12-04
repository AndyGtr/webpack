import generateJoke from "./generateJoke";
import "./styles/main.scss";
import favicon from './assets/favicon.png'

const faviconImage = document.getElementById('favicon');
faviconImage.src = favicon;
console.log(generateJoke());