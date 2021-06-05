import Phaser from 'phaser';

class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y);
        this.health;

    }

    selfDestruct(){
        this.health === 0 ? this.destroy : null;
    }
}

export default Enemy;