import Phaser from 'phaser';
import initAnims from '../entities/anims';
import Enemy from '../entities/enemy';
import Tower from '../entities/tower';
import enemyList from '../entities/enemiesList';


class MapOne extends Phaser.Scene {

    constructor(){
        super('mapOne');

        this.start = {x: 20, y: 75};
        this.enemySpeed = 20000;
        this.enemyLimit = 10;
        this.playerHealth;
        this.round;
        this.path;
        this.slime;
        this.skelly;
        this.follower;
        this.eList = enemyList;

    }


    create(){
        //background
        this.add.image(0, 0, 'map').setOrigin(0);

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
            delay: 1500,
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
        }).play(this.eList[rnd].anim, true)

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


//projectile code
/**
        this.laser = this.physics.add.group({
            defaultKey:'laser',
            maxSize: 4
        })
        
        this.physics.add.existing(this.laser);

        this.input.on('pointerdown', (e)=>{
            let beam = this.laser.get(e.x, e.y)
            console.log('uhhh')
            if(beam){
                beam.setActive(true)
                beam.setVisible(true);
                beam.body.velocity.y = -200;
            }  
          }, this)
        
    // in update
            this.laser.children.each( (beam)=>{
            if(beam.active){
                if(beam.y < 0){
                    beam.setActive(false);
                }
            }
        })

        //testing follower
        this.follower = this.add.follower(this.path, 20, 75, 'slime');
        this.physics.add.existing(this.follower);
        this.follower.startFollow({
            duration: 10000,
            onComplete: () =>{
                this.follower.destroy()
            }
        }).play('slime move', true);

        //testing enemy class
        this.skelly = new Enemy(this, this.path, 20, 75, 'skelly');
        this.skelly.startFollow({
            duration: 20000,
            onComplete: () => {
                this.skelly.destroy()
            }
        }).play('skelly move', true);

        //Collision Detection
        this.physics.add.collider(tower, this.skelly, ()=>{
            console.log('we collided <3');
        })

 */
