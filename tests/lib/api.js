/**
 * @fileoverview Tests for api.
 * @author Gyandeep Singh
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

var assert = require("chai").assert,
    api = require("../../lib/api");

describe("api", function() {

    it("should have RuleTester exposed", function() {
        assert.isFunction(api.RuleTester);
    });

    it("should have CLIEngine exposed", function() {
        assert.isFunction(api.CLIEngine);
    });

    it("should have linter exposed", function() {
        assert.isObject(api.linter);
    });

    it("should have SourceCode exposed", function() {
        assert.isFunction(api.SourceCode);
    });
});
