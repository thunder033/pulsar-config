/**
 * Created by Greg on 4/22/2017.
 */
import { only, skip, slow, suite, test, timeout } from 'mocha-typescript';
import { expect } from 'chai';
import {
    bufferArray, ByteSizes, DataType, getFieldSize, getPrimitiveType,
    overrideSize,
} from '../../src/game-params';

const testSize1 = 15;
const testSize2 = 5;
// tslint:disable:member-access
@suite class GameParamsSpec {
    private testBasicType: number = DataType.Int32;
    private testOverrideSize: number = overrideSize(DataType.String, testSize1);
    private testBufferArray: number = bufferArray(DataType.Int16, testSize2);

    @test 'parses binary field sizes'() {
        expect(getFieldSize(this.testBasicType), 'basic').to.equal(ByteSizes.get(DataType.Int32));
        expect(getFieldSize(this.testOverrideSize), 'override').to.equal(testSize1);
        expect(getFieldSize(this.testBufferArray), 'array').to.equal(testSize2 * ByteSizes.get(DataType.Int16));
    };

    @test 'parses binary primitive types'() {
        expect(getPrimitiveType(this.testBasicType), 'basic').to.equal(DataType.Int32);
        expect(getPrimitiveType(this.testOverrideSize), 'override').to.equal(DataType.String);
        expect(getPrimitiveType(this.testBufferArray), 'array').to.equal(DataType.Int16);
    }
}
