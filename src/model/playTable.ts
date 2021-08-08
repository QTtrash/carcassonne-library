import Tile from "./Tile/tile";

/**
 * Position can only be from 0 to 9, because our playTable grid
 * is an array of 10x10
 */
export interface Position {
  x: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  y: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

/**
 * PlayTable class used for storing our tile 10x10 grid.
 */
export default class PlayTable {
  /**
   * PlayTable class attributes.
   * coordinates to save the grid
   * isEmpty to check whether its the first move or not
   */
  coordinates: Array<Tile[] | string[]>;
  isEmpty: boolean;

  /**
   * Constructor that uses 1 static method
   * to initialize the 10x10 array
   */
  constructor() {
    this.coordinates = PlayTable.initializeTable();
    this.isEmpty = false;
  }

  /**
   * Used to initialize empty playTable
   * On the not occupied spots is stored string "free"
   * @returns empty 10x10 array
   */
  static initializeTable() {
    let arr: Array<Tile[] | string[]> = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = [];
      for (let j = 0; j < 10; j++) {
        arr[i][j] = "free";
      }
    }
    return arr;
  }

  /**
   * toString method used for
   * text representation of the current state
   * @returns string representation of playTable
   */
  toString() {
    let result = "";
    this.coordinates.forEach((row) => {
      row.forEach((column: any) => {
        result += column !== "free" ? "Tile\t" : column + "\t";
      });
      result += "\n";
    });
    return result;
  }
}
