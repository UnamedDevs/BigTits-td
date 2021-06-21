import Phaser from 'phaser';

class Preload extends Phaser.Scene {
    constructor(){
        super('Preload');
    }

    preload(){
        // Menu
        this.load.image('background', 'assets/Menu/waifu_bg.png');
        this.load.image('menu_background', 'assets/Menu/waifu_3.jpeg');
        this.load.image('pauseMenu', 'assets/Menu/waifu_4.jpg');
        this.load.image('heart', 'assets/Menu/heart.png');

        //button images
        this.load.image('hover', 'assets/Menu/PNG/blue_button04.png');
        this.load.image('static', 'assets/Menu/PNG/blue_button05.png');
        this.load.image('left', 'assets/Menu/PNG/blue_sliderLeft.png');
        this.load.image('settings', 'assets/Menu/PNG/settings.png');
        this.load.image('playPause', 'assets/Menu/PNG/pause-play-button.png');

        // Map
        this.load.image('desertPlanet', 'assets/Maps/desertPlanet.png');
        this.load.image('desertMap', 'assets/Maps/desertMap.png');
        this.load.image('icePlanet', 'assets/Maps/icePlanet.png');
        this.load.image('iceMap', 'assets/Maps/IceMap.png');
        this.load.image('lushPlanet', 'assets/Maps/lushPlanet.png');
        this.load.image('lushMap', 'assets/Maps/lushMap.png');

        //Entities
        this.load.spritesheet('slime', 'assets/enemies/slime-sheet.png', {
            frameWidth: 32,
            frameHeight: 25,
        })
        this.load.spritesheet('skelly', 'assets/enemies/skelly.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        //Towers?
        this.load.image('aoeTower', 'assets/Towers/aoeTower.png');
        this.load.image('frostTower', 'assets/Towers/frostTower.png');
        this.load.image('laserTower', 'assets/Towers/laserTower.png');
        this.load.image('lightningTower', 'assets/Towers/lightningTower.png');

        //Projectiles
        this.load.spritesheet('laser', 'assets/Projectiles/laser.png', {
            frameWidth: 256,
            frameHeight: 64
        })
    }

    create(){
        this.scene.start('menu');
    }
}

export default Preload;