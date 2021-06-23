import Phaser from 'phaser';
import initAnims from '../entities/anims';
import Enemy from '../entities/enemy';
import enemyList from '../mixins/enemiesList';
import {createDesertPath, createIcePath, createLushPath } from '../mixins/paths';
import {Xbutton} from '../entities/Button';

class MapOne extends Phaser.Scene {

    constructor(){
        super('mapOne');

        this.enemySpeed = 10000;
        this.enemyLimit = 5;
        this.playerHealth;
        this.round;
        this.enemyArray = [];
        this.path;
        this.slime;
        this.skelly;
        this.follower;
        this.eList = enemyList;
    }

    init(data){
        this.selectedMap = localStorage.getItem('map');
        localStorage.getItem('enemyArray') !== null ?
            this.cool = localStorage.getItem('enemyArray') :
            this.cool = 'not cool';
    }

    create(){
        //---BACKGROUND
        this.add.image(0, 0, this.selectedMap)
            .setOrigin(0)
            .setScale(0.4);
        //---INITIALIZE ANIMATIONS
        initAnims(this.anims)
        //---PAUSE MENU
        this.menuBtn = new Xbutton(this, 20, 20, '', () => {
            this.scene.switch('pmenu');
        });
        //---PLAY PAUSE BUTTTON
        this.playPause = this.add.image(760, 380, 'playPause');
        this.playPause.setInteractive({useHandCursor: true}).on('pointerdown', () => {
            this.enemyArray.forEach( sprite => {
                sprite.isFollowing() ? sprite.pauseFollow() : sprite.resumeFollow();
            })
        });    
        //---PLAYER HEALTH----
        this.playerHealth = this.playerInfo();
        let text = this.add.text(100, 25, '', {font:'16px'});
        text.setText(this.playerHealth.data.get('health'));
        this.playerHealth.on('changedata-health', (obj, val )=> {
            text.setText([val]);
        });
        //--CURRENT ROUND---
        this.roundText    = this.add.text(135, 2, 'Round', {fontSize:'16px'});
        this.currentRound = this.add.text(140, 15, '01', {fontSize:'32px'});
        this.currentRound.setData({currRnd: 1});
        //---MAP PATHING
        switch(this.selectedMap){
            case 'desertMap':
                this.path = createDesertPath();
                break
            case 'iceMap':
                this.path = createIcePath();
                break
            case 'lushMap':
                this.path = createLushPath();
                break
        }
        //---DELAY SPAWN LOOP
        this.round = this.time.addEvent({
            delay: 500,
            callback: () => {
                this.enemyLimit--;
                this.enemyArray.push(this.spawnRandom(this.playerHealth));
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

    spawnRandom(adjustPlayerHealthOnEnd){
        let rnd = Math.floor(Math.random() * this.eList.length)
        let rndEnemy = new Enemy(this, this.path, this.path.curves[0].p0.x, this.path.curves[0].p0.y, this.eList[rnd].texture);
        rndEnemy.startFollow({
            duration: this.enemySpeed + rnd,
            onComplete: () => {
                rndEnemy.destroy();
                adjustPlayerHealthOnEnd.data.values.health -= 1;
                this.enemyArray.pop()
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

/**
    //---TOWERS
    let tower = new Tower(this, 230, 200, 'pp')
    .setOrigin(0)
    .setFlipX(true)
    .setScale(0.05)   
**/