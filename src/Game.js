import './main.css';
import Phaser, {Game} from 'phaser';
import Menu from './scenes/menu';
import Preload from './scenes/Preload';
import MapMenu from './scenes/mapSelect';
import MapOne from './scenes/mapOne';
import PauseMenu from './scenes/pauseMenu';

const canvas = document.getElementById('game');
const config = {
  type: Phaser.WEBGL,
  width: 900,
  height: 400,
  canvas,
  transparent: true,
  backgroundColor: 'rgba(255, 110, 110, 0)',
  physics: {
    default: 'arcade',
    arcade: {
      //gravity: { y: 200 },
      debug: true
    }
  },
  scene: [
    Preload,
    Menu,
    MapMenu,
    MapOne,
    PauseMenu
  ]
};

const game = new Game(config);
