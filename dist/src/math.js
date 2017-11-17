/**
 * Created by gjr8050 on 3/8/2017.
 */
"use strict";
class Vector3 {
    /**
     * A simple vector class
     * @param x
     * @param y
     * @param z
     * @constructor
     */
    constructor(x, y, z) {
        this.x = x || 0;
        this.y = typeof y === 'number' ? y : x || 0;
        this.z = typeof z === 'number' ? z : x || 0;
        Object.seal(this);
    }
    /**
     * Add the 2 vectors
     * @param a {Vector3}
     * @param b {Vector3}
     * @returns {Vector3}
     */
    static add(a, b) {
        return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
    }
    /**
     * Subtract b from a
     * @param a {Vector3}
     * @param b {Vector3}
     * @returns {Vector3}
     */
    static subtract(a, b) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
    }
    /**
     * Creates a new vector by multiplying a and b
     * @param a {Vector3}
     * @param b {Vector3}
     * @returns {Vector3}
     */
    static mult(a, b) {
        return new Vector3(a.x * b.x, a.y * b.y, a.z * b.z);
    }
    /**
     * Creates a new vector by scaling a by scalar
     * @param a {Vector3}
     * @param scalar {number}
     * @returns {Vector3}
     */
    static scale(a, scalar) {
        return new Vector3(a.x * scalar, a.y * scalar, a.z * scalar);
    }
    /**
     * Creates a shallow copy of the vector
     * @returns {Vector3}
     */
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    /**
     * Set the vector components to those provided
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {Vector3}
     */
    set(x, y, z) {
        if (x instanceof Vector3) {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
        }
        else {
            this.x = x || 0;
            this.y = typeof y === 'number' ? y : x || 0;
            this.z = typeof z === 'number' ? z : x || 0;
        }
        return this;
    }
    /**
     * Add the given vector to this one
     * @param addend {Vector3}
     */
    add(addend) {
        this.x += addend.x;
        this.y += addend.y;
        this.z += addend.z;
        return this;
    }
    /**
     * Subtract the given vector to this one
     * @param addend {Vector3}
     */
    subtract(addend) {
        this.x -= addend.x;
        this.y -= addend.y;
        this.z -= addend.z;
        return this;
    }
    /**
     * Scale the vector by the scalar
     * @param scalar
     * @returns {*}
     */
    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    /**
     * Multiplies each component of the 2 vectors
     * @param factor {number}
     * @returns {*}
     */
    mult(factor) {
        this.x *= factor.x;
        this.y *= factor.y;
        this.z *= factor.z;
        return this;
    }
    /**
     * Calculates the cross product of the vector and b
     * @param b {Vector3}
     * @returns {Vector3}
     */
    cross(b) {
        return new Vector3(this.y * b.z - this.z * b.y, this.z * b.x - this.x * b.z, this.x * b.y - this.y * b.x);
    }
    /**
     * Calculate the dot product of the vector and b
     * @param b {Vector3}
     * @returns {number}
     */
    dot(b) {
        return this.x * b.x + this.y * b.y + this.z * b.z;
    }
    /**
     * Get the length of the vector
     * @returns {number}
     */
    len() {
        return Math.sqrt(this.len2());
    }
    /**
     * Get the lengths squared of the vector
     * @returns {number}
     */
    len2() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    /**
     * Normalize the vector
     * @returns {Vector3}
     */
    normalize() {
        const len = this.len() || 1;
        return new Vector3(this.x / len, this.y / len, this.z / len);
    }
    /**
     * Create a unit vector from this vector (normalized and positive)
     * @returns {Vector3}
     */
    unit() {
        const len = this.len() || 1;
        return new Vector3(Math.abs(this.x / len), Math.abs(this.y / len), Math.abs(this.z / len));
    }
    /**
     * Create a string representation of the vector
     * @returns {string}
     */
    toString() {
        return `{${this.x.toFixed(length)}, ${this.y.toFixed(length)}, ${this.z.toFixed(length)}}`;
    }
    toBuffer() {
        const buffer = new Float32Array(3);
        buffer[0] = this.x;
        buffer[1] = this.y;
        buffer[2] = this.z;
        return buffer;
    }
}
Vector3.Zero = Object.freeze(new Vector3(0));
Vector3.One = Object.freeze(new Vector3(1));
exports.Vector3 = Vector3;
class Vector2 {
    /**
     * A simple vector class
     * @param x
     * @param y
     * @constructor
     */
    constructor(x, y) {
        this.x = x || 0;
        this.y = typeof y === 'number' ? y : x || 0;
        Object.seal(this);
    }
    /**
     * Add the 2 vectors
     * @param a {Vector2}
     * @param b {Vector2}
     * @returns {Vector2}
     */
    static add(a, b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }
    /**
     * Subtract b from a
     * @param a {Vector2}
     * @param b {Vector2}
     * @returns {Vector2}
     */
    static subtract(a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }
    /**
     * Creates a new vector by multiplying a and b
     * @param a {Vector2}
     * @param b {Vector2}
     * @returns {Vector2}
     */
    static mult(a, b) {
        return new Vector2(a.x * b.x, a.y * b.y);
    }
    /**
     * Creates a new vector by scaling a by scalar
     * @param a {Vector3}
     * @param scalar {number}
     * @returns {Vector3}
     */
    static scale(a, scalar) {
        return new Vector2(a.x * scalar, a.y * scalar);
    }
    /**
     * Creates a shallow copy of the vector
     * @returns {Vector3}
     */
    clone() {
        return new Vector2(this.x, this.y);
    }
    /**
     * Set the vector components to those provided
     * @param {number|Vector2} x
     * @param {number} [y]
     * @returns {Vector2}
     */
    set(x, y) {
        if (x instanceof Vector2 || x instanceof Vector3) {
            this.x = x.x;
            this.y = x.y;
        }
        else {
            this.x = x || 0;
            this.y = typeof y === 'number' ? y : x || 0;
        }
        return this;
    }
    /**
     * Add the given vector to this one
     * @param addend {Vector2}
     */
    add(addend) {
        this.x += addend.x;
        this.y += addend.y;
        return this;
    }
    /**
     * Subtract the given vector to this one
     * @param addend {Vector2}
     */
    subtract(addend) {
        this.x -= addend.x;
        this.y -= addend.y;
        return this;
    }
    /**
     * Scale the vector by the scalar
     * @param scalar
     * @returns {*}
     */
    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    /**
     * Multiplies each component of the 2 vectors
     * @param factor {number}
     * @returns {*}
     */
    mult(factor) {
        this.x *= factor.x;
        this.y *= factor.y;
        return this;
    }
    // /**
    //  * Calculates the cross produce of the vector and b
    //  * @param b {Vector2}
    //  * @returns {Vector2}
    //  */
    // public cross(b: Vector2): Vector2 {
    //     return new Vector2(
    //         this.y * b.z - this.z * b.y,
    //         this.x * b.y - this.y * b.x,
    //     );
    // }
    /**
     * Calculate the dot product of the vector and b
     * @param b {Vector2}
     * @returns {number}
     */
    dot(b) {
        return this.x * b.x + this.y * b.y;
    }
    /**
     * Get the length of the vector
     * @returns {number}
     */
    len() {
        return Math.sqrt(this.len2());
    }
    /**
     * Get the lengths squared of the vector
     * @returns {number}
     */
    len2() {
        return this.x * this.x + this.y * this.y;
    }
    /**
     * Normalize the vector
     * @returns {Vector2}
     */
    normalize() {
        const len = this.len() || 1;
        return new Vector2(this.x / len, this.y / len);
    }
    /**
     * Create a unit vector from this vector (normalized and positive)
     * @returns {Vector2}
     */
    unit() {
        const len = this.len() || 1;
        return new Vector2(Math.abs(this.x / len), Math.abs(this.y / len));
    }
    /**
     * Create a string representation of the vector
     * @returns {string}
     */
    toString() {
        return `{${this.x}, ${this.y}}`;
    }
    toBuffer() {
        const buffer = new Float32Array(2);
        buffer[0] = this.x;
        buffer[1] = this.y;
        return buffer;
    }
}
Vector2.Zero = Object.freeze(new Vector2(0));
Vector2.One = Object.freeze(new Vector2(1));
exports.Vector2 = Vector2;
//# sourceMappingURL=math.js.map