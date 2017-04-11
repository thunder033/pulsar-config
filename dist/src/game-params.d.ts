/**
 * Shared client/server data structures
 * Created by Greg on 3/17/2017.
 */
export declare class Track {
    static readonly LANE_WIDTH: number;
    static readonly NUM_LANES: number;
    static readonly POSITION_X: number;
    static readonly WIDTH: number;
}
export declare enum Direction {
    LEFT = -1,
    NONE = 0,
    RIGHT = 1,
}
export declare class ShipEngine {
    static readonly MOVE_SPEED: number;
    static readonly SNAP_DELTA: number;
}
export declare class DriveParams {
    static readonly RENDER_OFFSET: number;
    static readonly LEVEL_BUFFER_START: number;
    static readonly LEVEL_BUFFER_END: number;
}
export declare enum Gem {
    'NONE' = 0,
    'GREEN' = 1,
    'COLLECTED' = 2,
    'BLACK' = 3,
}
/**
 * Parameters that determine the size of loudness bars rendered along the
 * track
 */
export declare class SliceBar {
    static readonly scaleX: number;
    static readonly scaleY: number;
    static readonly scaleZ: number;
    static readonly margin: number;
}
/**
 * Data types supported in a binary buffer constructed through Network Entities
 */
export declare enum DataType {
    'String' = 0,
    'Float' = 1,
    'Double' = 2,
    'Int8' = 3,
    'Int16' = 4,
    'Int32' = 5,
}
/**
 * The number of bytes each data type in a buffer occupies
 * @type {Map<DataType, number>}
 */
export declare const ByteSizes: Map<DataType, number>;
export declare type FieldType = DataType | number;
export declare type BufferFormat = Map<string, FieldType>;
export declare const TYPE_MASK = 15;
export declare const SIZE_MASK = 65520;
export declare const NUM_TYPE_BITS = 4;
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
export declare class DataFormat {
    static readonly NETWORK_ENTITY: BufferFormat;
    static readonly SHIP: BufferFormat;
    static readonly WARP_DRIVE: BufferFormat;
    static readonly POSITION: BufferFormat;
    static readonly SLICE_UPDATE: BufferFormat;
}
