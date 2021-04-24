import './main.css';
import Phaser, {Game} from 'phaser';
import MapOne from './scenes/mapOne'
import Menu from './scenes/menu';
import MapMenu from './scenes/mapSelect';

const canvas = document.getElementById('game');
const config = {
  type: Phaser.WEBGL,
  width: 1200,
  height: 400,
  canvas,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      debug: true
    }
  },
  scene: [
    Menu,
    MapMenu,
    MapOne
  ]
};

const game = new Game(config);
