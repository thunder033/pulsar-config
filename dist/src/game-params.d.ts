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
export declare class DataFormat {
    static readonly SHIP: Map<string, number>;
}
