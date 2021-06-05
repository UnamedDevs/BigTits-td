export default (anims) => {
    anims.create({
        key:'slime move',
        frames: anims.generateFrameNumbers('slime', {start:0, end:8}),
        frameRate: 5,
        repeat: 0
    });

    anims.create({
        key:'skelly move',
        frames: anims.generateFrameNumbers('skelly', {start:27, end:38}),
        frameRate: 5,
        repeat: 0
    });
    
}