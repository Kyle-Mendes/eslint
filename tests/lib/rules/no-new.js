/**
 * @fileoverview Tests for no-new rule.
 * @author Ilya Volodin
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-new"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("no-new", rule, {
    valid: [
        "var a = new Date()",
        "var a; if (a === new Date()) { a = false; }"
    ],
    invalid: [
        { code: "new Date()", errors: [{ message: "Do not use 'new' for side effects.", type: "ExpressionStatement"}] }
    ]
});
