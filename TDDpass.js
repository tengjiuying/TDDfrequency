/*** Created by think；pad on 2017/5/18.*/
var = require("lodash");
var chai =require("chai");
var sinon =require("sinon");
var sinonChai = require("sinon-chai");
var expect = require("sinon-chai");
chai.use(sinonChai);

var main = require("../lib/main.js");

describe("World Frequency",function(){
    it("returns empty string given empty string ", function(){
        var result = main('');
        expect(result).toEqual('');
    });
});