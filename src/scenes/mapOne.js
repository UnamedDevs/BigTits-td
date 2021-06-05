import Phaser, {Scene} from 'phaser';
import initAnims from '../entities/anims';

class MapOne extends Phaser.Scene {

    constructor(){
        super('mapOne');


        this.enemySpeed = 50;
        this.slime;
        this.path;
        this.follower;
        this.totalEnemies = 5;
    }


    create(){
        //background
        this.add.image(0, 0, 'map').setOrigin(0);
        
        // initialize animations
        initAnims(this.anims)

        //path for enemies
        this.path = this.createPath();
        
        //testing follower
        this.follower = this.add.follower(this.path, 20, 75, 'slime');
        this.physics.add.existing(this.follower);
        this.follower.startFollow({
            duration: 10000,
            onComplete: () =>{
                this.follower.destroy()
            }
        })

    }   

    update(){
        if( this.follower.anims !== undefined ){
            this.follower.anims.play('slime move', true);
        }
    }

    createPath = () => {
        //creates a path
        let path = new Phaser.Curves.Path(20,75);
        //let path = this.add.path(20, 75);

        path.lineTo(170, 75);
        path.lineTo(170, 215);
        path.lineTo(70, 215);
        path.lineTo(70, 310);
        path.lineTo(510, 310);
        path.lineTo(510, 170);
        path.lineTo(360, 170);
        path.lineTo(360, 75);
        path.lineTo(660, 75);
        path.lineTo(660, 300);

        return path
    }

}

export default MapOne;

/**
    //this.slime = this.add.sprite(20, 75, 'slime');
    //this.physics.add.existing(this.slime);
    //this.physics.moveTo(this.slime, 660, 300, this.enemySpeed);
 */