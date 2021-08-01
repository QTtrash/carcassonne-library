import Player from "./model/player";
import Tile from "./model/Tile/tile";

type NumberOfPlayers = 2 | 3 | 4 | 5 | 6;
const startingMeepleCount = 7;
const startingPoints = 0;

export class Carcassonne {
  players: Player[];
  currentPlayer: Player;
  deckOfCards: Tile[];

  constructor(numOfPlayers: NumberOfPlayers) {
    this.players = [];
    this.deckOfCards = [];
    for (let i = 1; i <= numOfPlayers; i++) {
      this.players.push(new Player(startingMeepleCount, startingPoints));
    }
    this.currentPlayer = this.players[0];
  }
}
