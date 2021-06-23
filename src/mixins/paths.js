import Phaser from 'phaser';


export const createDesertPath = () => {
    let path = new Phaser.Curves.Path(0,120);

    path.lineTo(255, 120);
    path.lineTo(255, 80);
    path.lineTo(680, 80);
    path.lineTo(680, 290);
    path.lineTo(460, 290);
    path.lineTo(460, 240);
    path.lineTo(270, 240);
    path.lineTo(270, 370);
    path.lineTo(270, 370);

    return path
}

export const createIcePath = () => {
    let path = new Phaser.Curves.Path(0, 160);

    path.lineTo(160, 160);
    path.lineTo(160, 240);
    path.lineTo(70, 240);
    path.lineTo(70, 325);
    path.lineTo(640, 325);
    path.lineTo(640, 120);
    path.lineTo(500, 120);
    path.lineTo(500, 0);

    return path
}

export const createLushPath = () => {
    let path = new Phaser.Curves.Path(120, 0);

    path.lineTo(120,290);
    path.lineTo(310, 290);
    path.lineTo(310, 160);
    path.lineTo(220, 160);
    path.lineTo(220, 80);
    path.lineTo(445, 80);
    path.lineTo(445, 240);
    path.lineTo(640, 240);
    path.lineTo(640, 0);

    return path
}