import { only, skip, slow, suite, test, timeout } from 'mocha-typescript';
import { expect } from 'chai';
import {Vector2, Vector3} from '../../src/math';

// tslint:disable:member-access
@suite class Vector3Spec {
    @test '::constructor creates a vector'() {
        // test with 0 here to test for proper substitution
        const a = new Vector3(1, 2, 0);
        expect(a.x).to.equal(1);
        expect(a.y).to.equal(2);
        expect(a.z).to.equal(0);
    }

    @test '::constructor creates zero vector be default'() {
        const a = new Vector3();
        expect(a.x).to.equal(0);
        expect(a.y).to.equal(0);
        expect(a.z).to.equal(0);
    }

    @test '::constructor substitutes x for y/z in absence of params'() {
        const a = new Vector3(1.5);
        expect(a.x).to.equal(1.5);
        expect(a.y).to.equal(1.5);
        expect(a.z).to.equal(1.5);

        const b = new Vector3(1.5, 0);
        expect(b.x).to.equal(1.5);
        expect(b.y).to.equal(0);
        expect(b.z).to.equal(1.5);
    }

    @test '::constructor handles empty parameter values'() {
        const a = new Vector3(1.5, null, undefined);
        expect(a.x).to.equal(1.5);
        expect(a.y).to.equal(1.5);
        expect(a.z).to.equal(1.5);

        const b = new Vector3(null, null, undefined);
        expect(b.x).to.equal(0);
        expect(b.y).to.equal(0);
        expect(b.z).to.equal(0);
    }

    @test '::clone creates a new vector with same components'() {
        const a = new Vector3(1, 2, 3);
        const b = a.clone();

        a.x = 4;
        expect(b.x).to.equal(1);
        expect(b.y).to.equal(2);
        expect(b.z).to.equal(3);
    }

    @test '::set Sets the components of the vector'() {
        const a  = new Vector3(1, 2, 3);
        a.set(5, 3, 0);

        expect(a.x).to.equal(5);
        expect(a.y).to.equal(3);
        expect(a.z).to.equal(0);

        a.set(new Vector3(6));
        expect(a.x).to.equal(6);
        expect(a.y).to.equal(6);
        expect(a.z).to.equal(6);
    }

    @test '::set handles empty parameter values'() {
        const a  = new Vector3(1, 2, 3);
        a.set(1.5, null, undefined);
        expect(a.x).to.equal(1.5);
        expect(a.y).to.equal(1.5);
        expect(a.z).to.equal(1.5);

        a.set(null, null, undefined);
        expect(a.x).to.equal(0);
        expect(a.y).to.equal(0);
        expect(a.z).to.equal(0);
    }

    @test '::add adds vector components and returns vector'() {
        const a  = new Vector3(1, 2, 3);
        expect(a.add(new Vector3(3, 4, 0))).to.equal(a);
        expect(a.x).to.equal(4);
        expect(a.y).to.equal(6);
        expect(a.z).to.equal(3);
    }

    @test '::subtract subtracts vector components and returns vector'() {
        const a  = new Vector3(1, 2, 3);
        expect(a.subtract(new Vector3(3, 4, 0))).to.equal(a);
        expect(a.x).to.equal(-2);
        expect(a.y).to.equal(-2);
        expect(a.z).to.equal(3);
    }

    @test '::scale scales by scalar and returns vector'() {
        const a  = new Vector3(1, 2, -3);
        expect(a.scale(3)).to.equal(a);
        expect(a.x).to.equal(3);
        expect(a.y).to.equal(6);
        expect(a.z).to.equal(-9);
    }

    @test '::mult multiplies vector components and returns vector'() {
        const a  = new Vector3(1, 2, 3);
        expect(a.mult(new Vector3(3, 4, 0))).to.equal(a);
        expect(a.x).to.equal(3);
        expect(a.y).to.equal(8);
        expect(a.z).to.equal(0);
    }

    @test '::cross calculate cross product and returns new result'() {
        const a = new Vector3(1, 2, 3);
        const b = new Vector3(1, 5, 7);
        const result = a.cross(b);
        expect(result).to.be.instanceof(Vector3).and.not.equal(a).and.not.equal(b);
        expect(result.x).to.equal(-1);
        expect(result.y).to.equal(-4);
        expect(result.z).to.equal(3);

        expect(a.x).to.equal(1);
        expect(a.y).to.equal(2);
        expect(a.z).to.equal(3);

        expect(b.x).to.equal(1);
        expect(b.y).to.equal(5);
        expect(b.z).to.equal(7);
    }

