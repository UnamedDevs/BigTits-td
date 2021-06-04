import Phaser, {Scene} from 'phaser';


class MapOne extends Phaser.Scene {

    constructor(){
        super('mapOne');
        this.enemySpeed = 25000;
        this.follower;

    }


    create(){
        //background
        this.add.image(0, 0, 'map').setOrigin(0);
        
        // enemy animations
        this.anims.create({
            key:'walk',
            frames: this.anims.generateFrameNumbers('slime', {start:0, end:9}),
            frameRate: 5,
            repeat: -1
        })

        const path = this.createPath();
        this.follower = this.add.follower(path, 20, 75, 'slime').startFollow({
            duration: this.enemySpeed,
            loop:-1
        })

    }

    update(){
        let moving = this.follower.pathTween.getValue();
        
        if(moving){
            this.follower.anims.play('walk', true);
        }
    }

    createPath = () => {
        //creates a path
        let path = this.add.path(20, 75);
        path.lineTo(170, 75);
        path.lineTo(170, 215);
        path.lineTo(70, 215);
        path.lineTo(70, 310);
        path.lineTo(510, 310);
        path.lineTo(510, 170);
        path.lineTo(360, 170);
        path.lineTo(360, 75);
        path.lineTo(660, 75);
        path.lineTo(660, 400);

        return path
    }
}

export default MapOne;
