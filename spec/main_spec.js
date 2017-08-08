"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("99_bottles_of_beer", function(){
    sinon.spy(console, 'log');

    it("99 bottles of beer on the wall", function(){
        let result = main();
        let expect_string =
`99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer.`;
        expect(expect_string).to.equal(result[0]);
    });

    it("1 bottles of beer on the wall", function(){
        let result = main();
        let expect_string =
`1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer.`;
        expect(expect_string).to.equal(result[98]);
    });

    it("0 bottles of beer on the wall", function(){
        let result = main();
        let expect_string =
`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        expect(expect_string).to.equal(result[99]);
    });
});