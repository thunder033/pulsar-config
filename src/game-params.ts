/**
 * Shared client/server data structures
 * Created by Greg on 3/17/2017.
 */

export class Track {
    public static readonly LANE_WIDTH: number = 1.15;
    public static readonly NUM_LANES: number  = 3;
    public static readonly POSITION_X: number = (-Track.NUM_LANES / 2) * Track.LANE_WIDTH;
    public static readonly WIDTH: number      = Track.LANE_WIDTH * Track.NUM_LANES;
}

export enum Direction {
    LEFT = -1,
    NONE = 0,
    RIGHT = 1,
}

export class ShipEngine {
    public static readonly MOVE_SPEED: number = 0.0045;
    public static readonly SNAP_DELTA: number = 0.03; // 3% of lane width
}

export class DriveParams {
    public static readonly RENDER_OFFSET: number = 2;
    public static readonly LEVEL_BUFFER_START: number = 6000;
    public static readonly LEVEL_BUFFER_END: number = 1500;
}

export enum Gem {
    'NONE',
    'GREEN',
    'COLLECTED',
    'BLACK',
}

/**
 * Parameters that determine the size of loudness bars rendered along the
 * track
 */
export class SliceBar {
    public static readonly scaleX: number = 1.5;
    public static readonly scaleY: number = 1;
    public static readonly scaleZ: number = 0.9;

    // The distance between each bar
    public static readonly margin: number = 0.1;
}

/**
 * Data types supported in a binary buffer constructed through Network Entities
 */
export enum DataType {
    'String',
    'Float',
    'Double',
    'Int8',
    'Int16',
    'Int32',
}

/**
 * The number of bytes each data type in a buffer occupies
 * @type {Map<DataType, number>}
 */
export const ByteSizes: Map<DataType, number> = new Map<DataType, number>([
    [DataType.Float, 4],
    [DataType.Double, 8],
    [DataType.Int8, 1],
    [DataType.Int16, 2],
    [DataType.Int32, 4],
]);

export type FieldType = DataType | number;
export type BufferFormat = Map<string, FieldType>;
export const TYPE_MASK = 0b0000000000001111;
export const SIZE_MASK = 0b1111111111110000;
export const NUM_TYPE_BITS = 4;

export function overrideSize(type: DataType, size: number) {
    return type | size << NUM_TYPE_BITS;
}

export function bufferArray(type: DataType, size: number) {
    return ~(type | size << NUM_TYPE_BITS);
}

/**
 * Parse or look up the field size from the binary data type
 * @param type {number}: binary data type represented as described in pulsar-lib
 * @returns {number}: The number of bytes the field will consume
 */
export function getFieldSize(type: DataType): number {
    // A type larger than type mask has an overridden size (or is a string)
    if (type > TYPE_MASK) {
        // Mask the type and shift right
        return (type & SIZE_MASK) >> NUM_TYPE_BITS;
    } else if (type < 0) {
        // A negative type indicates an array
        // Parse the type code (negate and mask the size)
        const typeCode = (~type) & TYPE_MASK;
        // Get the number of elements in the array (negate, mask, shift)
        const numElems = ((~type) & SIZE_MASK) >> NUM_TYPE_BITS;
        return ByteSizes.get(typeCode) * numElems;
    } else {
        // If we get here, it's a plain type code
        return ByteSizes.get(type);
    }
}

/**
 * Parse the primitive data type (Int8, Float, etc.) from the complex data type
 * @param type {number}: binary data type represented as described in pulsar-lib
 * @returns {number}
 */
export function getPrimitiveType(type: DataType) {
    // Get the absolute value of the type and mask the size
    return ((type >> 31) ^ type) & TYPE_MASK;
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
export class DataFormat {
    public static readonly NETWORK_ENTITY: BufferFormat = new Map([
        ['id', overrideSize(DataType.String, 36)],
        ['type', DataType.Int8],
        ['timestamp', DataType.Double],
        ['format', DataType.Int8],
    ]);

    public static readonly SHIP: BufferFormat = new Map([
        ['positionX', DataType.Float],
    ]);

    public static readonly WARP_DRIVE: BufferFormat = new Map([
        ['sliceIndex', DataType.Int16],
        ['barOffset', DataType.Double],
        ['stateValue', DataType.Int8],
    ]);

    public static readonly POSITION: BufferFormat = new Map([
        ['positionX', DataType.Float],
        ['positionY', DataType.Float],
        ['positionZ', DataType.Float],
    ]);

    public static readonly SLICE_UPDATE: BufferFormat = new Map<string, FieldType>([
        ['sliceIndex', DataType.Int16],
        ['gems', bufferArray(DataType.Int8, Track.NUM_LANES)],
    ]);
}
