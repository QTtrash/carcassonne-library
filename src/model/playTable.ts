import Tile from "./Tile/tile";

export interface Position {
  x: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
  y: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
} 

export default class PlayTable {
  coordinates: Array<Tile[] | string[]>;
  isEmpty: boolean;

  constructor() {
    this.coordinates = PlayTable.initializeTable();
    this.isEmpty = false;
  }

  static initializeTable() {
    let arr: Array<Tile[] | string[]> = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = [];
      for (let j = 0; j < 10; j++) {
        arr[i][j] = "free" 
      }
    }
    return arr;
  }

  toString() {
    let result = "";
    this.coordinates.forEach((row) => {
      row.forEach((column : any) => {
        result += column !== "free" ? "Tile\t" : column + "\t"
      });
      result += "\n";
    });
    return result;
  }
}
