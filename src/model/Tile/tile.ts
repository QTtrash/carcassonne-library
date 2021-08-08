import Meeple from "../meeple";
import PlayTable, { Position } from "../playTable";

/**
 * Enum for storing different edgetypes
 * that the tile can contain
 */
export enum EdgeType {
  BURG = "BURG",
  GRASS = "GRASS",
  ROAD = "ROAD",
  MONASTERY = "MONASTERY",
  SHIELD = "SHIELD",
  VILLAGE = "VILLAGE",
}

/**
 * deck that's being exported to the main library class
 * is being filled at the end of the file
 */
export let deck: Tile[] = [];

/**
 * Tile class used for storing the tile information in the playTable
 */
export default class Tile {
  /**
   * Class attributes
   * Contains - for storing the Enum-objects that the tile contains
   * used for further isComplete and scoring
   * Meeple - to check whether the tile is occupied by the meeple.
   * connectsX - to see what it is able to connect to on the X edge
   */
  contains: EdgeType[];
  meeple?: Meeple;

  connectsNorth: EdgeType;
  connectsSouth: EdgeType;
  connectsWest: EdgeType;
  connectsEast: EdgeType;

  constructor(
    contains: EdgeType[],
    connectsNorth: EdgeType,
    connectsSouth: EdgeType,
    connectsWest: EdgeType,
    connectsEast: EdgeType,
  ) {
    this.contains = contains;
    this.connectsNorth = connectsNorth;
    this.connectsSouth = connectsSouth;
    this.connectsWest = connectsWest;
    this.connectsEast = connectsEast;
    this.meeple = undefined;
  }

  /**
   * Used to see whether a tile is completed
   * And if it is remove a meeple and return it a player it belongs to
   * Currently not implemented, and I also could not find any implementation online
   */
  isCompleted(table: PlayTable, pos: Position, type: EdgeType) {
    let tile = table.coordinates[pos.y][pos.x];

    if (tile instanceof Tile) {
      return;
    } else {
      return `The tile is free`;
    }
  }

  toString() {
    return `Current Tile contains ${this.contains.toString()}. 
            \n Connects to ${this.connectsNorth} on the north side;
            \n Connects to ${this.connectsSouth} on the south side;
            \n Connects to ${this.connectsWest} on the west side;
            \n Connects to ${this.connectsEast} on the east side;
            \n ${
              this.meeple ? "And also contains a Meeple!" : "And has no meeple"
            }`;
  }
}

// Regular Base Game
// https://wikicarpedia.com/index.php/Carcassonne_New_Edition_Introduction
deck.push(
  new Tile(
    [EdgeType.MONASTERY, EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.MONASTERY, EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);

deck.push(
  new Tile(
    [EdgeType.MONASTERY],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.MONASTERY],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.MONASTERY],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.MONASTERY],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);

deck.push(
  new Tile(
    [EdgeType.SHIELD, EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.BURG,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);

//End of first row

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);

// End of second row

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.ROAD,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);

// End of third row

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.ROAD,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.ROAD,
  ),
);

// End of fourth row

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.BURG,
  ),
);

// End of fifth row

deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS,
  ),
);

deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
  ),
);

deck.push(
  new Tile(
    [EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);
deck.push(
  new Tile(
    [EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);

deck.push(
  new Tile(
    [EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD,
  ),
);
