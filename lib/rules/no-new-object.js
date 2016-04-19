/**
 * @fileoverview A rule to disallow calls to the Object constructor
 * @author Matt DuVall <http://www.mattduvall.com/>
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
            description: "disallow `Object` constructors",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: []
    },

    create: function(context) {

        return {

            "NewExpression": function(node) {
                if (node.callee.name === "Object") {
                    context.report(node, "The object literal notation {} is preferrable.");
                }
            }
        };

    }
};
