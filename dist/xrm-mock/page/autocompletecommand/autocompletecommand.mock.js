"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutoCompleteCommandMock = /** @class */ (function () {
    function AutoCompleteCommandMock(id, label, icon, action) {
        this.id = id;
        this.label = label;
        this.icon = icon;
        this.action = action;
    }
    AutoCompleteCommandMock.prototype.action = function () {
        throw new Error(("action not implemented."));
    };
    return AutoCompleteCommandMock;
}());
exports.AutoCompleteCommandMock = AutoCompleteCommandMock;
//# sourceMappingURL=autocompletecommand.mock.js.map