'use strict'
const logger = require('../src/middleware/logger');

describe('Logger middlewaer test', () => {
    let consoleSpy;
    let req={};
    let res={};
    let next = jest.fn();

    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log')
        //OR:
        // consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {
        //     console.error('MockImplementation Error')
        // });
    })
    test('It\'s Logging req details ', () => {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    // afterEach()=> {
    //     consoleSpy.mockRestore();
    // }

})