// Example 1: Selecting Elements
// Selecting an element by ID
const contentDiv = document.getElementById('content');

// Selecting elements by class name
const textParagraphs = document.getElementsByClassName('text');

// Selecting elements using querySelector (first match)
const firstParagraph = document.querySelector('.text');

// Selecting all elements that match a CSS selector
const allParagraphs = document.querySelectorAll('.text');

console.log(contentDiv);          // Outputs the div with id 'content'
console.log(textParagraphs);      // Outputs an HTMLCollection of paragraphs with class 'text'
console.log(firstParagraph);      // Outputs the first paragraph with class 'text'
console.log(allParagraphs);       // Outputs a NodeList of all paragraphs with class 'text'


// Example 2: Creating and Inserting Elements
// Create a new paragraph element
const newParagraph = document.createElement('p');

// Add text content to the new paragraph
newParagraph.textContent = 'This is a new paragraph created dynamically.';

// Append the new paragraph to the content div
contentDiv.appendChild(newParagraph);


// Example 3: Modifying Existing Elements
// Change the text of the first paragraph
firstParagraph.textContent = 'Updated text content!';

// Change the class of the first paragraph
firstParagraph.className = 'updated-text';

// Add an attribute to the first paragraph
firstParagraph.setAttribute('data-info', 'First paragraph');


// Example 4: Removing Elements
// Remove the second paragraph
const secondParagraph = textParagraphs[1];
secondParagraph.parentNode.removeChild(secondParagraph);


// Example 5: Event Handling
// Create a button and add it to the content div
const button = document.createElement('button');
button.textContent = 'Click Me';
contentDiv.appendChild(button);

// Add an event listener to the button
button.addEventListener('click', function() {
    alert('Button was clicked!');
});


// Example 6: Traversing the DOM
// Select the content div
const contentDiv = document.getElementById('content');

// Get the first child element (paragraph)
const firstChild = contentDiv.firstElementChild;

// Traverse to the next sibling
const nextSibling = firstChild.nextElementSibling;

// Log the text content of each
console.log('First child text:', firstChild.textContent);
console.log('Next sibling text:', nextSibling.textContent);
