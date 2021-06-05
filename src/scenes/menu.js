import {Scene} from 'phaser';
import BtnSprite from '../entities/Button';


class Menu extends Scene {



    constructor(){
        super('menu');
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
        //go to map select, play button click
        const clicked = new Audio('assets/Menu/Audio/rollover1.ogg')
        clicked.play();
        this.scene.switch('mapSelect')
        
    }

    // won't need quit button for browser game
    quit = () => {
        window.close();
    }
}

export default Menu;
