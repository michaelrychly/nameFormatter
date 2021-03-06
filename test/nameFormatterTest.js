const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const NameFormatter = require('../nameFormatter');

function assertNameGetsInverted(input, output){
  assert.equal(input, output);
};

describe('NameFormatter', function() {
  describe('invert name', function(){
    let nameFormatter;

    beforeEach(function(){
      nameFormatter = new NameFormatter();
    });

    context('with input empty', function() {
      it('should return an emtpy string when passed an emtpy string', function(){
        const inputName = "";
        const expectedOutput = "";

        assertNameGetsInverted(nameFormatter.invertName(inputName), expectedOutput);
      })
    })

    context('with input single name', function() {
      let expectedOutput;

      beforeEach(function() {
        expectedOutput = "name";
      });

      it('should return a single name when passed a single name', function(){
        const inputName = "name";

        assertNameGetsInverted(nameFormatter.invertName(inputName), expectedOutput);
      })

      it('should return a single name when passed a single name with extra spaces', function() {
        const inputName = " name ";

        assertNameGetsInverted(nameFormatter.invertName(inputName), expectedOutput);
      })
    })

    context('with full input', function() {
      let expectedOutput;

      beforeEach(function() {
        expectedOutput = "last-name, first-name";
      });

      it('should return a last-name, first-name when passed a first and last-name', function() {
        const inputName = "first-name last-name";

        assertNameGetsInverted(nameFormatter.invertName(inputName), expectedOutput);
      })

      it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names', function() {
        const inputName = " first-name last-name";

        assertNameGetsInverted(nameFormatter.invertName(inputName), expectedOutput);
      })
    })

    context('with honorific', function() {
      it('should return an empty string when passed a single honorific', function() {
        const inputName = "Dr.";
        const expectedOutput = "";

        assertNameGetsInverted(nameFormatter.invertName(inputName), expectedOutput);
      })

      it('should return honorific first-name when passed honorific first-name', function() {
        const inputName = "Dr. first-name";
        const expectedOutput = "Dr. first-name";

        assertNameGetsInverted(nameFormatter.invertName(inputName), expectedOutput);
      })
    })

    context('with honorific and full name', function() {
      let expectedOutput;

      beforeEach(function() {
        expectedOutput = "Dr. last-name, first-name";
      });

      it('should return a honorific last-name, first-name when passed honorific first-name last-name', function() {
        const inputName = "Dr. first-name last-name";

        assertNameGetsInverted(nameFormatter.invertName(inputName), expectedOutput);
      })

      it('should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function() {
        const inputName = " Dr. first-name last-name ";

        assertNameGetsInverted(nameFormatter.invertName(inputName), expectedOutput);
      })
    })

    context('with input undefined', function(){
      it('should throw an error when name is undefined', function() {
        const inputName = undefined;

        expect(function() { nameFormatter.invertName(inputName); }).to.throw('Error');
      })
    })
  });
})
