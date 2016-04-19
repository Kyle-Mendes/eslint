/**
 * @fileoverview Tests for no-iterator rule.
 * @author Ian Christian Myers
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-iterator"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("no-iterator", rule, {
    valid: [
        "var a = test[__iterator__];",
        "var __iterator__ = null;"
    ],
    invalid: [
        { code: "var a = test.__iterator__;", errors: [{ message: "Reserved name '__iterator__'.", type: "MemberExpression"}] },
        { code: "Foo.prototype.__iterator__ = function() {};", errors: [{ message: "Reserved name '__iterator__'.", type: "MemberExpression"}] },
        { code: "var a = test['__iterator__'];", errors: [{ message: "Reserved name '__iterator__'.", type: "MemberExpression"}] }
    ]
});
