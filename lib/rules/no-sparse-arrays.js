/**
 * @fileoverview Disallow sparse arrays
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

        "ArrayExpression": function(node) {

            var emptySpot = node.elements.indexOf(null) > -1;

            if (emptySpot) {
                context.report(node, "Unexpected comma in middle of array.");
            }
        }

    };

};

module.exports.schema = [];
