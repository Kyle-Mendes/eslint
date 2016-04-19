/**
 * @fileoverview Rule to flag use of continue statement
 * @author Borislav Zhivkov
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `continue` statements",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: []
    },

    create: function(context) {

        return {
            "ContinueStatement": function(node) {
                context.report(node, "Unexpected use of continue statement");
            }
        };

    }
};
