var expect = require('chai').expect;
var events = require('../backend/events');
var api = require('../backend/api');

describe('Events Data', function() {
  it('should be an array', function() {
    expect(events).to.be.an('array');
  });

  it('should have at least one event', function() {
    expect(events.length).to.be.at.least(1);
  });

  it('should have events with required properties', function() {
    events.forEach(function(event) {
      expect(event).to.have.property('id');
      expect(event).to.have.property('title');
    });
  });
});

describe('API Functions', function() {
  describe('events', function() {
    it('should return all events', function() {
      var req = {};
      var res = {
        json: function(data) {
          expect(data).to.equal(events);
        }
      };
      api.events(req, res);
    });
  });

  describe('event', function() {
    it('should return a specific event', function() {
      var req = {
        params: {
          eventId: 0
        }
      };
      var res = {
        json: function(data) {
          expect(data).to.equal(events[0]);
        }
      };
      api.event(req, res);
    });
  });
});
