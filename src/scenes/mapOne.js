import Phaser from 'phaser';
import initAnims from '../entities/anims';
import Enemy from '../entities/enemy';
import Tower from '../entities/tower';
import enemyList from '../entities/enemiesList';


class MapOne extends Phaser.Scene {

    constructor(){
        super('mapOne');

        this.start = {x: 20, y: 75};
        this.enemySpeed = 10000;
        this.enemyLimit = 100;
        this.playerHealth;
        this.round;
        this.path;
        this.slime;
        this.skelly;
        this.follower;
        this.eList = enemyList;

    }

    init(data){
        this.selectedMap = data.map;
    }

    create(){
        //background
        console.log(this.selectedMap, 'selected map');
        this.add.image(0, 0, this.selectedMap).setOrigin(0);

        //---
        this.playerHealth = this.playerInfo();

        let text = this.add.text(100, 25, '', {font:'16px'});
        text.setText(this.playerHealth.data.get('health'));

        //working but not text updating correctly
        this.playerHealth.on('changedata-health', (obj, val )=> {
            text.setText([val]);
        })

        //Towers
        let tower = new Tower(this, 230, 200, 'lightningTower').setScale(0.2); 
        
        // initialize animations
        initAnims(this.anims)

        //path for enemies
        this.path = this.createPath();
        
        // delay enemy spawn and loop
        this.round = this.time.addEvent({
            delay: 500,
            callback: () => {
                this.enemyLimit--;
                let tmpDude = this.spawnRandom(this.playerHealth);
                this.physics.add.collider(tower, tmpDude, () =>{
                    console.log('hi')
                })
            },
            callbackScope: this,
            loop: true
        });
        

    }   

    update(time, delta){
        if(this.enemyLimit === 0 ){
            this.time.removeEvent(this.round);
        }

        if(this.playerHealth.data.values.health === 0){
            this.time.removeEvent(this.round);
            console.log('game over');
        }
    }

    createPath = () => {
        //creates a path
        let path = new Phaser.Curves.Path(20,75);

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

    spawnRandom(adjustPlayerHealthOnEnd){
        let rnd = Math.floor(Math.random() * this.eList.length)
        let rndEnemy = new Enemy(this, this.path, this.start.x, this.start.y, this.eList[rnd].texture);
        rndEnemy.startFollow({
            duration: this.enemySpeed + rnd,
            onComplete: () => {
                rndEnemy.destroy();
                adjustPlayerHealthOnEnd.data.values.health -= 1;
            }
        }).play(this.eList[rnd].anim, false)

        return rndEnemy;
    }

    playerInfo(){
        let playerHealth = this.add.image(100, 25, 'heart');
        playerHealth.setDataEnabled();
        playerHealth.data.set('health', 100);

        return playerHealth
    }

}

export default MapOne;

