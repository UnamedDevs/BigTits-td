import Phaser from 'phaser';
import {BtnSprite, ArrowButton, Button } from '../entities/Button';

export default class MapMenu extends Phaser.Scene{

    constructor(){
        super('mapSelect');
        this.counter = 0;
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
        
        const map1 = new BtnSprite(this, centerX, centerY,'','desertPlanet','desertPlanet', () => {this.toNextMap('desertMap')}  )
        map1.setScale(0.3);
        const map2 = new BtnSprite(this, centerX + 600, centerY, '', 'icePlanet', 'icePlanet', () => {this.toNextMap('iceMap')} );
        map2.setScale(0.3);
        const map3 = new BtnSprite(this, centerX - 600, centerY, '', 'lushPlanet', 'lushPlanet', () => {this.toNextMap('lushMap')} );
        map3.setScale(0.3);
    }

    goBack = () => {
        //go back to menu
        const clicked = new Audio('assets/Menu/Audio/rollover1.ogg')
        clicked.play();
        this.scene.start('menu');
    }

    toNextMap = (map) => {
        this.counter = 0;
        let selectedMap = localStorage.setItem('map', map);
        let currentMap  = localStorage.getItem('map');
        
        if(this.scene.isSleeping('mapOne') && selectedMap === currentMap){
            this.scene.switch('mapOne');
        }else{
            this.scene.stop('mapOne');
            this.scene.start('mapOne');
        }
    }

    scrollLeft = () => {
        if(this.counter === 0 || this.counter > 0 ){
            this.cameras.main.scrollX -= 600;
            this.counter -=1
        }
    }

    scrollRight = () => {
        if(this.counter === 0 || this.counter < 0 ){
            this.cameras.main.scrollX += 600;
            this.counter += 1
        }
    }


}