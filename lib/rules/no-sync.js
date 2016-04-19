/**
 * @fileoverview Rule to check for properties whose identifier ends with the string Sync
 * @author Matt DuVall<http://mattduvall.com/>
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

/* jshint node:true */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "MemberExpression": function(node) {
            var propertyName = node.property.name,
                syncRegex = /.*Sync$/;

            if (syncRegex.exec(propertyName) !== null) {
                context.report(node, "Unexpected sync method: '" + propertyName + "'.");
            }
        }
    };

};

module.exports.schema = [];
