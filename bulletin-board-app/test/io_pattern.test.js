var expect = require('chai').expect;
var api = require('../backend/api');
var events = require('../backend/events');

describe('Simple Data I/O Pattern', function() {
  
  // The "Simple Data I/O Pattern" involves:
  // 1. Input: Providing a key or identifier (e.g., eventId)
  // 2. Process: Retrieving or processing data based on that input
  // 3. Output: Returning the resulting data
  
  it('should correctly map Input (eventId) to Output (event object)', function() {
    // Input
    var inputEventId = 0; // Using index 0 as input
    var req = {
      params: {
        eventId: inputEventId
      }
    };

    // Placeholder for Output
    var outputData;
    var res = {
      json: function(data) {
        outputData = data;
      }
    };

    // Execution (Process)
    api.event(req, res);

    // Validation (I/O Verification)
    expect(outputData).to.not.be.undefined;
    expect(outputData).to.equal(events[inputEventId]);
    expect(outputData.id).to.equal(events[inputEventId].id);
  });

  it('should return all events when requested (Bulk I/O)', function() {
    var req = {};
    var outputData;
    var res = {
      json: function(data) {
        outputData = data;
      }
    };

    api.events(req, res);

    expect(outputData).to.be.an('array');
    expect(outputData).to.deep.equal(events);
  });

});
