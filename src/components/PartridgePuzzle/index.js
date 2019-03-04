import React, { Component } from 'react';

const allTiles = [

  // The left square shown in (62) in [Knuth]
  [ { size: 1, x: 29, y: 14 },

    { size: 2, x: 26, y: 12 },
    { size: 2, x: 28, y: 12 },

    { size: 3, x: 26, y: 14 },
    { size: 3, x: 30, y: 12 },
    { size: 3, x: 33, y: 12 },

    { size: 4, x: 0,  y: 32 },
    { size: 4, x: 4,  y: 32 },
    { size: 4, x: 16, y: 8  },
    { size: 4, x: 20, y: 8  },

    { size: 5, x: 16, y: 12 },
    { size: 5, x: 21, y: 12 },
    { size: 5, x: 8,  y: 24 },
    { size: 5, x: 13, y: 24 },
    { size: 5, x: 18, y: 24 },

    { size: 6, x: 24, y: 0  },
    { size: 6, x: 30, y: 0  },
    { size: 6, x: 24, y: 6  },
    { size: 6, x: 30, y: 6  },
    { size: 6, x: 23, y: 17 },
    { size: 6, x: 23, y: 23 },

    { size: 7, x: 8,  y: 29 },
    { size: 7, x: 15, y: 29 },
    { size: 7, x: 16, y: 17 },
    { size: 7, x: 22, y: 29 },
    { size: 7, x: 29, y: 15 },
    { size: 7, x: 29, y: 22 },
    { size: 7, x: 29, y: 29 },

    { size: 8, x: 0,  y: 0  },
    { size: 8, x: 0,  y: 8  },
    { size: 8, x: 0,  y: 16 },
    { size: 8, x: 0,  y: 24 },
    { size: 8, x: 8,  y: 0  },
    { size: 8, x: 8,  y: 8  },
    { size: 8, x: 8,  y: 16 },
    { size: 8, x: 16, y: 0  },
  ]
];

class Tile extends Component {
  render() {

    const {scale, tile} = this.props;
    const offset = scale * tile.size / 2 - 4;

    const styleSquare = {
      position: 'absolute',
      left:     tile.x    * scale,
      top:      tile.y    * scale,
      width:    tile.size * scale,
      height:   tile.size * scale,
      border:   '1px solid #333'
    }

    const styleNumber = {
      position: 'absolute',
      left:     tile.x * scale + offset,
      top:      tile.y * scale + offset,
    }

    return (
      <div>
        <div style={styleSquare}></div>
        <div style={styleNumber}>{tile.size}</div>
      </div>
    )
  }
}

class PartridgePuzzle extends Component {

  render() {

    const styles = {
      position: 'relative',
      width:    36 * this.props.scale,
      height:   36 * this.props.scale,
      border:   '1px solid #333'
    };

    const puzzle = allTiles[this.props.puzzleId];

    var tiles = [];

    // TODO: There should be a better way to do this with a single call to map
    for (var i = 0; i < puzzle.length; i++) {
      tiles.push(
        <Tile tile={puzzle[i]} scale={this.props.scale} />
      );
    }

    return (
      <div style={styles}>
        { tiles }
      </div>
    );
  }
}

export default PartridgePuzzle;

