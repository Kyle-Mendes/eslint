/**
 * @fileoverview Restrict usage of specified node imports.
 * @author Guy Ellis
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    var restrictedImports = context.options;

    // if no imports are restricted we don"t need to check
    if (restrictedImports.length === 0) {
        return {};
    }

    return {
        "ImportDeclaration": function(node) {
            if (node && node.source && node.source.value) {

                var value = node.source.value.trim();

                if (restrictedImports.indexOf(value) !== -1) {
                    context.report(node, "'{{importName}}' import is restricted from being used.", {
                        importName: value
                    });
                }
            }
        }
    };
};

module.exports.schema = {
    "type": "array",
    "items": {
        "type": "string"
    },
    "uniqueItems": true
};
