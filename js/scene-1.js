
class Scene1 extends BaseScene {
    constructor() {
        super({ key: 'Scene1', active: true })
        
        this.passwordsData = [
            {
                text: 'q1w2e3r4',
                valid: true,
                x: 670,
                y: 220
            },
            {
                text: '_evl081',
                valid: false,
                x: 270,
                y: 200
            },
            {
                text: 'sandwich',
                valid: false,
                x: 300,
                y: 500
            },
            {
                text: '27smn13a',
                valid: true,
                x: 150,
                y: 350
            },
            {
                text: 'letm31in',
                valid: true,
                x: 60,
                y: 50
            },
        ];

        this.obstaclesObj = [
            {
                x: 200,
                y: 200
            },
            {
                x: 500,
                y: 80
            },
            {
                x: 700,
                y: 500
            }
        ]
        
        this.enemies = [
            {
                x: 700,
                y: 100,
                speed: 120
            }
        ]
    }

    goToNextScene() {
        let spawned = new Scene2Desc();
        this.scene.add('Scene2Desc', spawned, true);
        this.scene.setActive(false);
    }
}