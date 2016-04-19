/**
 * @fileoverview Rule to check for the usage of var.
 * @author Jamund Ferguson
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        "VariableDeclaration": function(node) {
            if (node.kind === "var") {
                context.report(node, "Unexpected var, use let or const instead.");
            }
        }

    };

};

module.exports.schema = [];
