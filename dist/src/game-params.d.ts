/**
 * Share client/server data structures
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
export declare enum DataType {
    'String' = 0,
    'Float' = 1,
    'Double' = 2,
    'Int8' = 3,
    'Int16' = 4,
    'Int32' = 5,
}
export declare const ByteSizes: Map<DataType, number>;
export declare class DataFormat {
    static readonly SHIP: Map<string, DataType>;
}
