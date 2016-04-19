/**
 * @fileoverview Rule to remove var statement
 * @author Nicholas C. Zakas
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";


    var sourceCode = context.getSourceCode();

    return {

        "VariableDeclaration": function(node) {
            if (node.kind === "var") {
                context.report({
                    node: node,
                    message: "Bad var.",
                    fix: function(fixer) {
                        return fixer.remove(sourceCode.getFirstToken(node));
                    }
                })
            }
        }
    };

};
