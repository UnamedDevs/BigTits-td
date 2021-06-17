import Phaser from 'phaser';
import { Button } from '../entities/Button';

class PauseMenu extends Phaser.Scene {
    constructor(){
        super('pmenu');
        
    }

    create(){
        this.add.image(0, 0, 'pauseMenu')
        .setOrigin(0)
        .setScale(0.5);

        const Resume = new Button(this, 490, 200, 'Resume', () => {
            this.scene.start('mapOne')
        });

        const Quit = new Button(this, 490, 260, 'Quit', () => {
            this.scene.start('menu');
        });
    }
}


export default PauseMenu