/**
 * Created by Greg on 2/27/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
/**
 * @property connect
 * @property serverError
 * @property joinServer
 * @property disconnect
 * @property roomCreated
 * @property joinedRoom
 * @property leftRoom
 * @property userDetailsUpdate
 * @property requestUserDetails
 * @property syncNetworkEntity
 * @property serverPing
 * @property serverPong
 * @property clientPing
 * @property clientPong
 */
exports.IOEvent = enum_1.Enum([
    'connect',
    'joinServer',
    'disconnect',
    'serverError',
    'roomCreated',
    'joinedRoom',
    'leftRoom',
    'userDetailsUpdate',
    'requestUserDetails',
    'syncNetworkEntity',
    'serverPing',
    'serverPong',
    'clientPing',
    'clientPong',
]);
/**
 * @property requestMatch
 * @property requestJoin
 * @property matchListUpdate
 * @property matchCreated
 * @property joinedMatch
 * @property requestStart
 * @property requestLeave
 * @property matchStarted
 * @property requestEnd
 * @property matchEnded
 */
exports.MatchEvent = enum_1.Enum([
    'requestMatch',
    'requestJoin',
    'matchListUpdate',
    'matchCreated',
    'joinedMatch',
    'requestStart',
    'requestLeave',
    'matchStarted',
    'requestEnd',
    'matchEnded',
]);
/**
 * @property playStarted
 * @property command
 * @property shipSync
 */
exports.GameEvent = enum_1.Enum([
    'playStarted',
    'command',
    'shipSync',
]);
//# sourceMappingURL=event-types.js.map