import {Scene} from 'phaser';
import {Button} from '../entities/Button';


class Menu extends Scene {
   constructor(){
        super('menu');
    }


    create(){
        //background
        const background =this.add.image(0, 0, 'background').setOrigin(0,0)
        background.setScale(0.3)
        //Center (x, y) 
        const centerX = this.cameras.main.centerX
        const centeryY = this.cameras.main.centerY

        //got textures changing on hover working next add callback functions
        const play = new Button(this, centerX - 200 , centeryY + 50, 'Play', this.onStart )
        const quit = new Button(this, centerX + 200 , centeryY + 50,  'Quit', this.quit )
        
        quit.text.setStyle({ fill: 'blue'})

        const banner = this.add.text(centerX - 200 , centeryY - 70, 'Waifu Defenders')
                           .setStyle({
                               font:'6em Georgia',
                               fill:'Purple'
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
