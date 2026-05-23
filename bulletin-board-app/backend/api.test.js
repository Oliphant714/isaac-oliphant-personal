const api = require('./backend/api');
const events = require('./backend/events');

describe('API Functions', () => {
  describe('exports.events', () => {
    test('should return all events', () => {
      const res = {
        json: jest.fn()
      };

      api.events(null, res);

      expect(res.json).toHaveBeenCalledWith(events);
    });
  });

  describe('exports.event', () => {
    test('should return a single event by ID', () => {
      const req = {
        param: {
          eventId: 0
        }
      };

      const res = {
        json: jest.fn()
      };

      api.event(req, res);

      expect(res.json).toHaveBeenCalledWith(events[0]);
    });

    test('should handle different event IDs', () => {
      const req = {
        param: {
          eventId: 1
        }
      };

      const res = {
        json: jest.fn()
      };

      api.event(req, res);

      expect(res.json).toHaveBeenCalledWith(events[1]);
    });
  });
});
