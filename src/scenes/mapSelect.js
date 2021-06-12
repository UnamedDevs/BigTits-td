import Phaser from 'phaser';
import {BtnSprite, ArrowButton, Button } from '../entities/Button';

export default class MapMenu extends Phaser.Scene{

    constructor(){
        super('mapSelect');
    }

    create(){
        //background
        this.add.image(0,0,'menu_background')
            .setScrollFactor(0,0)
            .setOrigin(0,0)
            .setScale(0.5);

        //screen center
        const centerX = this.cameras.main.centerX
        const centerY = this.cameras.main.centerY
        

        //Btn 
        const backBtn = new Button(this, 100, 50, 'back', this.goBack).setScrollFactor(0,0)
        const leftBtn = new ArrowButton(this, 50, centerY, '<', this.scrollLeft ).setScrollFactor(0,0);
        const rightBtn = new ArrowButton(this, 850, centerY, '>', this.scrollRight )
            .setScrollFactor(0,0)
            .setFlipX(true)
        
        // map adjust or create new class for map sprites 
        const map1 = new BtnSprite(this, centerX, centerY,'','map_rock','map_rock', () => {this.toNextMap('map_rock')}  )
        map1.setScale(0.3);
        const map2 = new BtnSprite(this, centerX + 600, centerY, '', 'proto_map', 'proto_map', () => {this.toNextMap('proto_map')} );
        map2.setScale(0.3);
    }

    goBack = () => {
        //go back to menu
        const clicked = new Audio('assets/Menu/Audio/rollover1.ogg')
        clicked.play();
        this.scene.switch('menu');
    }

    toNextMap = (map) => {
        this.scene.pause();
        this.scene.start('mapOne',{map:map});
    }

    scrollLeft = () => {
        this.cameras.main.scrollX -= 600;
    }

    scrollRight = () => {
        this.cameras.main.scrollX += 600;
    }


}