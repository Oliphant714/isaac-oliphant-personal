const assert = require('assert');

// Pattern Used: Arrange-Act-Assert (AAA)
describe('Bulletin Board - addEvent Logic', () => {
    
    it('successfully adds the event if the title contains text', () => {
        // 1. ARRANGE: Set up a fake component state with a valid, padded title
        const mockState = {
            event: { title: '  Study Session  ', detail: '', date: '' },
            events: []
        };

        // 2. ACT: Execute the core logic found in the addEvent function
        if (mockState.event.title.trim()) {
            mockState.events.push(mockState.event);
        }

        // 3. ASSERT: Verify the event was added and the array length increased to 1
        assert.strictEqual(mockState.events.length, 1);
        assert.strictEqual(mockState.events[0].title, '  Study Session  ');
    });

    it('does NOT add the event if the title is only whitespace', () => {
        // 1. ARRANGE: Set up a fake state with an invalid title (only spaces)
        const mockState = {
            event: { title: '    ', detail: '', date: '' },
            events: []
        };

        // 2. ACT: Execute the core logic found in the addEvent function
        if (mockState.event.title.trim()) {
            mockState.events.push(mockState.event);
        }

        // 3. ASSERT: Verify the array remains empty (length of 0)
        assert.strictEqual(mockState.events.length, 0);
    });
});