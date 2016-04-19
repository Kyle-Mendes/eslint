/**
 * @fileoverview Rule to flag use of a debugger statement
 * @author Nicholas C. Zakas
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
            description: "disallow the use of `debugger`",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create: function(context) {

        return {
            "DebuggerStatement": function(node) {
                context.report(node, "Unexpected 'debugger' statement.");
            }
        };

    }
};
