import { GameObjectColor, Point } from "./constants.js";
import Game from "./game.js";
import GameManager from "./gameManager.js";

addEventListener('load', () =>{
    const map = <HTMLCanvasElement>document.querySelector('#map');
    const ctx = map.getContext('2d');
    map.width = 1600;
    map.height = 900;
    const game = new Game(map.width, map.height, {});
    const gm = new GameManager(game, ctx);
    gm.runGame();
})

function joinTheGame(name: string, color: GameObjectColor, startingPosition: Point){
    return {
        name: name,
        color: color,
        position: startingPosition
    }
}