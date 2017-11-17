/**
 * Created by gjr8050 on 3/8/2017.
 */
export interface Vector {
    w?: number;
    x: number;
    y: number;
    z?: number;
}
export declare class Vector3 implements Vector {
    static Zero: Vector3;
    static One: Vector3;
    x: number;
    y: number;
    z: number;
    /**
     * Add the 2 vectors
     * @param a {Vector3}
     * @param b {Vector3}
     * @returns {Vector3}
     */
    static add(a: Vector3, b: Vector3): Vector3;
    /**
     * Subtract b from a
     * @param a {Vector3}
     * @param b {Vector3}
     * @returns {Vector3}
     */
    static subtract(a: Vector3, b: Vector3): Vector3;
    /**
     * Creates a new vector by multiplying a and b
     * @param a {Vector3}
     * @param b {Vector3}
     * @returns {Vector3}
     */
    static mult(a: Vector3, b: Vector3): Vector3;
    /**
     * Creates a new vector by scaling a by scalar
     * @param a {Vector3}
     * @param scalar {number}
     * @returns {Vector3}
     */
    static scale(a: Vector3, scalar: number): Vector3;
    /**
     * A simple vector class
     * @param x
     * @param y
     * @param z
     * @constructor
     */
    constructor(x?: number, y?: number, z?: number);
    /**
     * Creates a shallow copy of the vector
     * @returns {Vector3}
     */
    clone(): Vector3;
    /**
     * Set the vector components to those provided
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {Vector3}
     */
    set(x?: number | Vector3, y?: number, z?: number): Vector3;
    /**
     * Add the given vector to this one
     * @param addend {Vector3}
     */
    add(addend: Vector3): Vector3;
    /**
     * Subtract the given vector to this one
     * @param addend {Vector3}
     */
    subtract(addend: Vector3): Vector3;
    /**
     * Scale the vector by the scalar
     * @param scalar
     * @returns {*}
     */
    scale(scalar: number): Vector3;
    /**
     * Multiplies each component of the 2 vectors
     * @param factor {number}
     * @returns {*}
     */
    mult(factor: Vector3): Vector3;
    /**
     * Calculates the cross product of the vector and b
     * @param b {Vector3}
     * @returns {Vector3}
     */
    cross(b: Vector3): Vector3;
    /**
     * Calculate the dot product of the vector and b
     * @param b {Vector3}
     * @returns {number}
     */
    dot(b: Vector3): number;
    /**
     * Get the length of the vector
     * @returns {number}
     */
    len(): number;
    /**
     * Get the lengths squared of the vector
     * @returns {number}
     */
    len2(): number;
    /**
     * Normalize the vector
     * @returns {Vector3}
     */
    normalize(): Vector3;
    /**
     * Create a unit vector from this vector (normalized and positive)
     * @returns {Vector3}
     */
    unit(): Vector3;
    /**
     * Create a string representation of the vector
     * @returns {string}
     */
    toString(): string;
    toBuffer(): Float32Array;
}
export declare class Vector2 implements Vector {
    static Zero: Vector2;
    static One: Vector2;
    x: number;
    y: number;
    /**
     * Add the 2 vectors
     * @param a {Vector2}
     * @param b {Vector2}
     * @returns {Vector2}
     */
    static add(a: Vector2, b: Vector2): Vector2;
    /**
     * Subtract b from a
     * @param a {Vector2}
     * @param b {Vector2}
     * @returns {Vector2}
     */
    static subtract(a: Vector2, b: Vector2): Vector2;
    /**
     * Creates a new vector by multiplying a and b
     * @param a {Vector2}
     * @param b {Vector2}
     * @returns {Vector2}
     */
    static mult(a: Vector2, b: Vector2): Vector2;
    /**
     * Creates a new vector by scaling a by scalar
     * @param a {Vector3}
     * @param scalar {number}
     * @returns {Vector3}
     */
    static scale(a: Vector2, scalar: number): Vector2;
    /**
     * A simple vector class
     * @param x
     * @param y
     * @constructor
     */
    constructor(x?: number, y?: number);
    /**
     * Creates a shallow copy of the vector
     * @returns {Vector3}
     */
    clone(): Vector2;
    /**
     * Set the vector components to those provided
     * @param {number|Vector2} x
     * @param {number} [y]
     * @returns {Vector2}
     */
    set(x?: number | Vector2 | Vector3, y?: number): Vector2;
    /**
     * Add the given vector to this one
     * @param addend {Vector2}
     */
    add(addend: Vector2): Vector2;
    /**
     * Subtract the given vector to this one
     * @param addend {Vector2}
     */
    subtract(addend: Vector2): Vector2;
    /**
     * Scale the vector by the scalar
     * @param scalar
     * @returns {*}
     */
    scale(scalar: number): Vector2;
    /**
     * Multiplies each component of the 2 vectors
     * @param factor {number}
     * @returns {*}
     */
    mult(factor: Vector2): Vector2;
    /**
     * Calculate the dot product of the vector and b
     * @param b {Vector2}
     * @returns {number}
     */
    dot(b: Vector2): number;
    /**
     * Get the length of the vector
     * @returns {number}
     */
    len(): number;
    /**
     * Get the lengths squared of the vector
     * @returns {number}
     */
    len2(): number;
    /**
     * Normalize the vector
     * @returns {Vector2}
     */
    normalize(): Vector2;
    /**
     * Create a unit vector from this vector (normalized and positive)
     * @returns {Vector2}
     */
    unit(): Vector2;
    /**
     * Create a string representation of the vector
     * @returns {string}
     */
    toString(): string;
    toBuffer(): Float32Array;
}