    @test '::dot calculate dot product and returns result'() {
        const a = new Vector3(1, 2, 3);
        const b = new Vector3(1, 5, 7);

        const result = a.dot(b);
        expect(result).to.equal(32);

        expect(a.x).to.equal(1);
        expect(a.y).to.equal(2);
        expect(a.z).to.equal(3);

        expect(b.x).to.equal(1);
        expect(b.y).to.equal(5);
        expect(b.z).to.equal(7);
    }

    @test '::len calculates length of a'() {
        const a = new Vector3(1, 2, 3);
        const length = Math.sqrt(1 + 4 + 9);
        expect(a.len()).equal(length);
    }

    @test '::len2 calculates length squared'() {
        const a = new Vector3(1, 2, 3);
        const length2 = 1 + 4 + 9;
        expect(a.len2()).equal(length2);
    }

    @test '::normalize returns a new normalized vector'() {
        const a = new Vector3(1, -2, 3);
        const l = Math.sqrt(1 + 4 + 9);
        const n = a.normalize();

        // kinda redundant, but just to be safe w/o more complex assertions
        expect(l).to.not.equal(1);
        expect(n.len()).to.equal(1);
        expect(n.x).to.equal(a.x / l);
        expect(n.y).to.equal(a.y / l);
        expect(n.z).to.equal(a.z / l);
    }

    @test '::normalize handles zero length vectors without erroring'() {
        const a = new Vector3(0);
        const n = a.normalize();

        // redundant, but just to be safe w/o more complex assertions
        expect(n.x).to.equal(0);
        expect(n.y).to.equal(0);
        expect(n.z).to.equal(0);
    }

    @test '::unit returns a new unit vector'() {
        const a = new Vector3(1, -2, 3);
        const l = Math.sqrt(1 + 4 + 9);
        const u = a.unit();

        expect(u.len()).to.equal(1);
        expect(u.x).to.equal(Math.abs(a.x / l));
        expect(u.y).to.equal(Math.abs(a.y / l));
        expect(u.z).to.equal(Math.abs(a.z / l));
    }

    @test '::unit handles zero length vectors without erroring'() {
        const a = new Vector3(0);
        const u = a.unit();

        expect(u.x).to.equal(0);
        expect(u.y).to.equal(0);
        expect(u.z).to.equal(0);
    }

    @test '::toBuffer returns array of vector components'() {
        const a = new Vector3(1, 2, -3);
        const buffer = a.toBuffer();
        expect(buffer).to.be.instanceOf(Float32Array).and.to.have.lengthOf(3);
        expect(buffer[0]).to.equal(1);
        expect(buffer[1]).to.equal(2);
        expect(buffer[2]).to.equal(-3);
    }

    @test 'Vector3 has static shortcuts to common vectors'() {
        expect(Vector3.Zero).to.be.instanceof(Vector3);
        expect(Vector3.Zero.len2(), 'Vector3.Zero Length^2').to.equal(0);

        expect(Vector3.One).to.be.instanceof(Vector3);
        expect(Vector3.One.len2(), 'Vector3.One Length^2').to.equal(3);
    }

    @test '.add Adds two vectors'() {
        const a = new Vector3(1, 2, 3);
        const b = new Vector3(1, 2, 3);
        const result = Vector3.add(a, b);

        expect(result.x).to.eq(2);
        expect(result.y).to.eq(4);
        expect(result.z).to.eq(6);
    }

    @test '.add returns a new vector'() {
        const a = new Vector3(1, 2, 3);
        const b = new Vector3(1, 2, 3);
        const result = Vector3.add(a, b);

        a.x = 5;
        expect(result.x).to.eq(2);
        b.x = 7;
        expect(result.x).to.eq(2);
    }

    @test '.subtract Subtracts two vectors'() {
        const a = new Vector3(1, 2, 3);
        const b = new Vector3(1, 1, 4);
        const result = Vector3.subtract(a, b);

        expect(result.x).to.eq(0);
        expect(result.y).to.eq(1);
        expect(result.z).to.eq(-1);
    }

    @test '.subtract returns a new vector'() {
        const a = new Vector3(1, 2, 3);
        const b = new Vector3(1, 1, 2);
        const result = Vector3.subtract(a, b);

        a.x = 5;
        expect(result.x).to.eq(0);
        b.x = 7;
        expect(result.x).to.eq(0);
    }

