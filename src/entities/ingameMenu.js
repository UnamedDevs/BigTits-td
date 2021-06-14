import Phaser from 'phaser';
import { Button } from './Button';

export default class InGameMenu extends Phaser.GameObjects.Container {
    constructor(scene, x, y){
        super(scene, x, y);
        
        scene.add.existing(this);

        const bg = new Phaser.Physics.Arcade.Image(scene, x, y, 'popup').setOrigin(0);
        bg.setDisplaySize(300,300);
        this.add(bg);

        this.setInteractive(new Phaser.Geom.Rectangle(x, y, bg.displayWidth, bg.displayHeight), Phaser.Geom.Rectangle.Contains).on('pointerdown', () => {
        const resume = new Button(scene, 80,150, 'resume', null)
        this.add(resume);
        
        })

    }
}

/**
const bitbg = new Phaser.Physics.Arcade.Image(this, 100,100, 'menu_background');
this.add.existing(bitbg)
bitbg.setDisplaySize(800,600)

const container = new Phaser.GameObjects.Container(this, 300, 100);
this.add.existing(container)
container.setSize(bitbg.width,bitbg.height).setVisible(true)
container.add(bitbg).setScale(0.3)

container.setInteractive().on('pointerover', () => {
    console.log('over me')
}).on('pointerdown', () => {
    console.log('fuck u')
})


*/
