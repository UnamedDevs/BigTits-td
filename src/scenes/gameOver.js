import Phaser from 'phaser';
import {Button} from '../entities/Button';

class GameOver extends Phaser.Scene {
    constructor(){
        super('gameOver');
    }

    create () {
        const X = this.cameras.main.centerX;
        const Y = this.cameras.main.centerY;

        this.cameras.main.setBackgroundColor('black');
        this.add.text(X - 175, Y -75, 'Game Over!', {fontSize: '64px'}).setOrigin(0)

        const restart = new Button(this, X, Y + 20, 'Restart', () => {
            this.scene.start('mapOne')
        });
        
        const menu   = new Button(this, X, Y + 75, 'Quit', () => {
            this.scene.start('menu');
        });


        
    }


}

export default GameOver;