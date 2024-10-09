//
'use strict';

// Example 1: Preventing Accidental Globals
function calculateArea(radius) {
    // Incorrect as PI is not referenced
    /* pi = 3.14159; // ReferenceError: pi is not defined */
    // Should be
    const pi = 3.14159;
    return pi * radius * radius;
}

calculateArea(5);

// Example 2: Understanding this in Functions


