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
 * @property requestRooms
 */
export declare const IOEvent: {
    connect: "connect";
    joinServer: "joinServer";
    disconnect: "disconnect";
    serverError: "serverError";
    roomCreated: "roomCreated";
    joinedRoom: "joinedRoom";
    leftRoom: "leftRoom";
    userDetailsUpdate: "userDetailsUpdate";
    requestUserDetails: "requestUserDetails";
    syncNetworkEntity: "syncNetworkEntity";
    serverPing: "serverPing";
    serverPong: "serverPong";
    clientPing: "clientPing";
    clientPong: "clientPong";
    requestRooms: "requestRooms";
};
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
export declare const MatchEvent: {
    requestMatch: "requestMatch";
    requestJoin: "requestJoin";
    matchListUpdate: "matchListUpdate";
    matchCreated: "matchCreated";
    joinedMatch: "joinedMatch";
    requestStart: "requestStart";
    requestLeave: "requestLeave";
    matchStarted: "matchStarted";
    requestEnd: "requestEnd";
    matchEnded: "matchEnded";
};
/**
 * @property playStarted
 * @property command
 * @property shipSync
 */
export declare const GameEvent: {
    playStarted: "playStarted";
    command: "command";
    shipSync: "shipSync";
};
