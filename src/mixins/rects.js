import Phaser from "phaser"

export const desertRects = (scene) => {
    const rec1 = new Phaser.GameObjects.Rectangle(scene, 15, 120, 550, 30, 'green', 0);
    const rec2 = new Phaser.GameObjects.Rectangle(scene, 480, 80, 470, 30, 'green', 0);
    const rec3 = new Phaser.GameObjects.Rectangle(scene, 690, 180, 40, 240, 'green', 0);
    const rec4 = new Phaser.GameObjects.Rectangle(scene, 550, 285, 250, 30, 'green', 0);
    const rec5 = new Phaser.GameObjects.Rectangle(scene, 350, 250, 220, 30, 'green', 0);
    const rec6 = new Phaser.GameObjects.Rectangle(scene, 260, 310, 30, 150, 'green', 0);
    
    scene.add.existing(rec1);
    scene.add.existing(rec2);
    scene.add.existing(rec3);
    scene.add.existing(rec4);
    scene.add.existing(rec5);
    scene.add.existing(rec6);

    return [rec1, rec2, rec3, rec4, rec5, rec6];
}