import Player from "../components/player.js";
import Obstacle from "../components/obstacle.js";
import { GameObjectColor, Point } from "../constants.js";

export interface Message {
    type: string;
    success?: boolean;
}


/**
 *
 *
 * @export
 * @interface CreateGameMessage
 * @property position: random position for a new player 
 * @property color: random color for a new player
 * @property width: width of a map
 * @property height: height of a map
 * @property name: name of a new player passed in form
 * @property players: list of players that is already in game
 * @extends {Message}
 */

type PlayerMsg = {
    position: Point;
    name: string;
    color: number;
}

export interface CreateGameMessage extends Message {
    position?: Point;
    color?: number;
    errorMessage?: string;
    width?: number;
    height?: number;
    name?: string;
    players?: PlayerMsg[];
};

export interface CollisionMessage extends Message {

};

export interface MoveMessage extends Message {
    position?: Point;
    enemies?: Player[];
    obstacles?: Obstacle[];
    name?: string;
};

export interface ErrorMessage extends Message {
    message: string;
};

export interface NewPlayerMessage extends Message {
    color: number;
    name: string;
    position?: Point;
};

export interface InitConnectionMessage extends Message {
    clientId: string;
};

export interface BarrelMovedMessage extends Message {
    name: string;
    barrelAngle: number;
    barrelPosition: Point;
};

export interface ShootMessage extends Message {
    bulletId: string;
    bulletColor: GameObjectColor;
    bulletPosition: Point;
    bulletAngle: number;
};