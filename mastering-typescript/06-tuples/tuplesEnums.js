var stuff = ["asd", "fgh", "jkl"];
// this is a tuple, a fixed-length array with specified types at each index.
var color = [1, 2, 3];
var other = [false, "hello", 14];
var success = [200, "OK"];
var forbidden = [403, "Forbidden"];
// they don't prevent you from pushing on extra elements.
// weird bug, but tuples aren't used very often.
success.push(44);
success.pop();
var responses = [success, forbidden];
var Responses;
(function (Responses) {
    Responses[Responses["no"] = 0] = "no";
    Responses[Responses["yes"] = 1] = "yes";
    Responses[Responses["maybe"] = 2] = "maybe";
})(Responses || (Responses = {}));
;
var Directions;
(function (Directions) {
    Directions[Directions["UP"] = 0] = "UP";
    Directions[Directions["DOWN"] = 1] = "DOWN";
    Directions[Directions["LEFT"] = 2] = "LEFT";
    Directions[Directions["RIGHT"] = 3] = "RIGHT";
})(Directions || (Directions = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
    ArrowKeys[ArrowKeys["ERROR"] = 311] = "ERROR";
})(ArrowKeys || (ArrowKeys = {}));
;
ArrowKeys.LEFT;
;
