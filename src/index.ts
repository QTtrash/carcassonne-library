import Player from "./model/player";
import Tile, { deck } from "./model/Tile/tile";
import PlayTable, { Position } from "./model/playTable";

/**
 * The only exposed class of the library
 * Which one can use to control/check the state of the game
 */
type NumberOfPlayers = 2 | 3 | 4 | 5 | 6;
type playerCounter = 0 | 1 | 2 | 3 | 4 | 5;
const startingMeepleCount = 7;
const startingPoints = 0;

/**
 * The only exposed class of the library
 * Which one can use to control/check the state of the game
 */
export class Carcassonne {
  /**
   * Class attributes with given types
   */
  players: Player[];
  currentPlayer: Player;
  currentCard?: Tile;
  deckOfCards: Tile[];
  playTable: PlayTable;
  currentCardPos?: Position;
  currentPlayerCounter: playerCounter;

  /**
   * Class constructor.
   * @param numOfPlayers - The first input, that sets the player amount
   * @param names - Array of user names, for the identification's sake
   */
  constructor(numOfPlayers: NumberOfPlayers, names: string[]) {
    this.players = [];
    this.deckOfCards = Carcassonne.shuffle(deck);
    this.currentPlayerCounter = 0;
    for (let i = 1; i <= numOfPlayers; i++) {
      this.players.push(
        new Player(startingMeepleCount, startingPoints, names[i]),
      );
    }
    this.currentPlayer = this.players[this.currentPlayerCounter];
    this.currentCard = this.deckOfCards.pop();
    this.playTable = new PlayTable();
    this.currentCardPos = undefined;
  }

  /**
   * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   * Used to shuffle during the initializing the deck of cards, so it would not be the same
   * @returns returns reshuffled deckOfCards
   */
  static shuffle(array: Tile[]) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  /**
   * Shows the amount of cards left using length of the current deckOfCards's length
   * @returns Information about the amount
   */
  cardsLeft() {
    return `There are ${this.deckOfCards.length} cards left`;
  }

  /**
   * Shows the current card, that have been drawn, using Tile's toString method
   * @returns Information about the current card
   */
  showCurrentTile() {
    if (this.currentCard) {
      return this.currentCard.toString();
    } else {
      return "Tile is undefined";
    }
  }

  /**
   * Shows the current player, whose turn is now, using Player's toString method
   * @returns Information about the current player
   */
  showCurrentPlayer() {
    return this.currentPlayer.toString();
  }

  /**
   * Shows the current player, whose turn is now, using Player's toString method
   * @returns String representation of the playTable
   */
  showCurrentTable() {
    return this.playTable.toString();
  }

  /**
   * Shows whether or not meeple occupies Tile on a given position
   * @param pos - Position of the tile, that we want to test
   * @returns Information either about the Tile or the meeple
   */
  showMeepleOnTile(pos: Position) {
    const tile = this.playTable.coordinates[pos.y][pos.x];
    if (tile === "free") {
      return "This tile is free, hence no meeple can be found";
    } else if (tile instanceof Tile) {
      if (tile.meeple) {
        return tile.meeple.toString();
      } else {
        return "No meeple is present on this tile";
      }
    }
  }

  /**
   * Makes the current player play a tile on a given position
   * Calling Player's class method
   * @param pos - Position of the tile, that we want to place
   * If the playTable is empty, we place it in the middle (playTable is 10x10)
   */
  playCard(pos: Position) {
    if (this.playTable.isEmpty) {
      let firstPos: Position = { x: 5, y: 5 };
      this.playTable.isEmpty = false;
      this.currentPlayer.playCard(this.currentCard!, this.playTable, firstPos);
      this.currentCardPos = firstPos;
    } else {
      this.currentPlayer.playCard(this.currentCard!, this.playTable, pos);
      this.currentCardPos = pos;
    }
  }
  /**
   * Makes the current player play a tile on a given position
   * Calling Player's classMethod
   * @param pos - Position of the tile, that we want to place
   */
  placeMeeple(pos: Position) {
    this.currentPlayer.placeMeeple(this.playTable, pos);
  }

  /**
   * Changes the rotation of the player's turn
   * And draws another card from the deck for the new player
   * @returns
   *
   */
  nextPlayer() {
    this.currentPlayerCounter += 1;
    if (this.currentPlayerCounter > 5) {
      this.currentPlayerCounter = 0;
    }
    this.currentPlayer = this.players[this.currentPlayerCounter];

    this.currentCard = this.deckOfCards.pop();
    if (this.currentCard) {
      this.currentCardPos = undefined;
      return `Now is ${this.currentPlayer.name}'s turn!`;
    }
    {
      return `No cards left in the deck! The game's over`;
    }
  }
  /**
   * Shows the score of players
   * @returns String representation of the scoreboard.
   */
  showScore() {
    let scoreBoard = "";

    this.players.forEach((player) => {
      scoreBoard += `${player.name} has ${player.points} points! \n`;
    });

    return scoreBoard;
  }
}
