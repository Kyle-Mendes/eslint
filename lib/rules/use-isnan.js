/**
 * @fileoverview Rule to flag comparisons to the value NaN
 * @author James Allardice
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        "BinaryExpression": function(node) {
            if (/^(?:[<>]|[!=]=)=?$/.test(node.operator) && (node.left.name === "NaN" || node.right.name === "NaN")) {
                context.report(node, "Use the isNaN function to compare with NaN.");
            }
        }
    };

};

module.exports.schema = [];
