"use strict";

const parseMolecule = require("..");
const mocks = require("./mocks");

require("chai").should();

describe("Toy Problem Heroes", function () {
  it("Should parse the molecules to atoms", function () {
    parseMolecule(mocks.water).should.eql({ H: 2, O: 1 });
  });
  it("Should take into account parentheses", function () {
    parseMolecule(mocks.magnesiumHydroxide).should.eql({ Mg: 1, O: 2, H: 2 });
  });
  it("Should take into account that brackets can be round, square, curly and nested", function () {
    parseMolecule(mocks.fremySalt).should.eql({ K: 4, O: 14, N: 2, S: 4 });
  });
});
