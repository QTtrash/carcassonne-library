export default class Meeple {
  playerName: string;

  constructor(playerName: string) {
      this.playerName = playerName
  }

  toString() {
    return `This meeple belongs to player ${this.playerName}`
  }
}
