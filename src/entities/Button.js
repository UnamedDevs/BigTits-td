import Phaser from 'phaser';

export class BtnSprite extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, text, texture, secondTexture, callback, optionalArg ){
        super(scene, x, y, texture);
        // Button Text
        this.text = text
        this.scene.add.existing(this)
        this.text = this.setText()

        //Button Event
        this.setInteractive({useHandCursos: true})
            .on('pointerover', () => { this.setTexture(secondTexture)
            this.text.setStyle({fill:'green'}) })
            .on('pointerout', () => { this.setTexture(texture)
            this.text.setStyle({fill:'white'}) })
            .on('pointerdown', () => { callback() })

    }

    setText(){
        let text = this.scene.add.text(0,0, this.text, {font: '4em Ariel', fill: 'white'}).setOrigin(0.5);
        text.setX( this.getCenter().x)
        text.setY( this.getCenter().y)

        return text;
    }

}

export class Button extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, text, callback ){
        super(scene, x, y, text);
        // Button Text
        this.setTexture('static')
        this.text = text
        this.scene.add.existing(this)
        this.text = this.setText().setScrollFactor(0,0);

        //Button Event
        this.setInteractive({useHandCursos: true})
            .on('pointerover', () => { this.setTexture('hover')
            this.text.setStyle({fill:'blue'}) })
            .on('pointerout', () => { this.setTexture('static')
            this.text.setStyle({fill:'white'}) })
            .on('pointerdown', () => { callback() })

    }

    setText(){
        let text = this.scene.add.text(0,0, this.text, {font: '4em Ariel', fill: 'white'}).setOrigin(0.5);
        text.setX( this.getCenter().x)
        text.setY( this.getCenter().y)

        return text;
    }

}

export class ArrowButton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, text, callback ){
        super(scene, x, y, text);
        // Button Text
        this.setTexture('left')
        this.text = text
        this.scene.add.existing(this)
        this.text = this.setText().setScrollFactor(0,0);

        //Button Event
        this.setInteractive({useHandCursos: true})
            .on('pointerover', () => { this.setTexture('left')
            this.text.setStyle({fill:'blue'}) })
            .on('pointerout', () => { this.setTexture('left')
            this.text.setStyle({fill:'white'}) })
            .on('pointerdown', () => { callback() })

    }

    setText(){
        let text = this.scene.add.text(0,0, this.text, {font: '4em Ariel', fill: 'white'}).setOrigin(0.5);
        text.setX( this.getCenter().x)
        text.setY( this.getCenter().y)

        return text;
    }

}

export class Xbutton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, text, callback ){
        super(scene, x, y, text);
        // Button Text
        this.setTexture('cross')
        this.scene.add.existing(this)

        //Button Event
        this.setInteractive({useHandCursos: true})
            .on('pointerdown', () => { callback() })

    }

}