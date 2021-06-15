import Phaser from 'phaser';

class Preload extends Phaser.Scene {
    constructor(){
        super('Preload');
    }

    preload(){
        // Menu
        this.load.image('background', 'assets/Menu/waifu_bg.png');
        this.load.image('menu_background', 'assets/Menu/waifu_3.jpeg');
        this.load.image('popup', 'assets/Menu/waifu_2.jpg');
        this.load.image('heart', 'assets/Menu/heart.png');

        //button images
        this.load.image('hover', 'assets/Menu/PNG/blue_button04.png');
        this.load.image('static', 'assets/Menu/PNG/blue_button05.png');
        this.load.image('left', 'assets/Menu/PNG/blue_sliderLeft.png');
        this.load.image('cross', 'assets/Menu/PNG/blue_boxCross.png');

        // Map
        this.load.image('map_rock', 'assets/Maps/Map_Rock.png');
        this.load.image('proto_map', 'assets/Maps/protoMap.png');
        this.load.image('desertPlanet', 'assets/Maps/desertPlanet.png');
        this.load.image('icePlanet', 'assets/Maps/icePlanet.png');

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
        this.load.image('lightningTower', 'assets/Towers/lightningTower.png');
        this.load.image('pp', 'assets/Towers/ppTower.png');

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