export default (anims) => {
    anims.create({
        key:'slime move',
        frames: anims.generateFrameNumbers('slime', {start:0, end:8}),
        frameRate: 5,
        repeat: 0
    });

    anims.create({
        key:'skelly move',
        frames: anims.generateFrameNumbers('skelly', {start:26, end:37}),
        frameRate: 5,
        repeat: 0
    });
    
    anims.create({
        key:'laser blast',
        frames: anims.generateFrameNumbers('laser', {start:0, end:6}),
        frameRate: 5,
        repeat: 0
    });
}