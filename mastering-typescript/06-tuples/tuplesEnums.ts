const stuff: string[] = ["asd", "fgh", "jkl"];

// this is a tuple, a fixed-length array with specified types at each index.
const color: [number, number, number] = [1, 2, 3];

const other: [boolean, string, number] = [false, "hello", 14];

type HTTPResponse = [number, string];

const success: HTTPResponse = [200, "OK"];
const forbidden: HTTPResponse = [403, "Forbidden"];

// they don't prevent you from pushing on extra elements.
// weird bug, but tuples aren't used very often.
success.push(44);
success.pop();

const responses: HTTPResponse[] = [success, forbidden];

enum Responses {
    no,
    yes,
    maybe
};

enum Directions {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}


isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 311,
};

ArrowKeys.LEFT;

const enum SomethingRandon {
    new,
    old,
    something,
};