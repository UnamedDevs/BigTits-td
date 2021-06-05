import Phaser from 'phaser';

class Enemy extends Phaser.GameObjects.PathFollower {
    constructor(scene, path, x, y){
        super(scene, path, x, y);
        this.health;

    }

}

export default Enemy;