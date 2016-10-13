const mazeOptions = {};

mazeOptions.MazeCell = function(x, y) {
    this.up = 'wall';
    this.down = 'wall';
    this.left = 'wall';
    this.right = 'wall';
    this.coordX = x;
    this.coordY = y;
    this.goal = true;
    this.anchor = false;
};

mazeOptions.generateEmptyMaze = function(dim) {
    let maze = [];
    for (let i = 0; i < dim; i++) {
        maze.push([]);
        for (let j = 0; j < dim; j++) {
            maze[i].push(new mazeOptions.MazeCell(j, i));
        }
    }
    return maze;
};

const maze1 = [
    [{
        up: 'edge',
        down: 'valid',
        left: 'edge',
        right: 'valid',
        coordX: 0,
        coordY: 0,
        goal: false,
        anchor: false
    }, {
        up: 'edge',
        down: 'wall',
        left: 'valid',
        right: 'valid',
        coordX: 1,
        coordY: 0,
        goal: false,
        anchor: false
    }, {
        up: 'edge',
        down: 'valid',
        left: 'valid',
        right: 'wall',
        coordX: 2,
        coordY: 0,
        goal: false,
        anchor: false
    }, {
        up: 'edge',
        down: 'valid',
        left: 'wall',
        right: 'valid',
        coordX: 3,
        coordY: 0,
        goal: false,
        anchor: false
    }, {
        up: 'edge',
        down: 'valid',
        left: 'valid',
        right: 'valid',
        coordX: 4,
        coordY: 0,
        goal: false,
        anchor: false
    }, {
        up: 'edge',
        down: 'valid',
        left: 'valid',
        right: 'edge',
        coordX: 5,
        coordY: 0,
        goal: false,
        anchor: false
    }],
    [{
        up: 'valid',
        down: 'valid',
        left: 'edge',
        right: 'wall',
        coordX: 0,
        coordY: 1,
        goal: false,
        anchor: true
    }, {
        up: 'valid',
        down: 'valid',
        left: 'wall',
        right: 'valid',
        coordX: 1,
        coordY: 1,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'wall',
        left: 'valid',
        right: 'wall',
        coordX: 2,
        coordY: 1,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'wall',
        left: 'wall',
        right: 'valid',
        coordX: 3,
        coordY: 1,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'wall',
        left: 'valid',
        right: 'valid',
        coordX: 4,
        coordY: 1,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'valid',
        left: 'valid',
        right: 'edge',
        coordX: 5,
        coordY: 1,
        goal: false,
        anchor: false
    }],
    [{
        up: 'valid',
        down: 'valid',
        left: 'edge',
        right: 'wall',
        coordX: 0,
        coordY: 2,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'wall',
        left: 'wall',
        right: 'valid',
        coordX: 1,
        coordY: 2,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'valid',
        left: 'valid',
        right: 'wall',
        coordX: 2,
        coordY: 2,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'valid',
        left: 'wall',
        right: 'valid',
        coordX: 3,
        coordY: 2,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'wall',
        left: 'valid',
        right: 'valid',
        coordX: 4,
        coordY: 2,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'valid',
        left: 'valid',
        right: 'edge',
        coordX: 5,
        coordY: 2,
        goal: false,
        anchor: true
    }],
    [{
        up: 'valid',
        down: 'valid',
        left: 'edge',
        right: 'wall',
        coordX: 0,
        coordY: 3,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'wall',
        left: 'wall',
        right: 'valid',
        coordX: 1,
        coordY: 3,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'wall',
        left: 'valid',
        right: 'valid',
        coordX: 2,
        coordY: 3,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'wall',
        left: 'valid',
        right: 'wall',
        coordX: 3,
        coordY: 3,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'wall',
        left: 'wall',
        right: 'valid',
        coordX: 4,
        coordY: 3,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'valid',
        left: 'valid',
        right: 'edge',
        coordX: 5,
        coordY: 3,
        goal: false,
        anchor: false
    }],
    [{
        up: 'valid',
        down: 'valid',
        left: 'edge',
        right: 'valid',
        coordX: 0,
        coordY: 4,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'wall',
        left: 'valid',
        right: 'valid',
        coordX: 1,
        coordY: 4,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'valid',
        left: 'valid',
        right: 'valid',
        coordX: 2,
        coordY: 4,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'valid',
        left: 'valid',
        right: 'valid',
        coordX: 3,
        coordY: 4,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'wall',
        left: 'valid',
        right: 'wall',
        coordX: 4,
        coordY: 4,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'valid',
        left: 'wall',
        right: 'edge',
        coordX: 5,
        coordY: 4,
        goal: false,
        anchor: false
    }],
    [{
        up: 'valid',
        down: 'edge',
        left: 'edge',
        right: 'valid',
        coordX: 0,
        coordY: 5,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'edge',
        left: 'valid',
        right: 'wall',
        coordX: 1,
        coordY: 5,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'edge',
        left: 'wall',
        right: 'valid',
        coordX: 2,
        coordY: 5,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'edge',
        left: 'valid',
        right: 'wall',
        coordX: 3,
        coordY: 5,
        goal: false,
        anchor: false
    }, {
        up: 'wall',
        down: 'edge',
        left: 'wall',
        right: 'valid',
        coordX: 4,
        coordY: 5,
        goal: false,
        anchor: false
    }, {
        up: 'valid',
        down: 'edge',
        left: 'valid',
        right: 'edge',
        coordX: 5,
        coordY: 5,
        goal: false,
        anchor: false
    }]
];

mazeOptions.options = [maze1];

module.exports = mazeOptions;
