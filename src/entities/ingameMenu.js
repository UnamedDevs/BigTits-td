import Phaser from 'phaser';

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
            this.scene.scene.start('menu');
        })
        this.add(quitBtn);

        const quitTxt = new Phaser.GameObjects.Text(scene, quitBtn.getCenter().x, quitBtn.getCenter().y, 'Quit', {fontSize: 32}).setOrigin(0.5);
        this.add(quitTxt);
        

        //enable dragging of container
        this.setInteractive(new Phaser.Geom.Rectangle(x, y, bg.displayWidth, bg.displayHeight), Phaser.Geom.Rectangle.Contains).on('pointerdown', () => {
        });

    }
}
