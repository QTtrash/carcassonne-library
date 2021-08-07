import PlayTable, { Position } from "./playTable"
import Tile, { EdgeType } from "./Tile/tile";
import Meeple from "./meeple"

type MeepleCount = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export default class Player {
  meepleCount: MeepleCount;
  points: number;
  name: string;
  meeples: Meeple[]

  constructor(meepleCount: MeepleCount, points: number, name: string) {
    this.name = name
    this.meepleCount = meepleCount;
    this.points = points;
    this.meeples = Player.initializeMeeples(meepleCount, name)
  }

  static initializeMeeples(meepleCount: MeepleCount, name: string) {
    let meepleArr: Meeple[] = []
    for(let i = 0; i < meepleCount; i++) {
      meepleArr.push(new Meeple(name));
    }
    return meepleArr;
  }

  playCard(card: Tile, table: PlayTable, pos: Position) {
    if(table.coordinates[pos.y][pos.x] !== "free") {
      table.coordinates[pos.y][pos.x] = card;
    }
    else {
      return "Sorry this position already contains a tile "
    }
  }

  placeMeeple(table: PlayTable, pos: Position) {
    let tile = table.coordinates[pos.y][pos.x]
    if(tile instanceof Tile ) {
      if(tile.meeple) {
        return "Sorry this position is already occupied by another meeple"
      }
      else {
        tile.meeple = this.meeples.pop();
        return `Placed a meeple on a tile at ${pos.x + " " + pos.y}`
      }
    } 
  }

  toString() {
    return `${this.name} has ${this.points} points with ${this.meepleCount} meeples.`
  }
}
