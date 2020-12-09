const loggerMiddleware = require('../lib/middleware/logger');

describe('logger middleware', () => {
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        // Attach to the console:
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        // put the console back together
        consoleSpy.mockRestore();
    });

    it('properly logs some output', () => {
        loggerMiddleware(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    });
})
