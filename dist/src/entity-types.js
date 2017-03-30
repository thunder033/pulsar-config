/**
 * Created by Greg on 3/24/2017.
 */
"use strict";
/**
 * @property Room
 * @property Match
 * @property Ship
 * @property Client
 * @property Simulation
 * @property Player
 * @property WarpField
 * @property WarpDrive
 * @property Avatar
 */
var EntityType;
(function (EntityType) {
    EntityType[EntityType["Room"] = 0] = "Room";
    EntityType[EntityType["Match"] = 1] = "Match";
    EntityType[EntityType["Ship"] = 2] = "Ship";
    EntityType[EntityType["Client"] = 3] = "Client";
    EntityType[EntityType["Simulation"] = 4] = "Simulation";
    EntityType[EntityType["Player"] = 5] = "Player";
    EntityType[EntityType["WarpField"] = 6] = "WarpField";
    EntityType[EntityType["WarpDrive"] = 7] = "WarpDrive";
    EntityType[EntityType["Avatar"] = 8] = "Avatar";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
//# sourceMappingURL=entity-types.js.map