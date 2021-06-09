import Phaser from 'phaser';

export default class Projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
    }

    fire(x, y){
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocityY(-300); // can change to target sprite
    }

    // change for collisony
    preUpdate(time, delta){
        super.preUpdate(time, delta);

        if(this.y <=-32){
            this.setActive(false);
            this.setVisible(false);
        }
    }
}