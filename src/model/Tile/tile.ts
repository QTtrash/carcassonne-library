export enum EdgeType {
  BURG = "BURG",
  GRASS = "GRASS",
  ROAD = "ROAD",
  MONASTERY = "MONASTERY",
  SHIELD = "SHIELD",
  VILLAGE = "VILLAGE",
}

export let deck: Tile[] = [];

export default class Tile {
  contains: EdgeType[];

  connectsNorth: EdgeType;
  connectsSouth: EdgeType;
  connectsWest: EdgeType;
  connectsEast: EdgeType;

  constructor(
    contains: EdgeType[],
    connectsNorth: EdgeType,
    connectsSouth: EdgeType,
    connectsWest: EdgeType,
    connectsEast: EdgeType
  ) {
    this.contains = contains;
    this.connectsNorth = connectsNorth;
    this.connectsSouth = connectsSouth;
    this.connectsWest = connectsWest;
    this.connectsEast = connectsEast;
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
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.MONASTERY, EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);

deck.push(
  new Tile(
    [EdgeType.MONASTERY],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.MONASTERY],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.MONASTERY],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.MONASTERY],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);

deck.push(
  new Tile(
    [EdgeType.SHIELD, EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.BURG,
    EdgeType.BURG,
    EdgeType.BURG
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);

//End of first row

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG
  )
);

// End of second row

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.ROAD
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);

// End of third row

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.GRASS,
    EdgeType.BURG
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.ROAD
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.ROAD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.ROAD
  )
);

// End of fourth row

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.GRASS,
    EdgeType.BURG,
    EdgeType.BURG
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.BURG
  )
);
deck.push(
  new Tile(
    [EdgeType.BURG, EdgeType.SHIELD],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.BURG
  )
);

deck.push(
  new Tile(
    [EdgeType.BURG],
    EdgeType.BURG,
    EdgeType.ROAD,
    EdgeType.BURG,
    EdgeType.BURG
  )
);

// End of fifth row

deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS,
    EdgeType.GRASS
  )
);

deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.GRASS
  )
);

deck.push(
  new Tile(
    [EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);
deck.push(
  new Tile(
    [EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.GRASS,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);

deck.push(
  new Tile(
    [EdgeType.ROAD, EdgeType.VILLAGE],
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD,
    EdgeType.ROAD
  )
);