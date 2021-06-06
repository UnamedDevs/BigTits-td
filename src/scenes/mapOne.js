import Phaser from 'phaser';
import initAnims from '../entities/anims';
import Enemy from '../entities/enemy';
import Tower from '../entities/tower';


class MapOne extends Phaser.Scene {

    constructor(){
        super('mapOne');


        this.enemySpeed = 50;
        this.slime;
        this.skelly;
        this.path;
        this.follower;
        this.totalEnemies = 5;
    }


    create(){
        //background
        this.add.image(0, 0, 'map').setOrigin(0);
        
        //Towers
        let tower = new Tower(this, 230, 200, 'lightningTower').setScale(0.2); 
        
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

        //testing enemy class
        this.skelly = new Enemy(this, this.path, 20, 75, 'skelly');
        this.skelly.startFollow({
            duration: 20000,
            onComplete: () => {
                this.skelly.destroy()
            }
        })
    }   

    update(){
        if(this.skelly.anims !== undefined){
            this.skelly.anims.play('skelly move', true);
        }
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