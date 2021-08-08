/**
 * Used for abstraction of the meeple model
 */
export default class Meeple {
  /**
   * class attributes
   * for storing the owner's name for further scoring.
   */
  playerName: string;

  constructor(playerName: string) {
    this.playerName = playerName;
  }

  /**
   * to show whom the meeple belongs to
   * @returns the player's name
   */
  toString() {
    return `This meeple belongs to player ${this.playerName}`;
  }
}
