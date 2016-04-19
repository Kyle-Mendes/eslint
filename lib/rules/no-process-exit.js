/**
 * @fileoverview Disallow the use of process.exit()
 * @author Nicholas C. Zakas
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "CallExpression": function(node) {
            var callee = node.callee;

            if (callee.type === "MemberExpression" && callee.object.name === "process" &&
                callee.property.name === "exit"
            ) {
                context.report(node, "Don't use process.exit(); throw an error instead.");
            }
        }

    };

};

module.exports.schema = [];
