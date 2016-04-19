/**
 * @fileoverview Rule to flag use of eval() statement
 * @author Nicholas C. Zakas
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "CallExpression": function(node) {
            if (node.callee.name === "eval") {
                context.report(node, "eval sucks.");
            }
        }
    };

};
