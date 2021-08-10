import Phaser from 'phaser';

export default class Tower extends Phaser.Physics.Arcade.Sprite {
    constructor(scene){
        super(scene);

        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    placeTower = (x, y) => {
        this.x = x
        this.y = y
    }


}