import Phaser from 'phaser';

class Preload extends Phaser.Scene {
    constructor(){
        super('Preload');
    }

    preload(){
        // Menu
        this.load.image('background', 'assets/Menu/background.jpg');
        this.load.image('hover-btn', 'assets/Menu/PNG/green_button00.png');
        this.load.image('static-btn', 'assets/Menu/PNG/green_button01.png');
        this.load.image('menu_background', 'assets/Menu/menu_bg.jpg');

        //button images
        this.load.image('hover', 'assets/Menu/PNG/green_button00.png');
        this.load.image('static', 'assets/Menu/PNG/green_button01.png');
        this.load.image('left', 'assets/Menu/PNG/green_sliderLeft.png');
        this.load.image('right', 'assets/Menu/PNG/green_sliderRight.png');

        // Map
        this.load.image('map', 'assets/Maps/Map_Rock.png');
        this.load.image('tower', 'assets/Towers/towerDefense_tile205.png');

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