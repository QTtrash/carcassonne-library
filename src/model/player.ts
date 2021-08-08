import PlayTable, { Position } from "./playTable";
import Tile from "./Tile/tile";
import Meeple from "./meeple";

/**
 * Possible meeple counts according to the game rules
 */
type MeepleCount = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * Player class used to abstract player mode.
 */
export default class Player {
  /**
   * Class attributes
   */
  meepleCount: MeepleCount;
  points: number;
  name: string;
  meeples: Meeple[];

  /**
   * Constructor that uses 1 static method
   * to initialize the array of meeple objects
   */
  constructor(meepleCount: MeepleCount, points: number, name: string) {
    this.name = name;
    this.meepleCount = meepleCount;
    this.points = points;
    this.meeples = Player.initializeMeeples(meepleCount, name);
  }

  /**
   * Used to fill an meeple array.
   * @param meepleCount - The starting amount of meeples
   * @param name - The name of the player, used for further scoring
   * @returns - Meeple array that player uses.
   */
  static initializeMeeples(meepleCount: MeepleCount, name: string) {
    let meepleArr: Meeple[] = [];
    for (let i = 0; i < meepleCount; i++) {
      meepleArr.push(new Meeple(name));
    }
    return meepleArr;
  }

  /**
   * Used to place a currentCard on a given position
   * @param card - currentCard, that has been drawn
   * @param table - currentPlayTable, that's used in the game
   * @param pos - the position, that card needs to be placed on
   *
   * Either sets the card on a provided location or
   * @returns the string message, that there is already a tile
   */
  playCard(card: Tile, table: PlayTable, pos: Position) {
    if (table.coordinates[pos.y][pos.x] === "free") {
      table.coordinates[pos.y][pos.x] = card;
    } else {
      return "Sorry this position already contains a tile ";
    }
  }

  /**
   * Used to place a meeple on a given position
   * @param table - currentPlayTable, that's used in the game
   * @param pos - the position, that meeple needs to be placed on
   *
   * Either sets the meeple on a tile or
   * @returns string message about the tile state
   */
  placeMeeple(table: PlayTable, pos: Position) {
    let tile = table.coordinates[pos.y][pos.x];
    if (tile instanceof Tile) {
      if (tile.meeple) {
        return "Sorry this position is already occupied by another meeple";
      } else {
        tile.meeple = this.meeples.pop();
        return `Placed a meeple on a tile at ${pos.x + " " + pos.y}`;
      }
    }
  }

  /**
   * Used for string representation of the player
   * @returns string representation of the player
   */
  toString() {
    return `${this.name} has ${this.points} points with ${this.meepleCount} meeples.`;
  }
}
