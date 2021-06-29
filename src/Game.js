import './main.css';
import Phaser, {Game} from 'phaser';
import Menu from './scenes/menu';
import Preload from './scenes/Preload';
import MapMenu from './scenes/mapSelect';
import MapOne from './scenes/mapOne';
import PauseMenu from './scenes/pauseMenu';
import GameOver from './scenes/gameOver';

const canvas = document.getElementById('game');
const config = {
  type: Phaser.WEBGL,
  width: 900,
  height: 400,
  canvas,
  transparent: true,
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
    PauseMenu,
    GameOver
  ]
};

const game = new Game(config);
