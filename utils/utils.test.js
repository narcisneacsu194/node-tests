const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(5, 7, (sum) => {
        expect(sum).toBe(12).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should return the square of a number', () => {
      var res = utils.square(5);

      expect(res).toBe(25).toBeA('number');
    });

    it('should async square a number', (done) => {
      utils.asyncSquare(5, (square) => {
        expect(square).toBe(25).toBeA('number');
        done();
      });
    });
  });

  it('should set firstName and lastName properties for user object', () => {
    var fullName = 'Narcis Neacsu';
    var user = {
      age: 24,
      location: 'Bucharest'
    };
    user = utils.setName(user, fullName);

    expect(user).toInclude({firstName: 'Narcis', lastName: 'Neacsu'})
      .toBeA('object');
  });
});

// it('should expect some value', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'narcis'}).toNotEqual({name: 'Narcis'});
//   // expect([2, 3, 4]).toExclude(5);
//   expect({
//     name: 'Narcis',
//     age: 24,
//     location: 'Bucharest'
//   }).toExclude({
//     age: 24
//   });
// });
