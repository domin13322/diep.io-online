import { Direction, MOVE_VALUE, Keys, arrows } from "./constants.js";
export default class GameMechanics {
    constructor(player) {
        this.keysPressed = {};
        this.player = player;
    }
    handleKeyPress(key) {
        this.keysPressed[key] = true;
        for (let pressedKey in this.keysPressed) {
            if (!this.keysPressed[pressedKey])
                continue;
            if (arrows.find(arrow => arrow === pressedKey) !== undefined) {
                this.handlePlayerMovement(this.player, pressedKey);
            }
            if (pressedKey === Keys.SPACE) {
                console.log('Implement shooting');
            }
        }
    }
    handleKeyUp(key) {
        delete this.keysPressed[key];
    }
    ;
    handlePlayerMovement(player, key) {
        let leftValue = 0, topValue = 0;
        if (key === Direction.UP) {
            topValue -= MOVE_VALUE;
        }
        if (key === Direction.DOWN) {
            topValue += MOVE_VALUE;
        }
        if (key === Direction.LEFT) {
            leftValue -= MOVE_VALUE;
        }
        if (key === Direction.RIGHT) {
            leftValue += MOVE_VALUE;
        }
        // requestAnimationFrame(() =>{
        player.changePosition(leftValue, topValue);
        // })
    }
    ;
}