    @test '.mult Multiplies two vectors'() {
        const a = new Vector3(1, 2, -3);
        const b = new Vector3(1, 2, 3);
        const result = Vector3.mult(a, b);

        expect(result.x).to.eq(1);
        expect(result.y).to.eq(4);
        expect(result.z).to.eq(-9);
    }

    @test '.mult returns a new vector'() {
        const a = new Vector3(1, 2, -3);
        const b = new Vector3(1, 2, 3);
        const result = Vector3.mult(a, b);

        a.x = 5;
        expect(result.x).to.eq(1);
        b.x = 7;
        expect(result.x).to.eq(1);
    }

    @test '.scale Scales a vector by a scalar'() {
        const a = new Vector3(1, 2, -3);
        const s = 2.5;
        const result = Vector3.scale(a, s);

        expect(result.x).to.eq(2.5);
        expect(result.y).to.eq(5);
        expect(result.z).to.eq(-7.5);
    }

    @test '.scale returns a new vector'() {
        const a = new Vector3(1, 2, -3);
        const s = 2.5;
        const result = Vector3.scale(a, s);

        a.x = 4;
        expect(result.x).to.eq(2.5);
    }
}

@suite class Vector2Spec {
    @test '::constructor creates a vector'() {
        // test with 0 here to test for proper substitution
        const a = new Vector2(1, 0);
        expect(a.x).to.equal(1);
        expect(a.y).to.equal(0);
    }

    @test '::constructor creates zero vector be default'() {
        const a = new Vector2();
        expect(a.x).to.equal(0);
        expect(a.y).to.equal(0);
    }

    @test '::constructor substitutes x for y/z in absence of params'() {
        const a = new Vector2(1.5);
        expect(a.x).to.equal(1.5);
        expect(a.y).to.equal(1.5);

        const b = new Vector2(1.5, 0);
        expect(b.x).to.equal(1.5);
        expect(b.y).to.equal(0);
    }

    @test '::constructor handles empty parameter values'() {
        const a = new Vector2(1.5, null);
        expect(a.x).to.equal(1.5);
        expect(a.y).to.equal(1.5);

        const b = new Vector2(null, undefined);
        expect(b.x).to.equal(0);
        expect(b.y).to.equal(0);
    }

    @test '::clone creates a new vector with same components'() {
        const a = new Vector2(1, 2);
        const b = a.clone();

        a.x = 4;
        expect(b.x).to.equal(1);
        expect(b.y).to.equal(2);
    }

    @test '::set Sets the components of the vector'() {
        const a  = new Vector2(1, 2);
        a.set(5, 0);

        expect(a.x).to.equal(5);
        expect(a.y).to.equal(0);

        a.set(new Vector3(6));
        expect(a.x).to.equal(6);
        expect(a.y).to.equal(6);
    }

    @test '::set handles empty parameter values'() {
        const a  = new Vector2(1, 3);
        a.set(1.5, null);
        expect(a.x).to.equal(1.5);
        expect(a.y).to.equal(1.5);

        a.set(null, undefined);
        expect(a.x).to.equal(0);
        expect(a.y).to.equal(0);
    }

    @test '::add adds vector components and returns vector'() {
        const a  = new Vector2(1, 2);
        expect(a.add(new Vector2(3, 0))).to.equal(a);
        expect(a.x).to.equal(4);
        expect(a.y).to.equal(2);
    }

    @test '::subtract subtracts vector components and returns vector'() {
        const a  = new Vector2(1, 2);
        expect(a.subtract(new Vector2(3, 4))).to.equal(a);
        expect(a.x).to.equal(-2);
        expect(a.y).to.equal(-2);
    }

    @test '::scale scales by scalar and returns vector'() {
        const a  = new Vector2(1, -2);
        expect(a.scale(3)).to.equal(a);
        expect(a.x).to.equal(3);
        expect(a.y).to.equal(-6);
    }

    @test '::mult multiplies vector components and returns vector'() {
        const a  = new Vector2(1, -2);
        expect(a.mult(new Vector2(3, 4))).to.equal(a);
        expect(a.x).to.equal(3);
        expect(a.y).to.equal(-8);
    }

    @test '::dot calculate dot product and returns result'() {
        const a = new Vector2(1, 2);
        const b = new Vector2(1, 5);

        const result = a.dot(b);
        expect(result).to.equal(11);

        expect(a.x).to.equal(1);
        expect(a.y).to.equal(2);

        expect(b.x).to.equal(1);
        expect(b.y).to.equal(5);
    }

    @test '::len calculates length of a'() {
        const a = new Vector2(1, 2);
        const length = Math.sqrt(1 + 4);
        expect(a.len()).equal(length);
    }

