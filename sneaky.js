/**
 * This is not part of the solution but to test it I made up this function to
 * randomly make up "sneakiness grids" to make sure I'm not always getting the
 * same path.
 */
function generateSneakyGrid(x, y, i, j)
{
    let sneakyGrid = [];

    for (let a = x; a <= i; a++) {
        sneakyGrid[a] = [];
        for(let b = y; b <= j; b++) {
            sneakyGrid[a][b] = Math.random();
        }
    }

    return sneakyGrid;
}

var sneakyGrid = generateSneakyGrid(0, 0, 3, 3);

//Solution starts here

function passNote(x, y, i, j, chance = 100)
{
    // if your note has arrived at it's destination send back the final chance amount
    if (x == i && y == j) {
        return {'path': [[x,y]], 'chance': chance};
    }

    // initialize x and y data, this way you have something to compare against
    // when comparing a node just before the final node and the final node
    let xData = {'path': [], 'chance': 100};
    let yData = {'path': [], 'chance': 100};
    let sneaky = sneakyGrid[x][y];

    // if there is space to move across the x axis check that path
    if (x < i) {
        xData = passNote(x+1, y, i, j, chance - (10 * sneaky));
    }

    // if there is space to move across the y axis check that path
    if (y < j) {
        yData = passNote(x, y +1, i, j, chance - ((chance/2) * sneaky));
    }

    // compare which path is best
    let bestData = (xData.chance < yData.chance) ? xData : yData;

    // return the best path from this point and it's chance to the previous student
    return {'path': [[x,y], ...bestData.path], 'chance': bestData.chance}
}

console.log(passNote(0, 0, 3, 3));