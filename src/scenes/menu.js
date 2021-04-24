import {Scene} from 'phaser';
import BtnSprite from '../modules/Button';
import MapMenu from './mapSelect';


class Menu extends Scene {



    constructor(){
        super('menu');
    }

    preload(){
        this.load.image('background', 'assets/Menu/background.jpg');
        this.load.image('hover-btn', 'assets/Menu/PNG/green_button00.png');
        this.load.image('static-btn', 'assets/Menu/PNG/green_button01.png');
    }

    create(){
        //background
        const background =this.add.image(0, 0, 'background').setOrigin(0,0)
        background.setScale(0.6)
        //Center (x, y) 
        const centerX = this.cameras.main.centerX
        const centeryY = this.cameras.main.centerY

        //got textures changing on hover working next add callback functions
        const play = this.add.existing( new BtnSprite(this, centerX - 200 , centeryY + 50, 'Play','static-btn', 'hover-btn', this.onStart ))
        const quit = this.add.existing( new BtnSprite(this, centerX + 200 , centeryY + 50,  'Quit','static-btn', 'hover-btn', this.quit ))
        
        quit.text.setStyle({ fill: 'blue'})

        const banner = this.add.text(centerX - 200 , centeryY - 100, 'Space Invaders')
                           .setStyle({
                               font:'6em Georgia',
                               fill:'Green'
                           })
        
        
     }
    
    onStart =() => {
        const clicked = new Audio('assets/Menu/Bonus/rollover1.ogg')
        clicked.play();
        this.scene.switch('mapSelect')
        
    }

    // won't need quit button for browser game
    quit = () => {
        window.close();
    }
}

export default Menu;
