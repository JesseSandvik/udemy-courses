const activeUsers: string[] = [];
activeUsers.push("Steven");
// activeUsers.push(false);

const otherActiveUsers: Array<string> = [];
otherActiveUsers.push("Tommy");
// otherActiveUsers.push(4);

type Point = {
    x: number,
    y: number,
}

const coordinates: Point[] = [];
coordinates.push({x: 24, y: 8});
// coordinates.push({x});
// coordinates.push("hello");

// multidimensional arrays

const board: string[][] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]];

const otherBoard: Array<Array<String>> = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]];