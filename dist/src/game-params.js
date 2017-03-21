/**
 * Share client/server data structures
 * Created by Greg on 3/17/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Track {
}
Track.LANE_WIDTH = 1.15;
Track.NUM_LANES = 3;
Track.POSITION_X = (-Track.NUM_LANES / 2) * Track.LANE_WIDTH;
Track.WIDTH = Track.LANE_WIDTH * Track.NUM_LANES;
exports.Track = Track;
var Direction;
(function (Direction) {
    Direction[Direction["LEFT"] = -1] = "LEFT";
    Direction[Direction["NONE"] = 0] = "NONE";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
})(Direction = exports.Direction || (exports.Direction = {}));
class ShipEngine {
}
ShipEngine.MOVE_SPEED = 0.0045;
ShipEngine.SNAP_DELTA = 0.03; // 3% of lane width
exports.ShipEngine = ShipEngine;
class DataFormat {
}
DataFormat.SHIP = new Map([
    ['timestamp', 36],
    ['positionX', 44],
]);
exports.DataFormat = DataFormat;
//# sourceMappingURL=game-params.js.map