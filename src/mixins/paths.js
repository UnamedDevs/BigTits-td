import Phaser from 'phaser';


export const createRockPath = () => {
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

export const createProtoPath = () => {
    let path = new Phaser.Curves.Path(165, 34);

    path.lineTo(165, 158);
    path.lineTo(403, 158);
    path.lineTo(403, 65);
    path.lineTo(630, 65);
    path.lineTo(630, 323);
    path.lineTo(463, 323);
    path.lineTo(463, 250);
    path.lineTo(230,250);
    path.lineTo(230, 400);

    return path
}
