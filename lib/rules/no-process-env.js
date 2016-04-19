/**
 * @fileoverview Disallow the use of process.env()
 * @author Vignesh Anand
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "MemberExpression": function(node) {
            var objectName = node.object.name,
                propertyName = node.property.name;

            if (objectName === "process" && !node.computed && propertyName && propertyName === "env") {
                context.report(node, "Unexpected use of process.env.");
            }

        }

    };

};

module.exports.schema = [];
