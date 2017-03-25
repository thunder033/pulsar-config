/**
 * Share client/server data structures
 * Created by Greg on 3/17/2017.
 */
"use strict";
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
var DataType;
(function (DataType) {
    DataType[DataType["String"] = 0] = "String";
    DataType[DataType["Float"] = 1] = "Float";
    DataType[DataType["Double"] = 2] = "Double";
    DataType[DataType["Int8"] = 3] = "Int8";
    DataType[DataType["Int16"] = 4] = "Int16";
    DataType[DataType["Int32"] = 5] = "Int32";
})(DataType = exports.DataType || (exports.DataType = {}));
exports.ByteSizes = new Map([
    [DataType.Float, 4],
    [DataType.Double, 8],
    [DataType.Int8, 1],
    [DataType.Int16, 2],
    [DataType.Int32, 4],
]);
class DataFormat {
}
DataFormat.SHIP = new Map([
    ['timestamp', DataType.Double],
    ['positionX', DataType.Float],
]);
exports.DataFormat = DataFormat;
//# sourceMappingURL=game-params.js.map