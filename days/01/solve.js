function solve(input, part) {
    if (part === 1) {
        return part1(input);
    }
}

const part1 = input => input.map(x => Number(x)).reduce((a, x) => a + x, 0);

const expected = part => part === 1 ? 1343 : 1274;

module.exports = {solve, expected};