import Phaser from 'phaser';
import BtnSprite from '../modules/Button';

export default class MapMenu extends Phaser.Scene{

    constructor(){
        super('mapSelect')
    }

    create(){
        //background
        this.add.image(0,0,'menu_background').setOrigin(0,0).setScale(0.5);

        //screen center
        const centerX = this.cameras.main.centerX
        const centerY = this.cameras.main.centerY

        //Btn 
        const backBtn = this.add.existing(new BtnSprite(this, 100, 50, 'back', 'static', 'hover', this.goBack) )
        //left right btns
        const leftBtn = this.add.existing(new BtnSprite(this, 50, centerY, '<', 'left','left', null ))
        const rightBtn = this.add.existing(new BtnSprite(this, 850, centerY, '>', 'right','right', null ))
        // map adjust or create new class for map sprites 
        const map1 = this.add.existing(new BtnSprite(this, centerX, centerY,'','map','map', this.toNextMap) )
        map1.setScale(0.4)
    }

    goBack = () => {
        //go back to menu
        const clicked = new Audio('assets/Menu/Audio/rollover1.ogg')
        clicked.play();
        this.scene.switch('menu');
    }

    toNextMap = () => {
        // to map one
        this.scene.switch('mapOne')
    }



    


}