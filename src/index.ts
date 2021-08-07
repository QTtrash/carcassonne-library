import Player from "./model/player";
import Tile, { deck } from "./model/Tile/tile";
import PlayTable, { Position } from "./model/playTable"

type NumberOfPlayers = 2 | 3 | 4 | 5 | 6;
const startingMeepleCount = 7;
const startingPoints = 0;

export class Carcassonne {
  players: Player[];
  currentPlayer: Player;
  currentCard?: Tile;
  deckOfCards: Tile[];
  playTable: PlayTable;
  currentCardPos?: Position;

  constructor(numOfPlayers: NumberOfPlayers, names: string[]) {
    this.players = [];
    this.deckOfCards = deck;
    for (let i = 1; i <= numOfPlayers; i++) {
      this.players.push(new Player(startingMeepleCount, startingPoints, names[i]));
    }
    this.currentPlayer = this.players[0];
    this.currentCard = this.deckOfCards.pop()
    this.playTable = new PlayTable();
    this.currentCardPos = undefined;
  }

  cardsLeft() {
    return `There are ${this.deckOfCards.length} cards left`
  }

  showCurrentTile() {
    if(this.currentCard){
    return this.currentCard.toString();}
    else {
      return "Tile is undefined"
    }
  }

  showCurrentPlayer() {
    return this.currentPlayer.toString();
  }

  showCurrentTable() {
    return this.playTable.toString();
  }

  showMeepleOnTile(pos: Position) {
    const tile = this.playTable.coordinates[pos.y][pos.x]
    if( tile === "free") {
      return "This tile is free, hence no meeple can be found"
    }
    else if(tile instanceof Tile) {
      if(tile.meeple) {
        return tile.meeple.toString()
      }
      else {
        return "No meeple is present on this tile"
      }
    }
  }

  playCard(pos: Position) {
    if(this.playTable.isEmpty) {
      let firstPos: Position = {x: 5, y: 5}
      this.playTable.isEmpty = false; 
      this.currentPlayer.playCard(this.currentCard!, this.playTable, firstPos);
      this.currentCardPos = firstPos;
    }
    else {
      this.currentPlayer.playCard(this.currentCard!, this.playTable, pos);
      this.currentCardPos = pos;
    }
  }

  placeMeeple(pos: Position) {
    this.currentPlayer.placeMeeple(this.playTable, pos);
  }

  //TODO: Implement this next
  nextPlayer() {}

}
