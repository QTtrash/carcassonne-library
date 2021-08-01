type MeepleCount = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export default class Player {
  meepleCount: MeepleCount;

  points: number;

  constructor(numOfMeeple: MeepleCount, points: number) {
    this.meepleCount = numOfMeeple;
    this.points = points;
  }
}