    @test '::len2 calculates length squared'() {
        const a = new Vector2(1, 2);
        const length2 = 1 + 4;
        expect(a.len2()).equal(length2);
    }

    @test '::normalize returns a new normalized vector'() {
        const a = new Vector2(1, -2);
        const l = Math.sqrt(1 + 4);
        const n = a.normalize();

        // kinda redundant, but just to be safe w/o more complex assertions
        const delta = .01;
        expect(l).to.not.equal(1);
        expect(n.len()).to.be.closeTo(1, delta);
        expect(n.x).to.be.closeTo(a.x / l, delta);
        expect(n.y).to.be.closeTo(a.y / l, delta);
    }

    @test '::normalize handles zero length vectors without erroring'() {
        const a = new Vector2(0);
        const n = a.normalize();

        // redundant, but just to be safe w/o more complex assertions
        expect(n.x).to.equal(0);
        expect(n.y).to.equal(0);
    }

    @test '::unit returns a new unit vector'() {
        const a = new Vector2(1, -2);
        const l = Math.sqrt(1 + 4);
        const u = a.unit();

        const delta = .01;
        expect(u.len()).to.be.closeTo(1, delta);
        expect(u.x).to.be.closeTo(Math.abs(a.x / l), delta);
        expect(u.y).to.be.closeTo(Math.abs(a.y / l), delta);
    }

    @test '::unit handles zero length vectors without erroring'() {
        const a = new Vector2(0);
        const u = a.unit();

        expect(u.x).to.equal(0);
        expect(u.y).to.equal(0);
    }

    @test '::toBuffer returns array of vector components'() {
        const a = new Vector2(1, -2);
        const buffer = a.toBuffer();
        expect(buffer).to.be.instanceOf(Float32Array).and.to.have.lengthOf(2);
        expect(buffer[0]).to.equal(1);
        expect(buffer[1]).to.equal(-2);
    }

    @test 'Vector2 has static shortcuts to common vectors'() {
        expect(Vector2.Zero).to.be.instanceof(Vector2);
        expect(Vector2.Zero.len2(), 'Vector2.Zero Length^2').to.equal(0);

        expect(Vector2.One).to.be.instanceof(Vector2);
        expect(Vector2.One.len2(), 'Vector2.One Length^2').to.equal(2);
    }

    @test '.add Adds two vectors'() {
        const a = new Vector2(1, 2);
        const b = new Vector2(1, 2);
        const result = Vector2.add(a, b);

        expect(result.x).to.eq(2);
        expect(result.y).to.eq(4);
    }

    @test '.add returns a new vector'() {
        const a = new Vector2(1, 2);
        const b = new Vector2(1, 2);
        const result = Vector2.add(a, b);

        a.x = 5;
        expect(result.x).to.eq(2);
        b.x = 7;
        expect(result.x).to.eq(2);
    }

    @test '.subtract Subtracts two vectors'() {
        const a = new Vector2(1, 2);
        const b = new Vector2(1, 1);
        const result = Vector2.subtract(a, b);

        expect(result.x).to.eq(0);
        expect(result.y).to.eq(1);
    }

    @test '.subtract returns a new vector'() {
        const a = new Vector2(1, 2);
        const b = new Vector2(1, 1);
        const result = Vector2.subtract(a, b);

        a.x = 5;
        expect(result.x).to.eq(0);
        b.x = 7;
        expect(result.x).to.eq(0);
    }

    @test '.mult Multiplies two vectors'() {
        const a = new Vector2(1, -2);
        const b = new Vector2(1, 2);
        const result = Vector2.mult(a, b);

        expect(result.x).to.eq(1);
        expect(result.y).to.eq(-4);
    }

    @test '.mult returns a new vector'() {
        const a = new Vector2(1, -2);
        const b = new Vector2(1, 2);
        const result = Vector2.mult(a, b);

        a.x = 5;
        expect(result.x).to.eq(1);
        b.x = 7;
        expect(result.x).to.eq(1);
    }

    @test '.scale Scales a vector by a scalar'() {
        const a = new Vector2(1, -2);
        const s = 2.5;
        const result = Vector2.scale(a, s);

        expect(result.x).to.eq(2.5);
        expect(result.y).to.eq(-5);
    }

    @test '.scale returns a new vector'() {
        const a = new Vector2(1, -2);
        const s = 2.5;
        const result = Vector2.scale(a, s);

        a.x = 4;
        expect(result.x).to.eq(2.5);
    }
}
