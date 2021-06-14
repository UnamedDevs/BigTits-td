import Phaser from 'phaser';
import initAnims from '../entities/anims';
import Enemy from '../entities/enemy';
import Tower from '../entities/tower';
import enemyList from '../mixins/enemiesList';
import {createRockPath, createProtoPath} from '../mixins/paths';
import {Xbutton} from '../entities/Button';
import InGameMenu from '../entities/ingameMenu';


class MapOne extends Phaser.Scene {

    constructor(){
        super('mapOne');

        this.enemySpeed = 10000;
        this.enemyLimit = 5;
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
        this.add.image(0, 0, this.selectedMap).setOrigin(0);
        //---
        this.pmenu  = this.pauseMenu().setVisible(false);
        this.menuBtn = new Xbutton(this, 20, 20, '', () => {
            this.pmenu.visible === false ? this.pmenu.setVisible(true) : this.pmenu.setVisible(false)
        });

        //---PLAYER HEALTH----
        this.playerHealth = this.playerInfo();

        let text = this.add.text(100, 25, '', {font:'16px'});
        text.setText(this.playerHealth.data.get('health'));
        this.playerHealth.on('changedata-health', (obj, val )=> {
            text.setText([val]);
        })
        //------------
        //Towers
        let tower = new Tower(this, 230, 200, 'pp')
            .setFlipX(true)
            .setScale(0.2);      
        // initialize animations
        initAnims(this.anims)
        //path for enemies
        this.selectedMap === 'map_rock' ? this.path = createRockPath() : this.path = createProtoPath();
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

    spawnRandom(adjustPlayerHealthOnEnd){
        let rnd = Math.floor(Math.random() * this.eList.length)
        let rndEnemy = new Enemy(this, this.path, this.path.curves[0].p0.x, this.path.curves[0].p0.y, this.eList[rnd].texture);
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

    pauseMenu() {
        const popup = new InGameMenu(this, 120, 30);
        this.input.setDraggable(popup);
        this.input.on('drag', (pointer, obj, x, y)=> {
            obj.x = x;
            obj.y = y;
        });
        return popup;
    }

}

export default MapOne;

