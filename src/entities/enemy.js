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
        this.follower = {t:0, vec: new Phaser.Math.Vector2()};
    }

    init(){
        
    }

    update(time, delta){
        
    }

    startPath () {
        this.follower.t = 0;

        path.getPoint(this.follower.t, this.follower.vec);

        this.setPosition(this.follower.vec.x, this.follower.vec.y);

    }

}

export default Enemy;