/**
 * Shared client/server data structures
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
class DriveParams {
}
DriveParams.RENDER_OFFSET = 2;
DriveParams.LEVEL_BUFFER_START = 6000;
DriveParams.LEVEL_BUFFER_END = 1500;
exports.DriveParams = DriveParams;
var Gem;
(function (Gem) {
    Gem[Gem["NONE"] = 0] = "NONE";
    Gem[Gem["GREEN"] = 1] = "GREEN";
    Gem[Gem["COLLECTED"] = 2] = "COLLECTED";
    Gem[Gem["BLACK"] = 3] = "BLACK";
})(Gem = exports.Gem || (exports.Gem = {}));
/**
 * Parameters that determine the size of loudness bars rendered along the
 * track
 */
class SliceBar {
}
SliceBar.scaleX = 1.5;
SliceBar.scaleY = 1;
SliceBar.scaleZ = 0.9;
// The distance between each bar
SliceBar.margin = 0.1;
exports.SliceBar = SliceBar;
/**
 * Data types supported in a binary buffer constructed through Network Entities
 */
var DataType;
(function (DataType) {
    DataType[DataType["String"] = 0] = "String";
    DataType[DataType["Float"] = 1] = "Float";
    DataType[DataType["Double"] = 2] = "Double";
    DataType[DataType["Int8"] = 3] = "Int8";
    DataType[DataType["Int16"] = 4] = "Int16";
    DataType[DataType["Int32"] = 5] = "Int32";
})(DataType = exports.DataType || (exports.DataType = {}));
/**
 * The number of bytes each data type in a buffer occupies
 * @type {Map<DataType, number>}
 */
exports.ByteSizes = new Map([
    [DataType.Float, 4],
    [DataType.Double, 8],
    [DataType.Int8, 1],
    [DataType.Int16, 2],
    [DataType.Int32, 4],
]);
exports.TYPE_MASK = 0b0000000000001111;
exports.SIZE_MASK = 0b1111111111110000;
exports.NUM_TYPE_BITS = 4;
function overrideSize(type, size) {
    return type | size << exports.NUM_TYPE_BITS;
}
function bufferArray(type, size) {
    return ~(type | size << exports.NUM_TYPE_BITS);
}
/**
 * Listing of fields for syncing various network entities. These are Map instances because
 * they *must* be ordered (Maps preserve insertion order during iteration)
 *
 * In each entry, the key is the field name, with an additional size parameter denoted
 * by a colon: field:size. For String fields, the size is required.
 *
 * The second parameter is the type of data stored in the field. This can either be
 * a primitive DataType, or an array that indicates the Data Type and length
 * as such [{DataType}, {length}]
 */
class DataFormat {
}
DataFormat.NETWORK_ENTITY = new Map([
    ['id', overrideSize(DataType.String, 36)],
    ['type', DataType.Int8],
    ['timestamp', DataType.Double],
    ['format', DataType.Int8],
]);
DataFormat.SHIP = new Map([
    ['positionX', DataType.Float],
]);
DataFormat.WARP_DRIVE = new Map([
    ['sliceIndex', DataType.Int16],
    ['barOffset', DataType.Double],
    ['stateValue', DataType.Int8],
]);
DataFormat.POSITION = new Map([
    ['positionX', DataType.Float],
    ['positionY', DataType.Float],
    ['positionZ', DataType.Float],
]);
DataFormat.SLICE_UPDATE = new Map([
    ['sliceIndex', DataType.Int16],
    ['gems', bufferArray(DataType.Int8, Track.NUM_LANES)],
]);
exports.DataFormat = DataFormat;
//# sourceMappingURL=game-params.js.map