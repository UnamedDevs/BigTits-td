import Phaser from 'phaser';
import initAnims from '../entities/anims';
import Tower from '../entities/tower';
import Enemy from '../entities/enemy';
import enemyList from '../mixins/enemiesList';
import {createDesertPath, createIcePath, createLushPath } from '../mixins/paths';
import {Xbutton} from '../entities/Button';

class MapOne extends Phaser.Scene {

    constructor(){
        super('mapOne');

        this.enemyArray = [];
        this.eList      = enemyList;
        this.round      = 0;
        this.nextRound  = 1;
        this.gameInfo   = {
            speed : 10000,
            limit : 5,
        };
    }

    init(data){
        this.selectedMap = localStorage.getItem('map');
        localStorage.getItem('enemyArray') !== null ?
            this.cool = localStorage.getItem('enemyArray') :
            this.cool = 'not cool';
    }

    create(){
        //---BACKGROUND---
        this.background = this.add.image(0, 0, this.selectedMap)
            .setOrigin(0)
            .setScale(0.4);
        //---INITIALIZE ANIMATIONS---
        initAnims(this.anims)
        //---PAUSE MENU
        this.menuBtn = new Xbutton(this, 20, 20, '', () => {
            this.scene.switch('pmenu');
        });
        //---PLAY PAUSE BUTTTON---
        // have two variables one for round and one check for end of round when 
        //play is clicked if round is over spawn next wave of enemies else speed up
        //enemies... rework later into enemy class
        this.playPause = this.add.image(760, 380, 'playPause');
        this.playPause.setInteractive({useHandCursor: true}).on('pointerdown', () => {
            if(this.round !== this.nextRound){
                this.round +=1;
                this.time.addEvent({
                    delay: 500,
                    callback: () => {
                        this.gameInfo.limit--;
                        this.spawnRandom(this.playerHealth)
                    },
                    callbackScope: this,
                    loop: true
                    }); 
            this.playPause.disableInteractive();
            }
        });    
        //---PLAYER HEALTH---
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
        //---MAP PATHING---
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
        };
        //---TURRET SELECTOR---
        let selectedTower;
        const aoeTower   = this.add.image(800, 70, 'aoeTower');
        const laserTower = this.add.image(800, 160, 'laserTower').setScale(0.8);
        const frostTower = this.add.image(800, 260, 'frostTower').setScale(0.6);
        const lightningTower = this.add.image(800, 340, 'lightningTower').setScale(0.6);

        [aoeTower, laserTower, frostTower, lightningTower].forEach( tower => {
            tower.setInteractive({setCursors:true}).on('pointerdown', () => selectedTower = tower.texture.key)
        })


        this.towers = this.add.group({classType: Tower, runChildUpdate: true});
        this.background.setInteractive().on('pointerdown', () => {
            console.log(selectedTower);
            let tower;
            let children = this.towers.getChildren();
            selectedTower ? tower = this.towers.get() : null ;
            if(tower){
                children.forEach( child => {
                    console.log(child)
                    console.log(this.input.x === child.body.x);
                })
                console.log(this.input.x === tower.body.x)
                tower.setOrigin(0.5, 0.5);
                tower.setTexture(selectedTower);
                tower.setActive(true);
                tower.setVisible(true);
                tower.placeTower(this.input.x, this.input.y);
            }
        })

    }

    //---- UPDATE-------------------
    update(time, delta){
        if(this.gameInfo.limit == 0){
            this.nextRound += 1;
            this.gameInfo.limit = 10;
            this.time.removeAllEvents();
            this.playPause.setInteractive();
        }
        else if( this.playerHealth.data.get('health') === 95 ){
            this.scene.start('gameOver');
        }

    }
    
    spawnRandom(adjustPlayerHealthOnEnd){
        let rnd = Math.floor(Math.random() * this.eList.length)
        let rndEnemy = new Enemy(this, this.path, this.path.curves[0].p0.x, this.path.curves[0].p0.y, this.eList[rnd].texture);
        rndEnemy.startFollow({
            duration: this.gameInfo.speed + rnd,
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

/**
    //---TOWERS
    let tower = new Tower(this, 230, 200, 'pp')
    .setOrigin(0)
    .setFlipX(true)
    .setScale(0.05)   

        this.roundEvent = this.time.addEvent({
        delay: 500,
        callback: () => {
            this.gameInfo.limit--;
            this.enemyArray.push(this.spawnRandom(this.playerHealth));
        },
        callbackScope: this,
        loop: true
        }); 
**/