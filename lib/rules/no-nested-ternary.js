/**
 * @fileoverview Rule to flag nested ternary expressions
 * @author Ian Christian Myers
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
            description: "disallow nested ternary expressions",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: []
    },

    create: function(context) {

        return {
            "ConditionalExpression": function(node) {
                if (node.alternate.type === "ConditionalExpression" ||
                        node.consequent.type === "ConditionalExpression") {
                    context.report(node, "Do not nest ternary expressions");
                }
            }
        };
    }
};
