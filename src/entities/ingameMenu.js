import Phaser from 'phaser';
import { Xbutton, Button } from './Button';

export default class InGameMenu extends Phaser.GameObjects.Container {
    constructor(scene, x, y){
        super(scene, x, y);
        
        scene.add.existing(this);

        //background for container
        const bg = new Phaser.Physics.Arcade.Image(scene, x, y, 'popup').setOrigin(0);
        bg.setDisplaySize(300,300);
        this.add(bg);

        //button for resuming gameplay
        const resumeBtn = new Phaser.Physics.Arcade.Image(scene, x + 50, y + 90, 'static')
        .setOrigin(0)
        .setAlpha(0.4);

        resumeBtn.setInteractive().on('pointerover', () => {
            resumeBtn.setTexture('hover');
        }).on('pointerout', () => {
            resumeBtn.setTexture('static')
        }).on('pointerdown', () => {
            this.setVisible(false);
        })
        this.add(resumeBtn);

        const resumeTxt = new Phaser.GameObjects.Text(scene, resumeBtn.getCenter().x, resumeBtn.getCenter().y, 'Resume', {fontSize: 32}).setOrigin(0.5);
        this.add(resumeTxt);

        //quit button
        const quitBtn = new Phaser.Physics.Arcade.Image(scene, x + 50, y + 160, 'static')
        .setOrigin(0)
        .setAlpha(0.4);

        quitBtn.setInteractive().on('pointerover', () => {
            quitBtn.setTexture('hover');
        }).on('pointerout', () => {
            quitBtn.setTexture('static')
        }).on('pointerup', () => {
            this.scene.scene.start('menu')
        })
        this.add(quitBtn);

        const quitTxt = new Phaser.GameObjects.Text(scene, quitBtn.getCenter().x, quitBtn.getCenter().y, 'Quit', {fontSize: 32}).setOrigin(0.5);
        this.add(quitTxt);
        

        //enable dragging of container
        this.setInteractive(new Phaser.Geom.Rectangle(x, y, bg.displayWidth, bg.displayHeight), Phaser.Geom.Rectangle.Contains).on('pointerdown', () => {
        });

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

export class Button extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, text, callback ){
        super(scene, x, y, text);
        // Button Text
        this.setTexture('static')
        this.text = text
        this.scene.add.existing(this)

        this.txt = this.scene.add.text(0,0, this.text, {font: '4em Ariel', fill: 'white'}).setOrigin(0.5);
        this.txt.setX( this.getCenter().x)
            .setY( this.getCenter().y)
            .setScrollFactor(0,0);
        //this.text = this.setText().setScrollFactor(0,0);

        //Button Event
        this.setInteractive({useHandCursor: true})
            .on('pointerover', () => { this.setTexture('hover')
            this.txt.setStyle({fill:'blue'}) })
            .on('pointerout', () => { this.setTexture('static')
            this.txt.setStyle({fill:'white'}) })
            .on('pointerdown', () => { callback() })

    }

}


*/
