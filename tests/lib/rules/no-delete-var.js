/**
 * @fileoverview Tests for no-delete-var rule.
 * @author Ilya Volodin
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-delete-var"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("no-delete-var", rule, {
    valid: [
        "delete x.prop;"
    ],
    invalid: [
        { code: "delete x", errors: [{ message: "Variables should not be deleted.", type: "UnaryExpression"}] }
    ]
});
