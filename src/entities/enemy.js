import Phaser from 'phaser';

class Enemy extends Phaser.GameObjects.PathFollower {
    constructor(scene, path, x, y, texture){
        super(scene, path, x, y, texture);
        this.scene   = scene;
        this.texture = texture;
        
        scene.add.existing(this);
        scene.physics.add.existing(this);


        this.init();
        this.health;
    }

    init(){
        
    }

    update(){

    }

}

export default Enemy;