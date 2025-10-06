/*:
 * @target MV MZ
 * @plugindesc Enable touch triggers for diagonal movement.
 * @author Caethyril
 * @url https://forums.rpgmakerweb.com/threads/176972/
 * @help Free to use and/or modify for any project, no credit required.
 */
// Patch - check touch trigger on failed diagonal movement.
;void (function(alias) {
"use strict";
  Game_CharacterBase.prototype.moveDiagonally = function(h, v) {
    alias.apply(this, arguments);
    if (!this.isMovementSucceeded()) {
      const x = $gameMap.roundXWithDirection(this._x, h);
      const y = $gameMap.roundYWithDirection(this._y, v);
      this.checkEventTriggerTouch(x, y);
    }
  };
})(Game_CharacterBase.prototype.moveDiagonally);