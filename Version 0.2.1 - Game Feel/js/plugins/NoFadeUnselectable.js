/*:
 * @plugindesc Disables fade effect for unselectable options in menus.
 * @author YourName
 */

(() => {
    const _Window_Selectable_drawItem = Window_Selectable.prototype.drawItem;
    Window_Selectable.prototype.drawItem = function(index) {
        const itemRect = this.itemRectForText(index);
        this.resetTextColor();
        this.changePaintOpacity(true); // Always full opacity
        this.drawText(this.commandName(index), itemRect.x, itemRect.y, itemRect.width, 'left');
    };
})();
