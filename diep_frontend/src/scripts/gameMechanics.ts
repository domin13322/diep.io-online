import { Point } from "./constants.js"
import Player from "./components/player.js"

export default class GameMechanics{
    public keysPressed: {[key: string]: boolean};
    private currentPlayer: Player;

    constructor (currentPlayer: Player) {
        this.keysPressed = {};
        this.currentPlayer = currentPlayer;
    }

    public handleKeyDown(key: string){
        this.keysPressed[key] = true;
    }

    public handleKeyUp(key: string){
        delete this.keysPressed[key];
    };
    
    
    public getMousePlayerOffset(mousePosition: Point, playerPosition: Point): Point{
        const x = mousePosition.x - playerPosition.x
        const y = mousePosition.y - playerPosition.y;
        return {x,y};
    }
}