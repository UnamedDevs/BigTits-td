import Phaser from 'phaser';

export default class Tower extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    


}